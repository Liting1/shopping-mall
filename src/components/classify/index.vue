<template>
<div class="classify container">
  <div class="classify-left">
    <ul>
      <li><span>{{items.product.title}}</span></li>
      <li v-for="item in items.product.list" :key='item.id'><router-link :to="item.path">{{item.name}}</router-link></li>
    </ul>
  </div>
  <div class="classify-right">
    <ul>
      <li v-for="item in items.hot" :key='item.id'>
        <a href="#">
          <div class="img"><img width="100%" :src="item.img" alt=""></div>
          <p v-html="item.desc"></p>
          <div class="priceWrap">
            <span v-if="show">售价：<i>{{item.price}}</i><em> 起</em></span>
            <span :class="{'color': !show}">{{item.buy}}</span>
          </div>
        </a>
      </li>
    </ul>
  </div>
</div>
</template>

<script>
export default {
  props: ['show', 'items']
}
</script>

<style scoped lang="stylus">
@media only screen and (max-width: 1000px)
  body .classify-left
    display: none
  body .classify .classify-right
    width: 100%
    li
      flex: 1

@media only screen and (max-width: 1300px)
  .classify-left ul li a
    font-size: 18px !important

@media only screen and (max-width: 1140px)
  .classify-left ul li a
    font-size: 14px !important

@media only screen and (max-width: 767px)
  body .classify
    width: 100%
    padding: 0 12px
    box-sizing: border-box
  body .classify .classify-right ul li p
    font-size: 14px
    height: auto
  body .classify .classify-right ul li span
    font-size: 12px !important

.classify
  font-family: "SegoeUI", "Hiragino Sans GB", "Microsoft YaHei"
  display: flex
  overflow: hidden
  .classify-left
    width: 22.13114754%
    margin-right: 3.27868852%
    ul
      background-color #0078d7
      display: flex
      flex-direction: column
      height: 100%
      padding-bottom: 4%
      li
        flex: 1
        text-align: center
        a
          line-height: 2.05em
          color: #fff
          font-size: 18px
      li:first-child
        padding-top: 4%
        span
        font-size: 18px
        line-height: 2.05em
        text-align: center
        font-weight: bold
        color: #fff
  .classify-right
    width: 74.59016393%
    ul
      display: flex
      li
        width: 32.08791209%
        margin-right: 1.86813187%
        p
          height: 90px
          margin: 10px 0 5px
          color: #666
          font-size: 16px
          line-height: 20px
        .priceWrap
          span
            display: block
            color: #666
            font-size: 16px
            line-height: 20px
            i
              color: #ec5411
            em
              color: #ec5411
          span:last-child
            color: #ec5411
          .color
            color: #0067b8
      li:last-child
        margin-right: 0
</style>
