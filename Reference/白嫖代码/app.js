'use strict';

const express = require("express");
const cors = require("cors");

const bodyParser = require("body-parser");

const server = express();

const database = require('./mysql/mysql.js');

const mainURL = 'http://127.0.0.1:8080';

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
    ////////////////////////////////////////////////////////////////////
    console.log(json_result)
    // console.log(json_result)结果：
    // {
    //     id: 1,
    //     name_cn: '测试',
    //     name_eng: 'test',
    //     teacher: 1,
    //     leader: 1,
    //     img_logo: null,
    //     img_background: null,
    //     info: ''
    // }
    console.log(json_result.id)
    // console.log(json_result.id)结果：
    // 1
    console.log(json_result.name_cn)
    // console.log(json_result.name_cn)结果：
    // 测试
    console.log(json_result.name_eng)
    // console.log(json_result.name_eng)结果：
    // test
    console.log('etc')
    // ...
    // etc
    ////////////////////////////////////////////////////////////////////
    // 返回到前端
    response.json(json_result);
});


// //引入中间件
// server.use(bodyParser.urlencoded({extended:false}));
// server.use(bodyParser.json());
//
// server.use(cors());
// server.use(express.urlencoded({extended: false}));
// server.use(express.json());
//
// // //静态资源服务器
// server.use(express.static("./public"));
// server.use(function (req, res, next) {
//     if (!req.user) return next(createError(401, 'Please login to view this page.'))
//     next()
// })
//
// server.use("/cart", require("./routers/carts"));
// server.use("/goods", require("./routers/goods"));
// server.use("/account", require("./routers/account"));
//
// // http://127.0.0.1:8080/test
// server.use('/test', async (request, response, next) => {
//     console.log(">>>http://127.0.0.1:8080/test");
//     console.log("");
//     response.json('Hello world!');
// })

server.get('', async (request, response, next) => {
    response.sendFile( __dirname.replace('server', 'front/MemberHomePage.html'));
})

server.get('/src/SampleClubImage.jpg', async (request, response, next) => {
    response.sendFile( __dirname.replace('server', 'front/src/SampleClubImage.jpg'));
})
server.get('/src/SampleClubLogo.jpg', async (request, response, next) => {
    response.sendFile( __dirname.replace('server', 'front/src/SampleClubLogo.jpg'));
})
server.get('/css/MemberHomePage.css', async (request, response, next) => {
    response.sendFile( __dirname.replace('server', 'front/css/MemberHomePage.css'));
})
server.get('/js/vue.js', async (request, response, next) => {
    response.sendFile( __dirname.replace('server', 'front/js/vue.js'));
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

