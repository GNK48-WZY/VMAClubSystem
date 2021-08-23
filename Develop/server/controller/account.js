const db = require("../core/mysql");
const moment = require("moment");
const md5 = require("md5");
// json web token
const jwt = require("jwt-simple");

class AccountController {

    //post 注册的
    async register(request, resposne, next) {

        let insertSql = 'INSERT INTO users(`u_name`,`u_pwd`,`u_sex`,`u_create`)VALUES(?,?,?,?) ; ';
        let params = [
            request.body.name,
            md5(request.body.pwd + require("../config").key),
            request.body.sex == "" ? "男" : request.body.sex,
            // 2020-12-12 12:12:12
            moment().format("YYYY-MM-DD HH:mm:ss")
        ];

        try {
            let result = await db.exec(insertSql, params);
            if (result && result.affectedRows >= 1) {
                resposne.json({
                    code: 200,
                    msg: "注册成功",
                })
            } else {
                resposne.json({
                    code: 200,
                    msg: "注册失败",
                })
            }

        } catch (error) {
            resposne.json({
                code: -200,
                msg: "服务器异常",
                error
            })
        }
    }
    async login(request, resposne, next) {

        let loginSql = "SELECT `u_id`,`u_name`,`u_sex`,`u_create` FROM users WHERE u_name=? AND u_pwd=? AND u_status=1 ;";

        let params = [
            request.body.name,
            //md5的2次加密
            md5(request.body.pwd + require("../config").key),
        ]

        try {
            let result = await db.exec(loginSql, params);

            if (result && result.length >= 1) {
                resposne.json({
                    code: 200,
                    msg: "登录成功",
                    data: result[0],
                    token: createToken(result[0])
                })
            } else {
                resposne.json({
                    code: 200,
                    msg: "登录失败",
                })
            }
        } catch (error) {
            resposne.json({
                code: 200,
                msg: "登录失败",
                error
            })
        }


        function createToken(data) {

            return jwt.encode({
                exp: Date.now() + (1000 * 60 * 60 * 24),
                info: data
            }, require("../config").tokenKey);

        }

    }
}

module.exports = new AccountController();