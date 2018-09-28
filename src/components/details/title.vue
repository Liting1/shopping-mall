<template>
<div class="title">
  <div class="title-right-title">
    <h1>{{goodsName}}<br>{{config.name}}</h1>
  </div>
  <div class="title-price">
    <div style=" float: left">
      <div class="title-price-l">
        <span>品牌建议售价 :</span>
        <span>售价 :</span>
      </div>
      <div class="title-price-s">
        <span>{{config.old_price}}</span>
        <span>{{config.new_price}}</span>
      </div>
    </div>
    <div class="title-star">
      <div>
        <div class="title-icon" v-for="item in star" :key="item.id"><v-icon :num="'star'"></v-icon></div>
        <div class="title-pl">( 38条评论 )</div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import icon from '@/components/icon'
export default {
  props: ['goodsName', 'config'],
  data () {
    return {
      star: [1, 2, 3, 4, 5]
    }
  },
  components: {
    'v-icon': icon
  }
}
</script>

<style scoped lang="stylus">
@media only screen and (min-width: 766px)
  .title-right-title
      margin-top: 30px
      padding-top: 35px
      h1
        font-size: 24px
        line-height: 30px
        margin-bottom: 10px
  .title-price
      height: 80px
      line-height: 80px
      border-bottom: 1px solid #c7c7c7
      .title-price-l
        display: inline-block
        line-height: 28px
        vertical-align: middle
        text-align: right
        span
          line-height: 24px
          display: block
          font-size: 14px
      .title-price-s
        display: inline-block
        vertical-align: middle
        line-height: 28px
        span
          line-height: 24px
          display: block
          font-size: 14px
        span:last-child
          font-size: 24px
          color: #da3b01
      .title-star
        display: inline-block
        float: right
        height: 60px
        overflow: hidden
        margin-top: 20px
        div
          .title-icon
            line-height: 20px
            width: 20px
            height: 20px
            display: inline-block
            margin: 0 2px
          .title-pl
            display: inline-block
            height: 60px
            line-height: 54px
            font-size: 14px
            color: #666
            vertical-align: middle

@media only screen and (max-width: 1024px)
  body .title
    .title-price
      height: auto
      div
        float: none !important
      .title-star
        float: none
        margin-top: 0
        display: block
        height: 50px
        margin-top: -5px
        div
          line-height: 20px
          height: 20px

@media only screen and (max-width: 765px)
  .title
    .title-price
      > div
        display: flex
      span
        font-size: 12px
        line-height: 18px
        color: #666
        display: block
      .title-price-s
        span:last-child
          font-size: 18px
          color: #ec3901
          margin-left: -30px
      .title-star
        display: none !important
    .title-right-title
      font-size: 16px
      color: #333
      line-height: 1.437em
      margin-top: 30px
</style>
