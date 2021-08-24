'use strict';

const express = require("express");
const cors = require("cors");
// const bodyParser=require("body-parser");

const server = express();

//引入中间件
// server.use(bodyParser.urlencoded({extended:false}));
// server.use(bodyParser.json());

server.use(cors());
server.use(express.urlencoded({extended: false}));
server.use(express.json());

//静态资源服务器
server.use(express.static("./public"));
// server.use(function (req, res, next) {
//     if (!req.user) return next(createError(401, 'Please login to view this page.'))
//     next()
// })

server.use("/account", require("./routers/account"));
server.use("/cart", require("./routers/carts"));
server.use("/goods", require("./routers/goods"));

server.listen(8080, () => {
    console.log("启动服务器完毕!");
})

