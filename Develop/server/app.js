'use strict';

const express = require("express");
const cors = require("cors");

const bodyParser = require("body-parser");

const server = express();

const database = require('./mysql/mysql.js');

server.get("/getUsers", async (request, response, next) => {
    let name_cn = request.query.name_cn;
    let parmas = [name_cn];
    let sql = "SELECT * FROM users WHERE name_cn = ? ;";
    let result = await database.query(sql, parmas);
    // 返回到前端
    response.json(result);
})














//引入中间件
server.use(bodyParser.urlencoded({extended:false}));
server.use(bodyParser.json());

server.use(cors());
server.use(express.urlencoded({extended: false}));
server.use(express.json());

// //静态资源服务器
server.use(express.static("./public"));
server.use(function (req, res, next) {
    if (!req.user) return next(createError(401, 'Please login to view this page.'))
    next()
})

server.use("/cart", require("./routers/carts"));
server.use("/goods", require("./routers/goods"));
server.use("/account", require("./routers/account"));

// http://127.0.0.1:8080/test
server.use('/test', async (request, response, next) => {
    console.log(">>>http://127.0.0.1:8080/test");
    console.log("");
    response.json('Hello world!');
})

server.use('', async (request, response, next) => {
    console.log(">>>http://127.0.0.1:8080");
    console.log("");
    response.json('http://127.0.0.1:8080');
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

