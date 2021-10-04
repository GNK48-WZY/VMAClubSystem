'use strict';

const express = require("express");
const cors = require("cors");

const bodyParser = require("body-parser");

const server = express();

const database = require('./mysql/mysql.js');

const mainURL = 'http://127.0.0.1:8080';

server.use(express.static('../src'));

server.get("/clubs", async (request, response, next) => {
    let id = request.query.id;
    let name_eng = request.query.name;
    let result;
    if (id !== undefined) {
        let parmas = [id];
        let sql = "SELECT * FROM clubs WHERE id = ? ;";
        result = await database.query(sql, parmas);
    }
    if (name_eng !== undefined) {
        let parmas = [name_eng];
        let sql = "SELECT * FROM clubs WHERE name_eng = ? ;";
        result = await database.query(sql, parmas);
    }
    let json_result = JSON.parse(JSON.stringify(result).replace('[', '').replace(']', ''));
    console.log(json_result)
    // 返回到前端
    response.json(json_result);
});

server.get('', async (request, response, next) => {
    response.sendFile( __dirname.replace('server', 'front/MemberHomePage.html'));
})

// http://127.0.0.1:8080
server.listen(8080, () => {
    console.log(" __      ____  __                 _____          _ _             ");
    console.log(" \\ \\    / /  \\/  |   /\\          / ____|        | (_)            ");
    console.log("  \\ \\  / /| \\  / |  /  \\   __  _| |     ___   __| |_ _ __   __ _ ");
    console.log("   \\ \\/ / | |\\/| | / /\\ \\  \\ \\/ / |    / _ \\ / _` | | '_ \\ / _` |");
    console.log("    \\  /  | |  | |/ ____ \\  >  <| |___| (_) | (_| | | | | | (_| |")
    console.log("     \\/   |_|  |_/_/    \\_\\/_/\\_\\\\_____\\___/ \\__,_|_|_| |_|\\__, |")
    console.log("                                                            __/ |")
    console.log("                                                           |___/ ")
    console.log("=====================================================================================")
    console.log(" _  _  __  __    __    ___  __    __  __  ____  ___  _  _  ___  ____  ____  __  __ ")
    console.log("( \\/ )(  \\/  )  /__\\  / __)(  )  (  )(  )(  _ \\/ __)( \\/ )/ __)(_  _)( ___)(  \\/  )")
    console.log(" \\  /  )    (  /(__)\\( (__  )(__  )(__)(  ) _ <\\__ \\ \\  / \\__ \\  )(   )__)  )    ( ")
    console.log("  \\/  (_/\\/\\_)(__)(__)\\___)(____)(______)(____/(___/ (__) (___/ (__) (____)(_/\\/\\_)")
    console.log("")
    console.log("服务器启动: http://127.0.0.1:8080 (ctrl + c 结束)");
    console.log("")
})

