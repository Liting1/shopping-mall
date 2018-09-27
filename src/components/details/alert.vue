<template>
<div class="alert-box">
  <div class="alert-top">
<<<<<<< HEAD
    <div class="alert-img"><img src="https://imgazure.microsoftstore.com.cn/medias/MIC2372-593Wx390H-1.png?context=bWFzdGVyfGltYWdlc3wyMDUzNTJ8aW1hZ2UvcG5nfGltYWdlcy9oODIvaDk2Lzk4NTkxNjk3NDY5NzQucG5nfGE3MjA5NThhODEwMTQzYjYwYjlkMTE3ODBkZDRlNzgwZDY1N2U1Mzc2ODNmZWNiNzY1YmEyMWZlZDE2ZGNlYzQ" alt=""></div>
    <div class="alert-title">
      <h3>微软 Surface Laptop<br> 酷睿 m3/4GB/128GB/亮铂金（升级为 Office 2016）</h3>
      <div>
        <p><span>品牌建议售价 : </span><i>¥ 6688</i></p>
        <p><span>售价 : </span><i class="price">¥ 6688</i></p>
=======
    <div class="alert-img"><img :src="goodsData.imgArr[1]" alt=""></div>
    <div class="alert-title">
      <h3>{{goodsData.goods_name}}<br> {{goodsData.config[shop.config].name}}</h3>
      <div>
        <p><span>品牌建议售价 : </span><i>{{goodsData.config[shop.config].old_price}}</i></p>
        <p><span>售价 : </span><i class="price">{{goodsData.config[shop.config].new_price}}</i></p>
>>>>>>> ...
      </div>
    </div>
    <div class="close" @click="hidden">X</div>
  </div>
  <div class="alert-content">
<<<<<<< HEAD
    <div class="color">
=======
    <div class="color" style="display: none">
>>>>>>> ...
      <h3>请选择颜色</h3>
      <ul>
        <li>
          <span></span><em>亮铂金</em>
        </li>
        <li>
          <span></span><em>亮铂金</em>
        </li>
        <li>
          <span></span><em>亮铂金</em>
        </li>
        <li>
          <span></span><em>亮铂金</em>
        </li>
      </ul>
    </div>
    <div class="config">
      <h3>请选择配置</h3>
      <ul>
<<<<<<< HEAD
        <li><span>酷睿 m3/4GB/128GB/亮铂金（升级为 Office 2016）</span></li>
        <li><span>酷睿 m3/4GB/128GB/亮铂金（升级为 Office 2016）</span></li>
        <li><span>酷睿 m3/4GB/128GB/亮铂金（升级为 Office 2016）</span></li>
        <li><span>酷睿 m3/4GB/128GB/亮铂金（升级为 Office 2016）</span></li>
        <li><span>酷睿 m3/4GB/128GB/亮铂金（升级为 Office 2016）</span></li>
        <li><span>酷睿 m3/4GB/128GB/亮铂金（升级为 Office 2016）</span></li>
=======
        <li v-for="(item, index) in goodsData.config" :key="item.id" :class="{'active': index === shop.config}" @click="addclass(index)"><span>{{item.name}}</span></li>
>>>>>>> ...
      </ul>
    </div>
    <div class="pages">
      <h3>套餐类型</h3>
      <ul>
<<<<<<< HEAD
        <li><span>扩展坞流量套餐</span></li>
        <li><span>扩展坞流量套餐</span></li>
        <li><span>扩展坞流量套餐</span></li>
=======
        <li v-for="(item, index) in goodsData.page" :key="item.id" :class="{'active': index === shop.page}" @click="pages(index)"><span>{{item}}</span></li>
>>>>>>> ...
      </ul>
    </div>
  </div>
  <div class="alert-bottom">
<<<<<<< HEAD
    <button>加入购物车</button>
=======
    <button @click="addCart(router)">加入购物车</button>
>>>>>>> ...
  </div>
</div>
</template>

