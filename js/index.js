// 渲染轮播图
function getBanner() {
    $.get('https://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata', (res) => {
        const templateHtml = template('bannerMain', res.message)
        $('.swiper-wrapper').html(templateHtml)
        bannerInit()
    })
}

// 轮播图swiper
function bannerInit() {
    let mySwiper = new Swiper('.swiper-container', {
        loop: true, // 循环模式选项
        // 如果需要分页器
        pagination: {
            el: '.swiper-pagination',
        },
    });
}

// 渲染分类
function getCategory() {
    $.get('https://api-hmugo-web.itheima.net/api/public/v1/home/catitems', (res) => {
        const templateHtml = template('categoryMain', res.message)
        $('.category').html(templateHtml)
    })
}

// 渲染精选
function getChoiceness() {
    $.get('https://api-hmugo-web.itheima.net/api/public/v1/home/floordata', (res) => {
        console.log(res);
        const templateHtml = template('choicenessMain', res.message)
        $('.floor').html(templateHtml)
    })
}

$(function () {
    getBanner()
    getCategory()
    getChoiceness()
})