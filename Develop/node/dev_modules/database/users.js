/*
    author: SynthesisDu (https://github.com/SynthesisDu)
    software: WebStorm 2021.2, Node.js v14.17.5
    datetime: 2021.8.13 07:58
    filename: users.js
    git_repo: https://github.com/VMAxCoding/VMAClubSystem
 */

const mysql = require('./interface');

exports.searchRowByField = function (byFieldName, byFieldValue) {
    return mysql.select('*', 'users', byFieldName, byFieldValue);
}
