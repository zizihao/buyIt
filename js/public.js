// 获取商品详情
function getGoodsDetails(id, callback) {
    if (callback) {
        $.get('https://api-hmugo-web.itheima.net/api/public/v1/goods/detail', { goods_id: id }, (res) => {
            callback(res)
        })
    }
}