<script>
<<<<<<< HEAD
import {mapActions} from 'vuex'
export default {
  methods: {
    ...mapActions([
      'hidden'
    ])
=======
import {mapState, mapActions} from 'vuex'
export default {
  data () {
    return {
      router: this.$router
    }
  },
  computed: mapState([
    'goodsData',
    'shop'
  ]),
  methods: {
    ...mapActions([
      'hidden',
      'addCart',
      'isNum'
    ]),
    addclass (index) {
      this.shop.config = index
    },
    pages (index) {
      this.shop.page = index
      if (index === (this.goodsData.page.length - 1)) {
        this.isNum(true)
      } else {
        this.shop.num = 1
        this.isNum(false)
      }
    }
  },
  beforeDestroy () {
    this.hidden()
>>>>>>> ...
  }
}
</script>

<style scoped lang="stylus">
.alert-box
  width: 100%
  position: absolute
  bottom: 0
  left: 0
  background-color: #fff
  .alert-top
    border-bottom: solid 1px #ccc
    display: flex
    padding: 0 12px
    box-sizing: border-box
    position: relative
    .alert-img
      width: 33.78%
      margin-right: 12px
      border: solid 1px #ccc
      position: relative
      flex-shrink: 0
      top: -20px
      box-sizing: border-box
      background-color: #fff
      &:after
        content: ''
        display: block
        padding-top: 100%
      img
        position: absolute
        width: 100%
        height: auto
        top: 0
        left: 0
    .alert-title
      h3
        font-size: 12px
        color: #333
        line-height: 1.46em
        margin-top: 10px
      p
        color: #666
        font-size: 10px
        line-height: 16px
        .price
          font-size: 16px
          color: #ec3901
    .close
      position: absolute
      right: 5px
      top: 5px
  .alert-content
    max-height: 300px
    min-height: 30px
    overflow: scroll
    padding: 0 12px
    box-sizing: border-box
    .color
      overflow: hidden
      h3
        font-size: 12px
        line-height: 42px
      ul > li
        padding: 0 2px
        background-color: #eee
        min-width: 57px
        height: 22px
        line-height: 18px
        width: auto
        margin-right: 4px
        border: 2px solid #3a9cd7
        box-sizing: border-box
        display: inline-block
        font-size: 0
        span
          display: inline-block
          width: 12px
          height: 12px
          vertical-align: middle
          margin-right: 6px
          background-color: red
        em
          font-size: 10px
          vertical-align: middle
          display: inline-block
          color: #666
    .config
<<<<<<< HEAD
=======
      overflow: hidden
>>>>>>> ...
      h3
        font-size: 12px
        line-height: 42px
      ul > li
        display: block
        width: 49.3%
        height: 38px
        background-color: #eee
        vertical-align: top
        margin-bottom: 1.35%
        box-sizing: border-box
        overflow: hidden
        padding: 0 20px 0 5px
        float: left
<<<<<<< HEAD
=======
        border 2px solid #eee
        &.active
          border: 2px solid #3a9cd7
>>>>>>> ...
        span
          display: inline-block
          max-height: 32px
          overflow: hidden
          line-height: 16px
          font-size: 12px
      ul li:nth-child(2n+1)
          margin-right: 1.35135135%
    .pages
<<<<<<< HEAD
=======
      overflow: hidden
      margin-bottom: 20px
>>>>>>> ...
      h3
        font-size: 12px
        line-height: 42px
      ul li
        width: 49.3%
        height: 38px
        font-size: 12px
<<<<<<< HEAD
        background-color: #eeeeee
=======
        background-color: #eee
>>>>>>> ...
        vertical-align: top
        padding: 0 20px 0 5px
        margin-bottom: 1.35135135%
        box-sizing: border-box
        float: left
        overflow: hidden
<<<<<<< HEAD
=======
        border 2px solid #eee
        &.active
          border: 2px solid #3a9cd7
>>>>>>> ...
        span
          line-height: 20px
      ul li:nth-child(2n+1)
          margin-right: 1.35%
  .alert-bottom
    button
      display: block
      width: 100%
      height: 45px
      background-color: #ec5411
      color: #fff
      font-size: 14px
      border: none
</style>
