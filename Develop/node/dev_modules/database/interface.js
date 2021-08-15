/*
    author: SynthesisDu (https://github.com/SynthesisDu)
    software: WebStorm 2021.2, Node.js v14.17.5
    datetime: 2021.8.13 08:21
    filename: interface.js
    git_repo: https://github.com/VMAxCoding/VMAClubSystem
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