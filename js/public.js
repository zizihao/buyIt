// 加参数
function appendParam(Array, resList, callback) {
    const data = Array
    let resData = resList
    resData.forEach((item, key) => {
        item.new = data[key]
        if (key === resData.length - 1) {
            callback(resData)
        }
    })
}

// 获取商品详情
function getGoodsDetails(id, callback) {
    if (callback) {
        $.get('https://api-hmugo-web.itheima.net/api/public/v1/goods/detail', { goods_id: id }, (res) => {
            callback(res)
        })
    }
}

// 搜索按钮跳转搜索页面
function searchJump() {
    location.assign('./searchCentre.html')
}

// 回退事件
function rollbackOut() {
    history.back()
}

// 公共对象
const public = {
    appendParam,
    getGoodsDetails
}