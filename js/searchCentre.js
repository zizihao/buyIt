// 渲染数据
function goodsSearchResult(data) {
    const html = template('searchCentre', data)
    $('.main').html(html)
}

// 获取搜索数据
function getSearchData() {
    $.get('https://api-hmugo-web.itheima.net/api/public/v1/goods/qsearch', { query: '电视' }, (res) => {
        let goodsData = res.message
        goodsData.forEach((item, key) => {
            getGoodsDetails(item.goods_id, (res) => {
                goodsData[key].goods_small_logo = res.message.goods_small_logo
                if (key === goodsData.length - 1) {
                    goodsSearchResult(goodsData)
                }
            })
        })
    })
}

$(function () {
    getSearchData()
})