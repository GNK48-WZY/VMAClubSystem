'use strict';

const fs = require("fs");// file system
class goodsController {
    getGoodsById(request, response, next) {
        let id = request.query.id;
        let listStr = fs.readFileSync("./public/data/list.json").toString();
        // console.log(listStr)
        //findIndex find
        let result = JSON.parse(listStr).find(el => el.id == id);

        response.json(result);
    }
}

module.exports = new goodsController();