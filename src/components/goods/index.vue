<template>
<div class="goods container">
  <ul>
    <li v-for="item in goods" :key="item.id">
      <div class="inner">
        <div class="goods-img"><img width="100%" :src="item.img" alt=""></div>
        <div class="desc">
          <h3>{{item.title}}</h3>
          <p>{{item.desc}}</p>
          <div class="price">
            <span>{{item.price}}</span>
          </div>
        </div>
      </div>
    </li>
  </ul>
</div>
</template>

<script>
export default {
  props: ['goods']
}
</script>

<style scoped lang="stylus">
@media only screen and (min-width: 766px)
  .goods
    margin-top: 3.38983051%
    ul
      border-top: solid 1px #e4e4e4
      border-left: solid 1px #e4e4e4
      display: flex
      flex-wrap: wrap
      li
        width: 25%
        border-right: 1px solid #e4e4e4
        box-sizing: border-box
        border-bottom: solid 1px #e4e4e4
        .inner
          padding: 0 10%
          box-sizing: border-box
          height: 100%
          width: 100%
          .goods-img
            margin-top: 12.5%
          .desc h3
            margin-top: 12.5%
            font-size: 22px
            line-height: 28px
            color: #1570a6
          .desc p
            margin-top: 8%
            font-size: 16px
            line-height: 24px
            color: #666
            height: 120px
            overflow: hidden
          .desc .price
            padding-bottom: 10%
            margin-top: 16.5%
            font-size: 16px
            line-height: 18px
      li:first-child
        background-image: url('http://www.liting.ltd/static/img/so01.jpg')
        background-size: cover
        .inner
          .goods-img
            display: none
          .desc
            p
              margin-top: 0
            .price
              display: none

@media only screen and (max-width: 1200px)
  .goods ul li
    width: 33.33%
@media only screen and (max-width: 950px)
  .goods ul li
    width: 50%
@media only screen and (max-width: 765px)
  .goods
    margin-top: 3.38983051%
    border-top: solid 1px #ccc
    ul li
      width: 100%
      border-bottom: solid 1px #ccc
      .inner
        display: flex
        width: 100%
        padding: 8px 0
        .goods-img
          width: 44.44444444%
        .desc
          width: 55.55555556%
          padding: 0 5px
          h3
            font-size: 12px
            color: #333
            margin-top: 5%
            line-height: 28px
          p
            font-size: 11px
            margin-top: 3%
            color: #666
            line-height: 24px
          .price
            padding-bottom: 10%
            font-size: 12px
            margin-top: 5%
            line-height: 18px
    ul li:first-child
      height: 233px
      background-image:url("~@/assets/img/cc.jpg")
      background-size: contain
      padding: 0 24px
      background-color: #f8f8f8
      background-repeat: no-repeat
      background-position: center bottom
      box-sizing: border-box
      .inner
        height: 100%
        width: 100%
        .goods-img
          display: none
        .desc
          width: 100%
          p
            margin-top: 0
          h3
            font-size: 18px
            display: block
            margin-top: 18px
            line-height: 1.2em
          .price
            display: none
  .container
    width: 100%
</style>
