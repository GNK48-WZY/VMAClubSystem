/*
    author: SynthesisDu (https://github.com/SynthesisDu)
    software: WebStorm 2021.2, Node.js v14.17.5
    datetime: 2021.8.13 08:21
    filename: server_interface.js
    git_repo: https://github.com/VMAxCoding/VMAClubSystem

    和MySQL服务器连接的接口, 基本的增删改查语句的接口
 */

const mysql = require('mysql2/promise');

exports.select = async function (searchFieldName, tableName, byFieldName, byFieldValue) {
    const connection = await mysql.createConnection({
        host:'localhost',
        user: 'root',
        password: '6lXVNlfK_ZX&',
        database: 'vmaclubsystem'
    });
    connection.connect();
    const re = await connection.execute('SELECT ' + searchFieldName + ' FROM ' + tableName + ' WHERE ' + byFieldName + ' = "' + byFieldValue + '";');
    connection.end();
    return re[0];
}