// tab栏点击事件
function switchGoods() {
    $(this).children().addClass('main-left-checked')
    $(this).siblings().children().removeClass('main-left-checked')
}

// 渲染商品主内容
function getGoodsContent(index) {
    console.log(index);
    template.defaults.imports.index = index
    $.get('https://api-hmugo-web.itheima.net/api/public/v1/categories', (res) => {
        const contentHtml = template('contentChoose', res.message)
        $('.main-right').html(contentHtml)
    })
}

// 渲染商品tab
function getGoodsTab() {
    $.get('https://api-hmugo-web.itheima.net/api/public/v1/categories', (res) => {
        console.log(res);
        const tabHtml = template('tabChoose', res.message)
        $('.main-left').html(tabHtml)
        $('.main-left-list').click(switchGoods)
        getGoodsContent(0)
    })
}

$(function () {
    getGoodsTab()
})