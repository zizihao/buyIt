// 获取商品详情
getGoodsDetails(2, (res) => {
    const detailsHtml = template('goodsDetails', res.message)
    const imgArticleHtml = template('goodsImgArticle', res.message.pics)
    $('.main').html(detailsHtml)
    $('.img-article').html(imgArticleHtml)
})

$(function () {
    getGoodsDetails()
})