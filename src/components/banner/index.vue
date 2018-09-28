<template>
<div class="banner">
  <div class="container banner-top" v-show="navbar"><a href="#">微软官方商城 </a>{{this.$route.path.replace('/', '> ')}}</div>
  <div class="swiper-container container" ref="swiperBox">
      <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="item in banData" :key="item.id"><router-link :to="item.path"><img :src="item.imgUrl" @load="imgLoad()"></router-link></div>
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
    }
  },
  created () {
    if (this.$route.path === '/') {
      this.navbar = false
    } else {
      this.navbar = true
    }
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
