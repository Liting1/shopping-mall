<template>
<div class="shopcart" ref="shopcart">
  <div class="container">
    <div class="shop">
      <h2 class="title">购物车内有<span style="color: #f62f24">{{cart.length}}</span>件商品</h2>
      <div class="oneRow">
        <span class="col-1">商品图片</span>
        <span class="col-2">名称和规格</span>
        <span class="col-3">数量</span>
        <span class="col-4">价格</span>
      </div>
      <div v-for="(item, index) in cart" :key="item.id" class="table">
        <div class="twoRow">
          <span class="col-t1">{{item.goods.page[item.page]}}</span>
          <span class="col-t2">{{money(item.goods.config[item.config].new_price, item.num)}}</span>
          <span class="col-t3">套餐总价</span>
        </div>
        <div class="threeRow">
          <div class="col-pic">
            <img width="100%" :src="item.goods.imgArr[0]">
            <p><a href="javascript:;" @click='delatePage(index)'>删除套餐</a></p>
          </div>
          <div class="col-name">
            <h2><a href="#">{{item.goods.goods_name}}</a></h2>
            <p>{{item.goods.config[item.config].name}}</p>
          </div>
          <div class="col-num hidden" style="height: 2px"></div>
          <div class="col-num"><span>数量：</span>{{item.num}}</div>
        </div>
        <div class="fourRow" style="display: none">
          <div class="col-f1">
            <div class="img">
              <img width="100%" src="https://imgazure.microsoftstore.com.cn/medias/MIC1770-300Wx180H-1.png?context=bWFzdGVyfGltYWdlc3w3NzgyOHxpbWFnZS9wbmd8aW1hZ2VzL2g0Yy9oYjYvOTQ5OTcwOTQwNzI2Mi5wbmd8NTA0N2VjMDc5NTc2MjRmZmE5OWMyYjM0MDZjMDAyMWI4YmYyNzE0ZGQ3ZWQ5OTExYTQxMTkzZDk4M2MxMmZjMg" alt="">
            </div>
          </div>
          <div class="col-f2">
            <a href="#">微软 Surface 鼠标</a>
          </div>
          <div class="col-f3 hidden" style="height: 2px"></div>
          <div class="col-f3"><span>数量：</span>1</div>
        </div>
      </div>
    </div>
    <div class="money" ref="moneyBox">
      <div class="money-price">
        <span>总计</span>
        <span>{{sum}}</span>
      </div>
      <div class="money-btn">
        <a href="javascript:;" @click="play()">结算</a>
      </div>
      <div class="money-box">
        <div class="row">
          <a href="#">
            <span></span>
            <span>30天退换货</span>
          </a>
          <a href="#">
            <span></span>
            <span>全场免运费</span>
          </a>
        </div>
        <div class="row">
          <a href="#">
            <span></span>
            <span>24x7在线服务</span>
          </a>
          <a href="#">
            <span></span>
            <span>极速上手服务</span>
          </a>
        </div>
      </div>
      <p class="money-p">全场免运费，16:00前完成订单，当日发货（包含预售或延期交货商品的订单除外）</p>
      <p class="money-p">支付方式：支付宝/微信支付/银联/网银支付/货到付款</p>
      <p class="money-p" style="color: #ec5411">Office、Windows等电子下载版软件产品，一经售出不予退换</p>
    </div>
  </div>
