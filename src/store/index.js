import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations.js'
import actions from './actions.js'
import getters from './getters.js'
Vue.use(Vuex)

const state = {
  lows: false, // 弹框的显示与隐藏
  bd: 0, // body元素的宽度
  scrollHeight: 0, // 滚动条卷去的高度
  is_num: false, // 当套餐为单机时才显示
  goodsData: {
    goods_name: '微软 Surface Pro 中文版',
    goods_id: 8,
    imgArr: [
      'http://www.liting.ltd/static/img/aa01.png',
      'http://www.liting.ltd/static/img/aa02.png',
      'http://www.liting.ltd/static/img/aa03.png',
      'http://www.liting.ltd/static/img/aa04.png'
    ],
    old_price: '¥ 5888',
    new_price: '¥ 4,388',
    config: [{
      name: '酷睿 m3/4GB/128GB/银灰',
      old_price: '¥ 5888',
      new_price: '¥ 4,388'
    }, {
      name: '酷睿 m3/4GB/128GB/银灰（含特制版亮铂金键盘）',
      old_price: '5888',
      new_price: '¥ 4,988'
    }, {
      name: '酷睿 i5/8GB/128GB/银灰',
      old_price: '¥ 6888',
      new_price: '¥ 6,488'
    }, {
      name: '酷睿 i5/8GB/128GB/银灰（含特制版亮铂金键盘）',
      old_price: '¥ 7888',
      new_price: '¥ 6,988'
    }, {
      name: '酷睿 i5/8GB/256GB/银灰',
      old_price: '¥ 8888',
      new_price: '¥ 8,088'
    }, {
      name: '酷睿 i5/8GB/256GB/银灰（含特制版亮铂金键盘）',
      old_price: '¥ 9888',
      new_price: '¥ 8,288'
    }, {
      name: '酷睿 i7/8GB/256GB/银灰',
      old_price: '¥ 11888',
      new_price: '¥ 10,088'
    }],
    desc: [
      '• 在笔记本电脑、平板电脑与工作室模式间随意切换',
      '• 配备第 7 代英特尔酷睿处理器',
      '• 续航长达 13.5 小时1，满足日常所需',
      '• 12.3" PixelSense 触控显示屏',
      '• 支持 Surface 触控笔及 Surface Dial',
      '• 预装 Windows 10 家庭版，Office 家庭和学生版'
    ],
    page: [
      '优选套餐',
      '臻享套餐',
      '单机'
    ]
  },
  shop: { // 加入购物车
    goods: {}, // 商品信息
    num: 1, // 商品的数量
    config: 0, // 商品配置
    page: 0 // 商品套餐
  },
  cart: []
}

export default new Vuex.Store({
  state,
  actions,
  mutations,
  getters
})
