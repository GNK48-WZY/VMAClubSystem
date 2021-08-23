const reg = (() => {

    $.validator.addMethod("checkName", function (val, ele) {
        return /^[a-z]+\w+/i.test(val);
    })


    axios.defaults.baseURL = "http://127.0.0.1:8080";

    //请求拦截器  interceptors
    axios.interceptors.request.use(function (config) {
        // 携带token
        return config;
    })
    //响应拦截
    axios.interceptors.response.use(function (config) {
        return config;
    })

    const validate = () => {

        $("form").validate({
            rules: {
                name: {
                    required: true,
                    rangelength: [6, 18],
                    checkName: true
                },
                pwd: {
                    "required": true
                },
                pwd2: {
                    equalTo: "#pwd"
                }
            },
            messages: {
                name: {
                    "required": "用户必填",
                    rangelength: "用户名长度必须是{0}-{1}",
                    checkName: "用户名必须字母开头"
                },
                pwd: {
                    "required": "密码必填"
                },
                pwd2: {
                    equalTo: "2次密码不一致"
                }
            },
            submitHandler() {


                //URLSearchParams 支持 post上 application/x-www-form-urlencoed
                let data = new URLSearchParams();
                data.append("name", $('[name="name"]').val());
                data.append("pwd", $('[name="pwd"]').val());
                data.append("sex", $('[name="sex"]').val());

                 axios({
                    url: "/account/reg",
                    method: "post",
                    data: data
                }).then(function(res) {
                    console.log(res)
                })

           



                return false;
            }

        })
    }

    return {
        validate
    }

})()


$(function () {

    reg.validate();


})