'use strict';

const db = require("../core/mysql");
const moment = require("moment");

class CartsController {

    //购物车 添加购物车
    async addCart(request, resposne, next) {
        try {
            // 拿到 u_id
            let queryParams = [
                request.Info.u_id,
                request.body.pid
            ]
            //根据用户的id和 产品的id 去数据库里查询一次,如果有 就修改输了,否则就插入一条新的
            let query = " SELECT * FROM `carts` WHERE u_id=? AND p_id=? ";


            let querReuslt = await db.exec(query, queryParams);

            // 判断是否已经购买过?
            if (querReuslt.length >= 1) {
                //已经购买了
                let updatePrams = [
                    Number(request.body.pnumber),
                    request.Info.u_id,
                    request.body.pid
                ]

                console.log(updatePrams)

                let updateSQL = 'UPDATE `carts` SET p_number=p_number+? , p_total=p_number*p_price WHERE u_id=? AND p_id=?;'

                let updateResult = await db.exec(updateSQL, updatePrams);
                if (updateResult && updateResult.affectedRows >= 1) {

                    resposne.json({
                        code: 200,
                        msg: "加入购车成功u",
                    })
                } else {
                    resposne.json({
                        code: 200,
                        msg: "加入购车失败u",

                    })
                }
            } else {
                //还没购买

                let insertParmas = [
                    request.Info.u_id,
                    request.body.pid,
                    request.body.pname,
                    request.body.pimg,
                    request.body.pnumber,
                    request.body.pprice,
                    request.body.pprice * request.body.pnumber,
                    moment().format("YYYY-MM-DD HH:mm:ss")

                ]
                let insertSql = "INSERT INTO carts (`u_id`,`p_id`,`p_name`,`p_img`,`p_number`,`p_price`,p_total,`p_create`) ";
                insertSql += " values(?,?,?,?,?,?,?,?);";

                let resultInset = await db.exec(insertSql, insertParmas);

                //affectedRows
                if (resultInset && resultInset.affectedRows >= 1) {
                    resposne.json({
                        code: 200,
                        msg: "加入购车成功i",
                    })
                } else {
                    resposne.json({
                        code: 200,
                        msg: "加入购车失败i",
                    })
                }


            }

        } catch (error) {
            resposne.json({
                code: -200,
                msg: "加入购车失败",
                error
            })
        }

    }

    // 获取当前用户的购车
    async getCartByUser(request, resposne, next) {
        //1.得到当前的用户id
        let params = [
            request.Info.u_id,
        ]
        let sql = "SELECT * FROM `carts` WHERE u_id=? AND p_status=1 ;";

        try {

            let result = await db.exec(sql, params);

            resposne.json({
                code: 200,
                msg: "查询成功",
                data: result
            })

        } catch (error) {

            resposne.json({
                code: -200,
                msg: "查询失败"
            })
        }


    }

    // 修改数量
    async modifyCart(request, resposne, next) {

        let parmas = [
            request.body.pnumber,
            request.body.cid,
        ]
        let sql = "UPDATE carts SET `p_number`=?  ,`p_total`=`p_number`*`p_price` WHERE c_id=? and p_status=1 ;";

        try {
            let result = await db.exec(sql, parmas);
            if (result && result.affectedRows >= 1) {
                resposne.json({
                    msg: "修改成功",
                    code: 200
                })
            } else {
                resposne.json({
                    msg: "修改失败",
                    code: 200
                })
            }

        } catch (error) {
            console.log(error);

            resposne.json({
                msg: "修改失败",
                code: -200,
                error //error 之后再后台的控制台中输出,不能带到前端,测试而已
            })
        }

    }

    // 删除购物车
    async deleteCart(request, resposne, next) {

        let parmas = [
            request.body.cid,
        ]
        let sql = "UPDATE carts SET `p_status` = 0  ,`p_total`=`p_number`*`p_price` WHERE c_id=? and p_status=1;";

        try {
            let result = await db.exec(sql, parmas);
            if (result && result.affectedRows >= 1) {
                resposne.json({
                    msg: "删除成功",
                    code: 200
                })
            } else {
                resposne.json({
                    msg: "删除失败",
                    code: 200
                })
            }

        } catch (error) {
            console.log(error);

            resposne.json({
                msg: "删除失败",
                code: -200,
                error //error 之后再后台的控制台中输出,不能带到前端,测试而已
            })
        }

    }

    // 结算 把状态1 改成2
    async giveMoney(request, resposne, next) {
        resposne.send("addCart")
    }

}

module.exports = new CartsController();