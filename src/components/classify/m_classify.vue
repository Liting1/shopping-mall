<template>
<div class="classify">
  <div class="container">
    <ul>
      <li v-for="item in items" :key='item.id'>
        <a href="#">
          <div class="name">{{item.name}}</div>
<<<<<<< HEAD
          <img :src="item.img" alt="">
=======
          <img :src="item.imgUrl" alt="">
>>>>>>> ...
        </a>
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
        name: 'Surface',
        img: 'https://imgazure.microsoftstore.com.cn/medias/MobileHomePage2017Nav-Media-01?context=bWFzdGVyfGltYWdlc3w5NzQzfGltYWdlL3BuZ3xpbWFnZXMvaDk3L2hlYy85OTA0NjU1MzM1NDU0LnBuZ3xiODZjMmM2MTVlMjZlYmU2MGMwMDI3YzYzYTMzN2M1ZmUzYzJlMDM3ODM1MWU0ZmE3MDY1OGIyM2U5YzQwM2Ji'
      }, {
        name: 'HoloLens',
        img: 'https://imgazure.microsoftstore.com.cn/medias/MobileHomePage2017Nav-Media-02?context=bWFzdGVyfGltYWdlc3wyNjAyfGltYWdlL3BuZ3xpbWFnZXMvaDk1L2gwOC85OTA0NjU1MzY4MjIyLnBuZ3xkY2NhNTUyNDAzN2YyOTdhNGNkODRhNDU2ZDJiZTk5MzcxMzA0OGRjN2JjYzhmMmE0MzEyZDMyODM5MjdmM2Fi'
      }, {
        name: 'Xbox',
        img: 'https://imgazure.microsoftstore.com.cn/medias/MobileHomePage2017Nav-Media-03?context=bWFzdGVyfGltYWdlc3wyODE4fGltYWdlL3BuZ3xpbWFnZXMvaDA4L2g5NS85OTA0NjU1NDAwOTkwLnBuZ3wzZTkzYjUxNjg1MjUyMGRkMzVjYTFlYmU0YzZjMDE2OGQ2YWRmYjRlZGM2MDFiYWM1YWRkNWU2M2JiZjhmMWI4'
      }, {
        name: 'Office',
        img: 'https://imgazure.microsoftstore.com.cn/medias/MobileHomePage2017Nav-Media-04?context=bWFzdGVyfGltYWdlc3w0Mjg4fGltYWdlL3BuZ3xpbWFnZXMvaDdiL2g3My85OTA0NjU1NDMzNzU4LnBuZ3w2ZmViZGZiNGJjZDRmMzEwYTJiZjJlZDNmODUyOTFjMzdiNzE3ZDlmZGNjMzk0YTAwMDUzOTU0MzE5ZjA4YjQy'
      }, {
        name: 'Windows',
        img: 'https://imgazure.microsoftstore.com.cn/medias/MobileHomePage2017Nav-Media-05?context=bWFzdGVyfGltYWdlc3wxNzIwfGltYWdlL3BuZ3xpbWFnZXMvaGIxL2g4MS85OTA0NjU1NDY2NTI2LnBuZ3wwMTUyNTg4MjUzZDM4NjNjMmRjYTI5OTJjMzY1M2ZkNWY3MzFmMzEyYzFkY2ZkZDY4YTlmN2EzMzNlYjUxY2Uy'
      }, {
        name: '游戏',
        img: 'https://imgazure.microsoftstore.com.cn/medias/MobileHomePage2017Nav-Media-06?context=bWFzdGVyfGltYWdlc3wyNjMwfGltYWdlL3BuZ3xpbWFnZXMvaDc2L2g0MS85OTA0NjU1NDk5Mjk0LnBuZ3xmNWYxMDg3ZDQwOGIwZmNjZDFiMzM3NTVkNDkwNDgxYThiZDBkNTRkNTE4OWYzYjQxZDJmMGQyMTgwZWQ4MjFm'
      }, {
        name: '电脑与平板',
        img: 'https://imgazure.microsoftstore.com.cn/medias/MobileHomePage2017Nav-Media-07?context=bWFzdGVyfGltYWdlc3wzNDY3fGltYWdlL3BuZ3xpbWFnZXMvaDc1L2hhYS85OTA0NjU1NTMyMDYyLnBuZ3w4MzU4NDFlZWE0NzRlNWIxMTU0NTc4MDdkYzdhMzMwZjY0YmZhNGU5ZGQ2MWU2YWNlZDJjNjBhY2MxNjVkNjUx'
      }, {
        name: '配件',
        img: 'https://imgazure.microsoftstore.com.cn/medias/MobileHomePage2017Nav-Media-08?context=bWFzdGVyfGltYWdlc3wzNDM2fGltYWdlL3BuZ3xpbWFnZXMvaDdkL2hmOC85OTA0NjU1NTY0ODMwLnBuZ3w1ZDUzOWE4Y2JhMDg4ZTE1Mjc3NDM3MTAxZDY4ZWM0NjQ0MzlkNTA3ZjMzMGE0ZjBjNjAzYzA5OTJkZTE5YmJm'
      }, {
        name: '以旧换新',
        img: 'https://imgazure.microsoftstore.com.cn/medias/MobileHomePage2017Nav-Media-09?context=bWFzdGVyfGltYWdlc3w1MzF8aW1hZ2UvcG5nfGltYWdlcy9oYTUvaDM3Lzk5MDQ2NTU1OTc1OTgucG5nfDRiNjcxZGMyYWY2YTQyYjVkNzU2NWU1MDcyYjQ4YzJmMjEzMzY0ZWJjMjk1NmQ2N2E0Y2M3Y2Y0MjBkMDZmYjU'
      }, {
        name: '教育优惠',
        img: 'https://imgazure.microsoftstore.com.cn/medias/MobileHomePage2017Nav-Media-10?context=bWFzdGVyfGltYWdlc3w1OTJ8aW1hZ2UvcG5nfGltYWdlcy9oNTkvaDMxLzk5MDQ2NTU2MzAzNjYucG5nfDM0OWY0OTZjODBjMWM4YzUxOTBiYmVlYjNkMDg5NjNmZDlmYWI4Y2NjOGUyNDdkODU5MjI0Y2ExOTI4ZDA5Mzg'
      }, {
        name: '优惠专区',
        img: 'https://imgazure.microsoftstore.com.cn/medias/MobileHomePage2017Nav-Media-11?context=bWFzdGVyfGltYWdlc3w1NzR8aW1hZ2UvcG5nfGltYWdlcy9oZDMvaGMzLzk5MDQ2NTU2NjMxMzQucG5nfGVkY2M3ZGUxNWMwZjkyYTM1M2NkMGJkM2JjMjU0ZWYxYzc0ZjA0MzI3YTc4MTc1MjlkOGVmMGZlNTBiNTgzOTU'
      }, {
        name: '商务专区',
        img: 'https://imgazure.microsoftstore.com.cn/medias/MobileHomePage2017Nav-Media-12?context=bWFzdGVyfGltYWdlc3w1NjB8aW1hZ2UvcG5nfGltYWdlcy9oYzUvaDY2Lzk5MDQ2NTU2OTU5MDIucG5nfDM0MTEzODY0OGE1YWQ1ZTg1OTNhZDViMmVkN2VkNTRhYzJjOWRiZWQzZDY1NTUyNjc2NmVjNmM3Zjc0OTUyZmQ'
      }]
    }
=======
  props: ['items'],
  data () {
    return {}
  },
  created () {
    // this.$axios.get('/api/web/index.php?m=default&c=index&a=indexNav').then((res) => {
    //   this.items2 = res.data
    // })
>>>>>>> ...
  }
}
</script>

<style scoped lang="stylus">
.classify
  width: 100%
  .container
    padding: 0 12px
    width: 100%
    box-sizing: border-box
    ul
      box-sizing: border-box
      border-top: solid 1px #ccc
      border-left: solid 1px #ccc
      overflow: hidden
      li
        float: left
        box-sizing: border-box
        width: 25%
        border-right: solid 1px #ccc
        border-bottom: solid 1px #ccc
        text-align: center
        position: relative
        &:after
          content: ''
          display: block
          padding-top: 100%
        a
          display: flex
          flex-direction: column
          justify-content: center
          align-items: center
          position: absolute
          width: 100%
          height: 100%
          left: 0
          top: 0
          .name
            font-size: 3.4vw
            color: #333
            margin-bottom: 6.89655172%
          img
            max-width: 50px
            height: auto
            text-align: center
</style>