</div>
</template>
<script type="text/javascript">
import { mapState, mapGetters } from 'vuex'
export default {
  data () {
    return {}
  },
  computed: {
    ...mapState([
      'scrollHeight',
      'bd',
      'cart'
    ]),
    ...mapGetters([
      'sum'
    ])
  },
  methods: {
    difference () {
      var boxHeight = this.$refs.moneyBox.offsetHeight
      var box = this.$refs.shopcart.offsetHeight
      return box - boxHeight
    },
    play () {
      console.log(this.cart)
    },
    delatePage (index) {
      this.cart.splice(index, 1)
    },
    money (v, n) {
      return this.fun.moneyStr(this.fun.strMoney(v) * n)
    }
  },
  watch: {
    scrollHeight () {
      if ((this.scrollHeight < this.difference() - 70) && (this.bd > 767)) {
        this.$refs.moneyBox.style.marginTop = this.scrollHeight + 'px'
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  .shopcart
    padding: 25px 0px
    overflow: hidden
    min-height: 600px
    .shop
      width: 70%
      float: left
      h2
        font-size: 1.125em
        color: #333
        margin-bottom: 15px
      .oneRow
        display: flex
        line-height: 32px
        font-size: 14px
        color: #666
        .col-1
          width: 16%
          text-align: center
          margin: 0 1%
          min-width: 100px
          overflow: hidden
        .col-2
          width: 46%
          margin: 0 1%
        .col-3
          text-align: center
          width: 15%
          margin: 0 1%
        .col-4
          text-align: center
          width: 15%
          margin: 0 1%
      .table
        .twoRow
          color: #666
          font-size: 14px
          border-top: 1px solid #d3d3d3
          background: #eaeaea
          line-height: 32px
          height: 32px
          .col-t1
            float: left
            width: 16%
            margin: 0 2%
            min-width: 100px
            text-align: center
          .col-t2
            float: right
            width: 15%
            margin: 0 1%
            text-align: center
          .col-t3
            float: right
            width: 15%
            text-align: center
            margin: 0 1%
        .threeRow
          margin: 20px 0
          overflow: hidden
          .col-pic
            float: left
            width: 16%
            text-align: center
            margin: 0 1%
            min-width: 100px
            overflow: hidden
            p
              font-size: 14px
              margin-top: 10px
              text-align: center
              a
                color: #666
                text-decoration: underline
          .col-name
            float: left
            width: 40%
            margin: 0 1%
            h2
              font-size: 16px
              a
                color: #333
            p
              font-size: 14px
              line-height: 21px
              margin-top: 10px
              color: #666
          .col-num
            float: right
            text-align: center
            width: 15%
            margin: 0 1%
            span
              display: none
        .fourRow
          padding: 20px 0
          overflow: hidden
          .col-f1
            float: left
            width: 16%
            text-align: center
            margin: 0 1%
            min-width: 100px
            overflow: hidden
            .img
              width: 60%
              margin-left: 40%
          .col-f2
            float: left
            width: 40%
            margin: 0 1%
            a
              font-size: 16px
              line-height: 1em
              color: #333
          .col-f3
            float: right
            text-align: center
            width: 15%
            margin: 0 1%
            span
              display: none
    .money
      width: 26%
      float: right
      line-height: 28px
      .money-price
        overflow: hidden
        padding-top: 10px
        font-weight: bold
        font-size: 18px
        span:first-child
          float: left
          color: #333
        span:last-child
          float: right
          color: #f62f24
      .money-btn
        overflow: hidden
        a
          width: 150px
          height: 36px
          line-height: 36px
          background-color: #ec5411
          color: #fff
          display: inline-block
          text-align: center
          text-decoration: none
          font-size: 14px
          margin-top: 25px
          float: right
      .money-box
        text-align: right
        margin-top: 20px
        .row
          a
            line-height: 30px
            display: inline-block
            text-align: left
            width: 125px
            white-space: nowrap
            margin-left: 20px
            color: #666766
            span:first-child
              width: 20px
              height: 20px
              display: inline-block
              margin-right: 5px
              background-color: pink
              vertical-align: middle
            span:last-child
              vertical-align: middle
              font-size: 14px
      .money-p
        margin-top: 15px
        color: #999
        font-size: 12px
        line-height: 21px
        text-align: right
      .money-p:last-child
        border-bottom: solid 1px #ccc
        padding-bottom: 22px

@media only screen and (max-width: 766px)
  .shopcart
    .container
      width: 100%
      padding: 0 12px
      box-sizing: border-box
      .shop
        width: 100%
        .oneRow
          .col-3, .col-4
            display: none
        .twoRow
          .col-t2
            width: 24%
          .col-t3
            width: 30%
            text-align: right
        .threeRow
          .col-name
            width: 60%
          .hidden
            display: none
          .col-num
            color: #666
            width: 25%
            margin-top: 16px
            font-size: 14px
            float: left
            text-align: left
            span
              display: inline-block
        .fourRow
          .hidden
            display: none
          .col-f2
            width: 50%
          .col-f3
            width: 40%
            float: left
            text-align: left
            margin-top: 12px
            color: #666
            span
              display: inline-block
      .money
        width: 100%
        .money-box
          overflow: hidden
          .row
            float: right

</style>
