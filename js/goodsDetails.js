const url = decodeURI(location.search)
const goodsId = url.split('goods_id=')[1]
// 获取商品详情
function goodesDetailsList() {
    public.getGoodsDetails(goodsId, (res) => {
        const detailsHtml = template('goodsDetails', res.message)
        const imgArticleHtml = template('goodsImgArticle', res.message.pics)
        $('.main').html(detailsHtml)
        $('.img-article').html(imgArticleHtml)
    })
}

$(function () {
    goodesDetailsList()
})