<template>
<div class="pic">
  <div class="pic-top-img swiper-container" ref="picBox">
    <ul class="swiper-wrapper">
<<<<<<< HEAD
        <li class="swiper-slide" v-for="(item, index) in items" :key="index" :class="{'active': show === index}">
=======
        <li class="swiper-slide" v-for="(item, index) in imgs" :key="index" :class="{'active': show === index}">
>>>>>>> ...
          <img width="100%" :src="item" alt="">
        </li>
    </ul>
    <div class="swiper-pagination"></div>
  </div>
  <div class="pic-list">
    <button @click="prev">&lt;</button>
    <ul>
<<<<<<< HEAD
      <li :class="{'active': show === index}" v-for="(item, index) in items" :key="item.id"><button  @click="showMe(index)"><img width="100%" :src="item"></button></li>
=======
      <li :class="{'active': show === index}" v-for="(item, index) in imgs" :key="item.id"><button  @click="showMe(index)"><img width="100%" :src="item"></button></li>
>>>>>>> ...
    </ul>
    <button @click="next">&gt;</button>
  </div>
</div>
</template>

<script>
import { mapState } from 'vuex'
export default {
<<<<<<< HEAD
  data () {
    return {
      items: ['https://imgazure.microsoftstore.com.cn/medias/MIC1964-593Wx390H-1.png?context=bWFzdGVyfGltYWdlc3wxMDU5NTJ8aW1hZ2UvcG5nfGltYWdlcy9oZjcvaDhlLzk3MzQxMTAxNTA2ODYucG5nfGViZGIyNmFmMjlkZDA5ZTQ1MmNmZjczNGI3NWU4NzM3ZWZiODk2ZDQxZTMzOGVjMmU0YWZiNjAxMGYwMmVjY2E', 'https://imgazure.microsoftstore.com.cn/medias/MIC1964-593Wx390H-2.png?context=bWFzdGVyfGltYWdlc3wyMTUyOTR8aW1hZ2UvcG5nfGltYWdlcy9oOTYvaDkxLzk2MjgyMDQ0OTg5NzQucG5nfGFjOTM3YTg0OTRhY2U2NWEwNzRhYThhOWIwNDFlOGVmYjdmZjliZTY1MWZlMTQ3OWIzZDljNmRmNzc0MGYxOWU', 'https://imgazure.microsoftstore.com.cn/medias/MIC1964-593Wx390H-3.png?context=bWFzdGVyfGltYWdlc3wxNTc0Njl8aW1hZ2UvcG5nfGltYWdlcy9oZjIvaGUxLzk2MjgyMDU2NDU4NTQucG5nfDRhMjE0NjA2NThiMDM5MjljNGZiNDBmYTdkZDMyOTQ5YzIxYmRlOWJmM2JmN2M3OWQ4ZmViNWQwZDRiYzZjZDU', 'https://imgazure.microsoftstore.com.cn/medias/MIC1964-593Wx390H-4.png?context=bWFzdGVyfGltYWdlc3wxMjUwOTF8aW1hZ2UvcG5nfGltYWdlcy9oYWUvaDY1Lzk2MjgyMDY0OTc4MjIucG5nfDQxYjAxODQxOWQ0YmVmM2M0OGYyYzg3NDkzMGI5MzA3NDc4MjQ1NjgzOGMzYWYzNWUwZTZiYzdjMWU5M2RmYTg'],
=======
  props: ['imgs'],
  data () {
    return {
>>>>>>> ...
      show: 0
    }
  },
  methods: {
<<<<<<< HEAD
    prev () {
      console.log(11111)
    },
=======
    prev () {},
>>>>>>> ...
    next () {},
    showMe (index) {
      let picbox = this.$refs.picBox
      let w = picbox.offsetWidth
      $(picbox).find('li').css('width', w + 'px')
      this.show = index
    }
  },
  computed: mapState([
    'bd'
  ]),
  mounted () {
    this.$nextTick(function () {
      new Swiper('.pic-top-img', {
        pagination: {
          el: '.swiper-pagination'
        }
      })
    })
  }
}
</script>

<style scoped lang="stylus">
.fade-enter, .fade-leave-to
  opacity: 0
.fade-enter-active, .fade-leave-active
  transition: all 1s

@media only screen and (min-width: 766px)
  .pic-top-img
    width: 90%
    margin: auto
    ul
      position: relative
      width: 100%
      padding-top: 65.8%
      li
        position: absolute
        left: 0
        top: 0
        width: 100%
        background-color: #fff
        display: none
        &.active
          display: block
    .swiper-pagination
      display: none
  .pic-list
    margin-top: 20px
    display: flex
    justify-content: center
    ul
      width: 258px
      display: flex
      margin-left: 2px
      margin-right: 2px
      li
        width: 60px
        height: 62px
        margin-right: 6px
        text-align: center
        box-sizing: border-box
        &.active
          border-bottom: solid 2px #3a9cd7
        button
          height: 62px
          width: 60px
          border: none
          background-color: transparent
          outline: none

@media only screen and (max-width: 765px)
  .pic
    .pic-top-img
      max-width: 576px
      width: 100%
      margin: auto
      .swiper-pagination
        position: static
        margin-top: 20px
    .pic-list
      display: none
</style>
