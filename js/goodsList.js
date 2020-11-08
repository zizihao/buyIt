// 参数
const url = decodeURI(location.search)
const query = url.split('query=')[1]
let param = { query }
if (query === undefined) {
    param = {}
}
// 获取商品列表
function getGoodsList() {
    $.get('https://api-hmugo-web.itheima.net/api/public/v1/goods/search', param, (res) => {
        console.log(res);
        const html = template('goodsContent', res.message.goods)
        $('.main').html(html)
    })
}

$(function () {
    getGoodsList()
})