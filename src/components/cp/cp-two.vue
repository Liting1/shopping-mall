<template>
<div class="box">
  <ul>
    <li v-for="item in data" :key="item.id" :style="{backgroundImage: 'url('+ item.bgimg +')'}">
      <div class="inner">
        <div class="img" v-if="item.img"><img width='100%' :src="item.img"></div>
        <div class="desc">
          <h3>{{item.title}}</h3>
          <p v-if="item.desc">{{item.desc}}</p>
          <div class="price" v-if="item.price">
            <span>{{item.price}}</span>
            <button>查看详情</button>
          </div>
        </div>
      </div>
    </li>
  </ul>
</div>
</template>

<script>
export default {
  props: ['data']
}
</script>

<style lang="stylus" scoped>
@media only screen and (min-width: 766px)
  .box
    margin-bottom: 3.625%
    ul
      display: flex
      border-left: solid 1px #e4e4e4
      border-top: solid 1px #e4e4e4
      flex-wrap: wrap
      li
        width: 25%
        border-right: solid 1px #e4e4e4
        border-bottom: solid 1px #e4e4e4
        position: relative
        box-sizing: border-box
        &:after
          content: ''
          padding-top: 180%
          display: block
        .inner
          padding: 0 10%
          height: 100%
          position: absolute
          .img
            margin-top: 12.5%
          .desc
            h3
              font-weight: normal
              margin-top: 5%
              color: #1570a6
              font-size: 22px
              line-height: 28px
            p
              margin-top: 3%
              font-size: 16px
              line-height: 24px
              color: #666
              max-height: 120px
              overflow: hidden
            .price
              position: absolute
              bottom: 0
              padding-bottom: 10%
              span
                color: #ec5412
                display: block
                font-size: 16px
                line-height: 24px
              button
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
      li:first-child
        background-size: cover
        .inner
          width: 100%
          box-sizing: border-box
          .img
            display: none
          .desc
            p
              display: none
            .price
              display: none
            h3
              font-weight: normal
              width: 100%
              color: #333
              font-size: 36px
              line-height: 46px
              margin-top: 60px
              white-space: nowrap
              // overflow: hidden

@media only screen and (max-width: 1200px)
  .box
    ul
      li
        width: 33.33%

@media only screen and (max-width: 950px)
  .box ul li
    width: 50%

@media only screen and (max-width: 765px)
  .box
    margin-bottom: 3.625%
    ul
      li
        border-bottom: solid 1px #ccc
        width: 100%
        .inner
          display: flex
          padding: 8px 0
          box-sizing: border-box
          .img
            width: 43%
          .desc
            width: 55.55%
            text-align: right
            p
              display: none
            h3
              font-size: 12px
              color: #333
              margin-top: 5%
              line-height: 28px
            .price
              span
                margin-top: 5%
                display: block
                font-size: 12px
                height: 26px
                line-height: 26px
                color: #ec5412
              button
                margin-top: 3%
                width: 120px
                font-size: 12px
                height: 30px
                line-height: 30px
                background-color: #da3b01
                color: #fff
                border: none
                outline: none
                cursor: pointer
                line-height: 30px
      li:first-child
        background-size: cover
        border: solid 1px #ccc
        .img
          display: none
        .desc
          width: 100%
          h3
            margin-top: 0
            font-size: 24px
            padding-left: 12px
            margin-right: 10px
            line-height: 30px
            text-align: left
          .price
            display: none
</style>
