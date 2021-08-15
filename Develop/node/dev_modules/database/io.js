/*
    author: SynthesisDu (https://github.com/SynthesisDu)
    software: WebStorm 2021.2, Node.js v14.17.5
    datetime: 2021.8.13 08:21
    filename: io.js
    git_repo: https://github.com/VMAxCoding/VMAClubSystem
 */


const mysql = require('./server/server_interface');

function searchUsers (byFieldName, byFieldValue) {
    mysql.select('*', 'users', byFieldName, byFieldValue).then(re => {
        console.log(JSON.stringify(re));
    });
}



searchUsers('id', '1');