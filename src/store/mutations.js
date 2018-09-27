// 实际执行事件内容
const SHOW = 'SHOW'
const HIDDEN = 'HIDDEN'
const SIZE = 'SIZE'
const SCROLL = 'SCROLL'
<<<<<<< HEAD

export default {
  [SHOW] (state) {
    state.lows = true
    $('body').css({
      'height': '100%',
      'overflow': 'hidden'
    })
  },
  [HIDDEN] (state) {
    state.lows = false
    $('body').css({
      'height': 'auto',
      'overflow': 'auto'
    })
  },
  [SIZE] (state, s) {
    state.bd = s
  },
  [SCROLL] (state, h) {
    state.scrollHeight = h
=======
const GOODS = 'GOODS'
const ADDCART = 'ADDCART'
const ISNUM = 'ISNUM'
const MODIFYCONFIG = 'MODIFYCONFIG'
const MODIFYPAGE = 'MODIFYPAGE'
const MODIFYNUM = 'MODIFYNUM'
export default {
  [SHOW] (state) { // 显示下面的弹出层
    if (state.bd < 766) {
      state.lows = true
    }
  },
  [HIDDEN] (state) { // 隐藏下面的弹出层
    state.lows = false
  },
  [SIZE] (state, s) { // 浏览器宽度的大小
    state.bd = s
  },
  [SCROLL] (state, h) { // 浏览器滚动条的位置
    state.scrollHeight = h
  },
  [GOODS] (state, f) { // 存储对应的商品信息
    state.goodsData = f
  },
  [ADDCART] (state, r) { // 加入购物车
    if (state.shop.page !== state.goodsData.page.length - 1) {
      state.shop.num = 1
    }
    state.shop.goods = state.goodsData
    state.cart.push(JSON.parse(JSON.stringify(state.shop)))
    r.push('/shopcart')
  },
  [MODIFYCONFIG] (state, num) { // 修改产品配置
    state.shop.config = num
  },
  [MODIFYPAGE] (state, num) { // 修改产品套餐
    state.shop.page = num
  },
  [MODIFYNUM] (state, num) { // 修改产品数量
    if (state.shop.num <= 1 && num < 0) return
    state.shop.num += num
  },
  [ISNUM] (state, bool) { // 是否显示产品数量模块
    state.is_num = bool
>>>>>>> ...
  }
}
