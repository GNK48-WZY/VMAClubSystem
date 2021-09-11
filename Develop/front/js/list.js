const list = (function () {

    axios.defaults.baseURL = "http://127.0.0.1:8080";

    const loadData = async () => {
        let data = await axios({
            url: "/data/list.json"
        })

        let res = data.data;

        let strHtml = ``;
        res.forEach(el => {
            strHtml += `
            <a href='goodsinfo.html?id=${el.id}'>
            <div class="item">
                <img src="http://127.0.0.1:8080/${el.img}" alt="">
                <p>
                    名称:<span>${el.pname}</span>
                </p>
                <p>
                    价格:<span>${el.price}</span>
                </p>
                </div></a>`
        });

        $(".box").html(strHtml);


    }

    return {
        loadData
    }

})()

$(function () {
    list.loadData()
})