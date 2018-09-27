<template>
<div class="footer" v-if="iSshow">
  <ul>
<<<<<<< HEAD
    <li v-for="item in items" :key="item.id"><a href="javascript:;"><i :class="item.class"></i><p>{{item.txt}}</p></a></li>
=======
    <li v-for="item in items" :key="item.id"><router-link :to="item.path"><i :class="item.class"></i><p>{{item.txt}}</p></router-link></li>
>>>>>>> ...
  </ul>
</div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data () {
    return {
      iSshow: true,
      items: [{
        class: 'icon-home2',
<<<<<<< HEAD
        txt: '首页'
      }, {
        class: 'icon-ungroup',
        txt: '分类'
      }, {
        class: 'icon-cart',
        txt: '购物车'
      }, {
        class: 'icon-user',
        txt: '账号'
      }, {
        class: 'icon-bubbles',
        txt: '客服'
=======
        txt: '首页',
        path: '/'
      }, {
        class: 'icon-ungroup',
        txt: '分类',
        path: ''
      }, {
        class: 'icon-cart',
        txt: '购物车',
        path: '/shopcart'
      }, {
        class: 'icon-user',
        txt: '账号',
        path: ''
      }, {
        class: 'icon-bubbles',
        txt: '客服',
        path: ''
>>>>>>> ...
      }]
    }
  },
  computed: mapState([
    'bd'
  ]),
  created () {
    if (this.bd > 766) {
      this.iSshow = false
    } else {
      this.iSshow = true
    }
  },
  watch: {
    bd () {
      if (this.bd > 766) {
        this.iSshow = false
      } else {
        this.iSshow = true
      }
    }
  }
}
</script>

<style scoped lang="stylus">
@import '../../assets/css/style.css'
.footer
  position: fixed
  bottom: 0
  left: 0
  width: 100%
  height: 45px
  background-color: #e7e7e7
  ul
    display: flex
    li
      flex: 1
      text-align: center
      margin-top: 5px
    i
      font-size: 20px
      color: #666
    p
      font-size: 10px
      line-height: 20px
      color: #333
</style>
