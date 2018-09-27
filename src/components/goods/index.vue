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
<<<<<<< HEAD
  data () {
    return {
      goods: [{
        img: '',
        title: 'Surface 配件',
        desc: '查看全部'
      }, {
        img: 'https://imgazure.microsoftstore.com.cn/medias/MIC2387-300Wx180H-1.png?context=bWFzdGVyfGltYWdlc3wyNDc1OXxpbWFnZS9wbmd8aW1hZ2VzL2gyYS9oMmYvOTg5NzQwMzg3NTM1OC5wbmd8NjlhY2MzNDBhNzdhM2EwNWY2MGY1MzVlNTY5MjdmYmQzYmEwNDM5Y2Q3ZDliZjJhNDhmNzU5YzE0YTQzNDFmYg',
        title: '微软 Surface Go 特制版专业键盘盖',
        desc: '将 Surface Go 特制版专业键盘盖与 Surface Go 搭配使用，随时随地获得全面的键盘体验。Alcantara 特制版可选灰色、深酒红、灰钴蓝，另有普通版典雅黑可选。',
        price: '¥ 788'
      }, {
        img: 'https://imgazure.microsoftstore.com.cn/medias/MIC2388-300Wx180H-1.png?context=bWFzdGVyfGltYWdlc3w0ODM3MXxpbWFnZS9wbmd8aW1hZ2VzL2g5Ny9oNjUvOTg5NzQwMTg0Mzc0Mi5wbmd8YmY2NGQ0Nzg3ZDg2N2I3NTE2Y2ZlM2QzMjFiYTJhNTI5NGRhOWVhZWMxOTVkYzU5MzE2Mjg5NjJkM2JmOGRkNw',
        title: '微软 Surface Go 专业键盘盖',
        desc: '将 Surface Go 专业键盘盖与 Surface Go 搭配使用，随时随地获得全面的键盘体验。另有 Alcantara 特制版灰色、深酒红、灰钴蓝三种颜色可选。',
        price: '¥ 988'
      }, {
        img: 'https://imgazure.microsoftstore.com.cn/medias/MIC2393-300Wx180H-1.png?context=bWFzdGVyfGltYWdlc3wzMTQwMHxpbWFnZS9wbmd8aW1hZ2VzL2g2My9oZjAvOTg5NzM5NTE5MTgzOC5wbmd8NzIzMmRiMDA5N2RiZjY0ZTRkMDUyMzI0OWUxZjMxODExZGRiODcwMTVmYWU3NGY0ZjY2ZGRlZDE0Yjk3MzZjYw',
        title: '微软 Surface 便携鼠标',
        desc: '全新 Surface 便携鼠标，轻巧，便携，无线蓝牙连接，经重新设计的滚轮为您带来顺畅的滚动体验。亮铂金、深酒红、灰钴蓝三种颜色可供选择。',
        price: '¥ 288'
      }, {
        img: 'https://imgazure.microsoftstore.com.cn/medias/MIC1976-300Wx180H-1.png?context=bWFzdGVyfGltYWdlc3w2NTM3fGltYWdlL3BuZ3xpbWFnZXMvaDVlL2gxMi85NzI5ODc0MDAxOTUwLnBuZ3wzMTEyOGM2N2FjZjk3NmMxN2MxNGJiODM4MzUzNDJiNTBhMDQ0ZTI2MWM4MGMxODg2ZDFhNmQ4MGVjN2Y0ZTFl',
        title: '微软 Surface 触控笔（新）',
        desc: '微软Surface触控笔（新），全新升级 4,096 级压力感应，反应更灵敏，新增倾斜功能，带来自然的书写绘画体验。兼容 Surface Studio、Surface Laptop、Surface Go 等多款 Surface 产品。',
        price: '¥ 788'
      }, {
        img: 'https://imgazure.microsoftstore.com.cn/medias/MIC2387-300Wx180H-1.png?context=bWFzdGVyfGltYWdlc3wyNDc1OXxpbWFnZS9wbmd8aW1hZ2VzL2gyYS9oMmYvOTg5NzQwMzg3NTM1OC5wbmd8NjlhY2MzNDBhNzdhM2EwNWY2MGY1MzVlNTY5MjdmYmQzYmEwNDM5Y2Q3ZDliZjJhNDhmNzU5YzE0YTQzNDFmYg',
        title: '微软 Surface Go 专业键盘盖',
        desc: '将 Surface Go 专业键盘盖与 Surface Go 搭配使用，随时随地获得全面的键盘体验。另有 Alcantara 特制版灰色、深酒红、灰钴蓝三种颜色可选。',
        price: '¥ 728'
      }, {
        img: 'https://imgazure.microsoftstore.com.cn/medias/MIC2387-300Wx180H-1.png?context=bWFzdGVyfGltYWdlc3wyNDc1OXxpbWFnZS9wbmd8aW1hZ2VzL2gyYS9oMmYvOTg5NzQwMzg3NTM1OC5wbmd8NjlhY2MzNDBhNzdhM2EwNWY2MGY1MzVlNTY5MjdmYmQzYmEwNDM5Y2Q3ZDliZjJhNDhmNzU5YzE0YTQzNDFmYg',
        title: '微软 Surface Go 专业键盘盖',
        desc: '将 Surface Go 专业键盘盖与 Surface Go 搭配使用，随时随地获得全面的键盘体验。另有 Alcantara 特制版灰色、深酒红、灰钴蓝三种颜色可选。',
        price: '¥ 788'
      }, {
        img: 'https://imgazure.microsoftstore.com.cn/medias/MIC2387-300Wx180H-1.png?context=bWFzdGVyfGltYWdlc3wyNDc1OXxpbWFnZS9wbmd8aW1hZ2VzL2gyYS9oMmYvOTg5NzQwMzg3NTM1OC5wbmd8NjlhY2MzNDBhNzdhM2EwNWY2MGY1MzVlNTY5MjdmYmQzYmEwNDM5Y2Q3ZDliZjJhNDhmNzU5YzE0YTQzNDFmYg',
        title: '微软 Surface Go 专业键盘盖',
        desc: '将 Surface Go 专业键盘盖与 Surface Go 搭配使用，随时随地获得全面的键盘体验。另有 Alcantara 特制版灰色、深酒红、灰钴蓝三种颜色可选。',
        price: '¥ 788'
      }]
    }
  }
=======
  props: ['goods']
>>>>>>> ...
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
        background-image: url('https://imgazure.microsoftstore.com.cn/medias/SurfaceCatPage2017-fitting-pc?context=bWFzdGVyfGltYWdlc3wyMzgxMHxpbWFnZS9qcGVnfGltYWdlcy9oZmMvaDQwLzk3ODc3NjM4NTEyOTQuanBnfDkzMDMxNjFlYWNhMTNiYjdhYWUxYmJlMzIyZDI5OGY3ODFlYTYyMGUzZGQ3OTNjYWQxNWIxY2IxNDZjMTEyOTc')
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
