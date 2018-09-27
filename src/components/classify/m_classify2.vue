<template>
<div class="classify2">
  <div class="container">
    <ul>
      <li v-for="item in items" :key="item.id">
<<<<<<< HEAD
        <a href="#">
          <div class="img"><img :src="item.img" alt=""></div>
=======
        <router-link :to="item.path">
          <div class="img"><img :src="item.imgUrl" alt=""></div>
>>>>>>> ...
          <div class="desc">
            <div class="name">{{item.name}}</div>
            <p v-html="item.desc"></p>
          </div>
<<<<<<< HEAD
        </a>
=======
        </router-link>
>>>>>>> ...
      </li>
    </ul>
  </div>
</div>
</template>

<script>
export default {
<<<<<<< HEAD
  data () {
    return {
      items: [{
        img: 'https://imgazure.microsoftstore.com.cn/medias/MobileHomePage2017ProductNav-Media-01?context=bWFzdGVyfGltYWdlc3w2MjUwfGltYWdlL3BuZ3xpbWFnZXMvaGFiL2hkZS85NzE4MTAyNzIwNTQyLnBuZ3wyZmQyNzQ2MDQxMDQ3NDc3M2FjZmYwOTQ3NWYyNzRlNjZhYTk1NThlOWM0ODE5YTdjOTIwOTk5MjkxOTBkNDlh',
        name: 'Surface Pro',
        desc: '随心所欲<br>百变菁英'
      }, {
        img: 'https://imgazure.microsoftstore.com.cn/medias/MobileHomePage2017ProductNav-Media-02?context=bWFzdGVyfGltYWdlc3w2OTM2fGltYWdlL3BuZ3xpbWFnZXMvaDgxL2gxNi85NzE4MTAyNzUzMzEwLnBuZ3w1OWMyZDY4NjcyZTcyMmZkNDQyNzdmMmUyNTUzNGFiYjYxZTUxMzg1ZmQ2YWE1MGRmMzhhNzJjOTFmOWE4MDRl',
        name: 'Surface Laptop',
        desc: '独具匠心<br>彰显自我'
      }, {
        img: 'https://imgazure.microsoftstore.com.cn/medias/MobileHomePage2017ProductNav-Media-03?context=bWFzdGVyfGltYWdlc3w1NDc3fGltYWdlL3BuZ3xpbWFnZXMvaDU2L2hhYS85NzE4MTAyNzg2MDc4LnBuZ3w2NjE5MDcwZTljNTFjYTNhNzllMTliMjQwZDI0MTQ1ODE4ZGUyNWMzMGYyNzdkZWNhMDc3NzUzZjJlZDE1YzE5',
        name: 'Surface Studio',
        desc: '为灵感而生<br>让创作自如'
      }, {
        img: 'https://imgazure.microsoftstore.com.cn/medias/MobileHomePage2017ProductNav-Media-04?context=bWFzdGVyfGltYWdlc3w0NTcyfGltYWdlL3BuZ3xpbWFnZXMvaDYxL2hhNS85NzE4MTAyODE4ODQ2LnBuZ3w1Y2I3YmY3NGIzNzQyZGUzOWUwZWNlZmVkMTgwYWRhNmIzOTU5MDA0M2IyMjlkNTRjOTk0M2I5NjQzOTdlMDQ5',
        name: 'Hololens',
        desc: '让科学幻想<br>变成科学现实'
      }]
    }
=======
  props: ['items'],
  data () {
    return {
      ads: []
    }
  },
  created () {
    // this.$axios.get('/api/web/index.php?m=default&c=index&a=adOne').then((res) => {
    //   this.ads = res.data
    // })
>>>>>>> ...
  }
}
</script>

<style scoped lang="stylus">
.classify2
  .container
    width: 100%
    padding: 0 12px
    box-sizing: border-box
    ul
      border-top: solid 1px #ccc
      border-left: solid 1px #ccc
      box-sizing: border-box
      overflow: hidden
      li
        position: relative
        float: left
        border-right: solid 1px #ccc
        border-bottom: solid 1px #ccc
        box-sizing: border-box
        width: 50%
        &:after
          content: ''
          display: block
          padding-top: 57.43243243%
        a
          position: absolute
          left: 0
          top: 0
          display: flex
          align-items: center
          width: 100%
          height: 100%
        .img
          width: 47.2972973%
          text-align: center
          flex-shrink: 0
          img
            max-width: 79px
            height: auto
        .desc
          width: 100%
          padding-right: 3.37837838%
          text-align: right
          .name
            font-size: 3.43vw
            line-height: 1.3em
          p
            font-size: 2.81vw
            color: #666
            line-height: 1.3em
</style>
