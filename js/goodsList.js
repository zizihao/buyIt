// 获取商品列表
function getGoodsList() {
    $.get('https://api-hmugo-web.itheima.net/api/public/v1/goods/search', (res) => {
        const html = template('goodsContent', res.message.goods)
        $('.main').html(html)
    })
}

$(function () {
    getGoodsList()
})