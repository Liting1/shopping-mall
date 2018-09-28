<template>
<div class="footer">
  <div class="footer-left">
    <ul>
      <li>
        <a href="javascript:;">
          <div class="icon-home2"></div>
          <span>首页</span>
        </a>
      </li>
      <li>
        <a href="javascript:;">
          <div class="icon-ungroup"></div>
          <span>分享</span>
        </a>
      </li>
      <li>
        <a href="javascript:;">
          <div class="icon-cart"></div>
          <span>购物车</span>
        </a>
        <router-link to="/shopcart">
          <div class="icon-cart"></div>
          <span>购物车</span>
        </router-link>
      </li>
      <li>
        <a href="javascript:;">
          <div class="icon-bubbles"></div>
          <span>客服</span>
        </a>
      </li>
    </ul>
  </div>
  <div class="footer-right"><a href="javascript:;" @click="addCart(router)">加入购物车</a></div>
</div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
  data () {
    return {
      router: this.$router
    }
  },
  methods: {
    ...mapActions([
      'addCart'
    ])
  }
}
</script>

<style scoped lang="stylus">
  @import '../../assets/css/style.css'
  .footer
    width: 100%
    height: 45px
    position: fixed
    bottom: 0
    left: 0
    box-sizing: border-box
    z-index: 100
    background-color #fff
    display: flex
    .footer-left
      width: 100%
      ul
        display: flex
        li
          flex: 1
          text-align: center
          margin-top: 5px
          div
            font-size: 20px
            color: #999
          span
            font-size: 10px
            line-height: 12px
            color: #333
    .footer-right
      width: 40%
      flex-shrink: 0
      background-color: #ec5411
      font-size: 14px
      text-align: center
      line-height: 45px
      a
        color: #fff
        display: block
</style>
