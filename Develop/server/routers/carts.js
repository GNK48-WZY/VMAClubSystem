const jwt = require("jwt-simple");
const express = require("express");

let router = express.Router();

//需要token 拦截,如果带了token,才能让你访问一下的4个接口
//前端需要发送token
router.use((request, resposne, next) => {
    //前端携带数据到后台,有哪些方式?
    if (request.body.token || request.query.token || request.headers.token || request.cookies.token) {
        try {
            let token = request.body.token || request.query.token || request.headers.token || request.cookies.token
            let result = jwt.decode(token, require("../config").tokenKey);
            if (result) {

                request.Info = result.info;
                next();
            }
        } catch (err) {
            resposne.json({
                code: -200,
                msg: "token失效,请重新登录"
            })
        }
    }
})

router.get("/getCart", require("../controller/carts").getCartByUser);
router.post("/deleteCart", require("../controller/carts").deleteCart);
router.post("/modifyCart", require("../controller/carts").modifyCart);
router.post("/addCart", require("../controller/carts").addCart);
router.get("/giveMoney", require("../controller/carts").giveMoney);

module.exports = router;