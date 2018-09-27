<template>
<div class="banner">
  <div class="container banner-top" v-show="navbar"><a href="#">微软官方商城 </a>{{this.$route.path.replace('/', '> ')}}</div>
  <div class="swiper-container container" ref="swiperBox">
      <div class="swiper-wrapper">
<<<<<<< HEAD
          <div class="swiper-slide"><router-link to="/shop"><img src="https://imgazure.microsoftstore.com.cn/medias/HomePage2017Banner-Media-02?context=bWFzdGVyfGltYWdlc3wxMzYwMDh8aW1hZ2UvanBlZ3xpbWFnZXMvaDA3L2g3OS85OTE2NTI2ODg2OTQyLmpwZ3xjOGFkYjVkNjA1Yzg1MWFlNzExMjM3ZTc5M2UwYTk2MWZkNjM5ZGU0N2JlY2EyZTkwNGM5YzJlYjkwYjc4N2Q0"></router-link></div>
          <div class="swiper-slide"><img src="https://imgazure.microsoftstore.com.cn/medias/HomePage2017Banner-Media-03?context=bWFzdGVyfGltYWdlc3wxODA1OTh8aW1hZ2UvanBlZ3xpbWFnZXMvaGVhL2gyOC85OTE2NTI2OTE5NzEwLmpwZ3xiOWRhYTFmNWIzMGQwMjEzMWFlNjk4NGM1NmQ1NDRmM2MzNzYyMWRhZWIyMDYyMjM0OTk5MTg3YzkxMDNjN2U2"></div>
          <div class="swiper-slide"><img src="https://imgazure.microsoftstore.com.cn/medias/HomePage2017Banner-Media-04?context=bWFzdGVyfGltYWdlc3wxMTYzMTJ8aW1hZ2UvanBlZ3xpbWFnZXMvaDIxL2g1ZC85OTE2NTI2OTUyNDc4LmpwZ3wwYjg3MzkxNDZhN2IwMjkyZjRkOTM2Yjk5MGExMTEzYmNlNjQ5OTg4YmM0MjA3ZjAzZGNmMDFkOWE5YmM2M2Yw"></div>
          <div class="swiper-slide"><img src="https://imgazure.microsoftstore.com.cn/medias/HomePage2017Banner-Media-05?context=bWFzdGVyfGltYWdlc3wxNDQ5NjV8aW1hZ2UvanBlZ3xpbWFnZXMvaGIxL2hhZC85OTE2NTI2OTg1MjQ2LmpwZ3w4MzFkMzAyNzMxYzcxNzc2ZjI4ZmYzZjY1MGM2ZDAyMTNhZWU2OWNiNWM4Y2EyZGRmYjRmMzU5ZWMzNzVlYjE4"></div>
=======
          <div class="swiper-slide" v-for="item in banData" :key="item.id"><router-link :to="item.path"><img :src="item.imgUrl" @load="imgLoad()"></router-link></div>
>>>>>>> ...
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>
      <!-- 如果需要导航按钮 -->
      <div class="banner-btn">
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
      </div>
  </div>
</div>
</template>

<script>
export default {
<<<<<<< HEAD
  data () {
    return {
      navbar: false
=======
  props: ['banData'],
  data () {
    return {
      navbar: false,
      items: [],
      imgObj: ''
    }
  },
  methods: {
    imgLoad () {
      if (!this.imgObj) {
        this.imgObj = new Swiper('.swiper-container', {
          autoplay: {
            disableOnInteraction: false
          },
          loop: true,
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }
        })
      }
>>>>>>> ...
    }
  },
  created () {
    if (this.$route.path === '/') {
      this.navbar = false
    } else {
      this.navbar = true
    }
<<<<<<< HEAD
  },
  mounted () {
    new Swiper('.swiper-container', {
      autoplay: {
        disableOnInteraction: false
      },
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      }
    })
=======
>>>>>>> ...
  }
}
</script>

<style scoped lang="stylus">
@media only screen and (max-width: 776px)
  .banner-top
    display: none !important
    width: 100%
  .banner
    .swiper-pagination
      position: static
      margin-top: 4%

@media only screen and (min-width: 776px)
  body .container
    width: 90%
    .banner-btn
      display: block

.banner-top
  height: 24px
  line-height: 24px
  font-size: 12px
  color: #515151
  a
    color: #515151
    &:hover
      text-decoration: underline

.swiper-container
  width: 100%
  margin-bottom: 0.90909091%
  .swiper-slide img
    width: 100%
  .banner-btn
    display: none
</style>
