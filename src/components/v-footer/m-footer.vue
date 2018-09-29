<template>
<div class="footer" v-if="iSshow">
  <ul>
    <li v-for="item in items" :key="item.id"><router-link :to="item.path"><v-icon class="ic" :num="item.class"></v-icon><p>{{item.txt}}</p></router-link></li>
  </ul>
</div>
</template>

<script>
import { mapState } from 'vuex'
import icon from '@/components/icon'
export default {
  data () {
    return {
      iSshow: true,
      items: [{
        class: 'home',
        txt: '首页',
        path: '/'
      }, {
        class: 'apps',
        txt: '分类',
        path: ''
      }, {
        class: 'cart',
        txt: '购物车',
        path: '/shopcart'
      }, {
        class: 'man',
        txt: '账号',
        path: ''
      }, {
        class: 'service',
        txt: '客服',
        path: ''
      }]
    }
  },
  computed: mapState([
    'bd'
  ]),
  watch: {
    bd () {
      if (this.bd > 766) {
        this.iSshow = false
      } else {
        this.iSshow = true
      }
    }
  },
  created () {
    if (this.bd > 766) {
      this.iSshow = false
    } else {
      this.iSshow = true
    }
  },
  components: {
    'v-icon': icon
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
    .ic
      width: 20px
      height: 20px
      margin: auto
    p
      font-size: 10px
      line-height: 20px
      color: #333
</style>
