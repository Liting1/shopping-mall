<template>
<div class="nav">
  <div class="nav-back" @click="back"><span></span></div>
  <div class="nav-navs">
    <ul>
      <li v-for='(item, index) in items' :key="item.id"><a href="javascript:;" :class="{'active': t == index}" @click="tap(index)">{{item}}</a></li>
    </ul>
  </div>
  <div class="nav-search">
    <span class="icon-search"></span>
  </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      items: ['商品', '详情', '评价'],
      t: 0
    }
  },
  methods: {
    tap (index) {
      this.t = index
    },
    back () {
      this.$router.back()
    }
  }
}
</script>

<style scoped lang="stylus">
@import '../../assets/css/style.css'
.nav
  height: 50px
  line-height: 50px
  position: fixed
  width: 100%
  top: 0
  left: 0
  border-bottom: solid 1px #eee
  box-sizing: border-box
  z-index: 300
  background-color: #fff
  display: flex
  .nav-back
    width: 10.3125%
    text-align: center
    flex-shrink: 0
    span
      display: inline-block
      margin-top: 15px
      width: 10px
      height: 10px
      border-left: solid 1px #666
      border-top: solid 1px #666
      transform: rotate(-45deg)
  .nav-navs
    width: 100%
    ul
      display: flex
      justify-content: center
      li
        margin: 0 5px
        a
          font-size: 14px
          color: #333
          padding: 0 2px
          box-sizing: border-box
          display: block
          height: 100%
          &.active
            border-bottom: solid 2px #666
            margin-bottom: -2px
  .nav-search
    width: 12.03%
    flex-shrink: 0
    text-align: center
    span
      cursor: pointer
</style>
