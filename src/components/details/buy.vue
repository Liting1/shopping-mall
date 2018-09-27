<template>
<div class="buy-bottom">
  <div class="buy-box">
<<<<<<< HEAD
    <div class="buy-num">
      <span>数量：</span>
      <div>
        <a @click="minus">-</a>
        <span>{{num}}</span>
        <a @click="addNum">+</a>
      </div>
    </div>
    <div class="buy-btn">
      <button>加入购物车</button>
=======
    <div class="buy-num" v-show="is_num">
      <span>数量：</span>
      <div class="myClass">
        <a @click="modifynum(-1)">-</a>
        <span>{{shop.num}}</span>
        <a @click="modifynum(1)">+</a>
      </div>
    </div>
    <div class="buy-btn">
      <button @click="addCart(router)">加入购物车</button>
>>>>>>> ...
    </div>
  </div>
  <div class="buy-feature-box">
    <div>
      <a href="javascript:;">
        <div class="icon"></div><span>30天退换货</span>
      </a>
      <a href="javascript:;">
        <div class="icon"></div><span>30天退换货</span>
      </a>
      <a href="javascript:;">
        <div class="icon"></div><span>极速上手服务</span>
      </a>
      <a href="javascript:;">
        <div class="icon"></div><span>30天退换货</span>
      </a>
    </div>
  </div>
</div>
</template>

<script>
<<<<<<< HEAD
export default {
  data () {
    return {
      num: 1
    }
  },
  methods: {
    addNum () {
      this.num++
    },
    minus () {
      this.num--
    }
=======
import { mapState, mapActions } from 'vuex'
export default {
  data () {
    return {
      router: this.$router
    }
  },
  computed: mapState([
    'shop',
    'is_num'
  ]),
  methods: {
    ...mapActions([
      'addCart',
      'modifynum'
    ])
>>>>>>> ...
  }
}
</script>

<style scoped lang="stylus">
  .buy-bottom
    padding-top: 25px
    .buy-box
<<<<<<< HEAD
      display: flex
      justify-content: space-between
      .buy-num
=======
      overflow: hidden
      .buy-num
        float: left
>>>>>>> ...
        display: flex
        >span
          line-height: 24px
          height: 24px
        div
          font-size: 0
          a
            display: inline-block
            font-size: 22px
            width: 24px
            height: 24px
            text-align: center
            line-height: 24px
            background-color: #ccc
            box-sizing: border-box
            vertical-align: bottom
            font-weight: bold
            color: #666
            cursor: pointer
            border: none
            outline: none
          span
            display: inline-block
            vertical-align: bottom
            box-sizing: border-box
            width: 45px
            height: 24px
            line-height: 24px
            background-color: #fff
            border: solid 1px #ccc
            font-size: 14px
            font-weight: 400
            color: #000
            text-align: center
      .buy-btn
        text-align: right
<<<<<<< HEAD
=======
        float: right
>>>>>>> ...
        button
          display: inline-block
          width: 150px
          height: 35px
          line-height: 35px
          border: none
          text-align: center
          font-size: 14px
          text-decoration: none
          background-color: #da3b01
          color: #fff
          cursor: pointer
          margin-bottom: 15px
    .buy-feature-box
      margin: 30px 0
      div
        text-align: right
        .icon
          width: 20px
          height: 20px
          background-color: pink
          display: inline-block
          vertical-align: middle
        span
          font-size: 12px
          vertical-align: middle
          margin: 0 5px
          color: #666

@media only screen and (max-width: 1024px)
  .buy-bottom
    padding-top: 15px

@media only screen and (max-width: 980px)
  body .buy-bottom
    .buy-feature-box div
      font-size: 0
      a
        width: 50%
        display: inline-block
        line-height: 30px
        min-width: 110px
        box-sizing: border-box
      a:nth-child(2n+1)
        text-align: left
        padding-left: 45px
      a:nth-child(2n)
        text-align: left
        padding-left: 10px

@media only screen and (max-width: 765px)
  .buy-bottom
    .buy-box
      display: none
<<<<<<< HEAD
=======

.myClass
  -moz-user-select: none; /*火狐*/
  -webkit-user-select: none;  /*webkit浏览器*/
  -ms-user-select: none;   /*IE10*/
  -khtml-user-select: none; /*早期浏览器*/
  user-select: none;
>>>>>>> ...
</style>
