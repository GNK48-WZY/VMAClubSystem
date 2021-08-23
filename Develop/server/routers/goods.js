const express = require("express");

let router = express.Router();


router.get("/goodsById",require("../controller/goods").getGoodsById);



module.exports = router;