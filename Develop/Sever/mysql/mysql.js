// https://www.npmjs.com/package/mysql

// cmd debug {
// >>> mysql -u root -p
// >>> alter user 'root'@'localhost' identified with mysql_native_password by '6lXVNlfK_ZX&';
// >>> flush privileges;
// >>> quit;
// >>> }

'use strict';

const mysql = require('mysql');

// 连接数据库
const pool = mysql.createPool({
    host: "127.0.0.1",
    user: "root",
    password: "6lXVNlfK_ZX&",
    port: 3306,
    database:'vmaclubsystem'
});

// const query = (sql, params, cb) => {
//     // 获取连接
//     pool.getConnection((err, conn) => {
//         if (err) {
//             console.log("****************************");
//             console.log("连接MySQL失败");
//             pool.releaseConnection();
//         }
//         conn.query(sql, params, (err, result, fields) => {
//             if (err) {
//                 // 释放连接对象
//                 conn.release();
//                 console.log("****************************");
//                 console.log("执行SQL失败");
//                 return;
//             }
//             cb(result, fields);
//             // 释放连接对象
//             conn.release();
//         })
//     });
// };
//
// let sql = "select * from users;";
// let params = [];
// query(sql, params, function (result, fields) {
//     console.log(result);
// });


pool.on('connection', (connection) => {
    //logger.info("connection!");
});

pool.on('enqueue', () => {
    //logger.info('Waiting for available connection slot');
});

module.exports.Pool = pool;

module.exports.getConnection = (cb) => {
    if (typeof cb == "function") {
        pool.getConnection(function (err, connection) {
            cb(err, connection);
        });
    } else {
        return new Promise((resolve, reject) => {
            pool.getConnection((err, connection) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(connection);
                }
            });
        });
    }
};
module.exports.query = (sql, values, cb) => {
    if (typeof cb == "function") {
        pool.getConnection((err, connection) => {
            if (err) {
                connection.release();
                cb(err);
            } else {
                connection.query(sql, values, (error, rows) => {
                    connection.release();
                    cb(error, rows);
                });
            }
        });
    } else {
        return new Promise((resolve, reject) => {
            pool.getConnection((err, connection) => {
                if (err) {
                    connection.release();
                    reject(err);
                } else {
                    connection.query(sql, values, (error, rows) => {
                        connection.release();
                        if (error)
                            reject(error);
                        else
                            resolve(rows);
                    });
                }
            });
        });
    }
};
module.exports.beginTransaction = (connection, cb) => {
    if (typeof cb == "function") {
        connection.beginTransaction(function (err) {
            if (err) {
                throw err;
            }
            cb(null, connection);
        });
    } else {
        return new Promise((resolve, reject) => {
            connection.beginTransaction(function (err) {
                if (err) {
                    reject(err);
                } else {
                    resolve(connection);
                }
            });
        });
    }
};
module.exports.rollback = (connection, cb) => {
    if (typeof cb == "function") {
        connection.rollback(function () {
            connection.release();
            cb && cb();
        });
    } else {
        return new Promise((resolve, reject) => {
            connection.rollback(function (err) {
                connection.release();
                if (err) {
                    reject(err);
                } else {
                    resolve();
                }
            });
        });
    }
};
module.exports.commit = (connection, cb) => {
    if (typeof cb == "function") {
        connection.commit(function (err) {
            if (err) {
                connection.rollback(function () {
                    cb && cb(err);
                    throw err;
                });
            }
            connection.release();
            cb && cb();
        });
    } else {
        return new Promise((resolve, reject) => {
            connection.commit(function (err) {
                if (err) {
                    connection.rollback(function () {
                        reject(err);
                    });
                }
                connection.release();
                resolve();
            });
        });
    }
};
//检查是否链接失败
this.getConnection((err, connection) => {
    if (err) throw err;
    else {
        // logger.info("connected success!");
        connection.release();
    }
});

/**
 * 带事务
 * @param sql
 * @param values
 * @returns {Promise}
 */
module.exports.query2 = (connection, sql, values, cb) => {
    if (typeof cb == "function") {
        connection.query(sql, values, (error, rows) => {
            cb(error, rows);
        });
    } else {
        return new Promise((resolve, reject) => {
            connection.query(sql, values, (error, rows) => {
                if (error)
                    reject(error);
                else
                    resolve(rows);
            });
        });
    }
};
