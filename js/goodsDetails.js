// 获取商品列表
function getGoodsDetails() {
    $.get('https://api-hmugo-web.itheima.net/api/public/v1/goods/detail', { goods_id: 1 }, (res) => {
        const detailsHtml = template('goodsDetails', res.message)
        const imgArticleHtml = template('goodsImgArticle', res.message.pics)
        $('.main').html(detailsHtml)
        $('.img-article').html(imgArticleHtml)
    })
}

$(function () {
    getGoodsDetails()
})