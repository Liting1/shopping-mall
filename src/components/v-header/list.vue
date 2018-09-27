<template>
<transition name="software">
  <div class="list" :class="{'m_list': mobile}" :style="{left: dataList.left+'px'}" ref="list">
    <ul>
      <li v-for="item in dataList.list" :key="item.id"><router-link :to="item.router">{{item.name}}</router-link></li>
    </ul>
  </div>
</transition>
</template>

<script>
export default {
  props: {
    dataList: {
      type: Object,
      default () {
        return {}
      }
    },
    mobile: {
      type: Boolean,
      default: true
    }
  },
  methods: {
  }
}
</script>

<style scoped lang="stylus">
  .list
    width: 250px
    position: absolute
    box-sizing: border-box
    overflow: hidden
    border: solid 1px rgba(0,0,0,0.2)
    top: 72px
    border-top: solid 1px #fff
    background-color: #fff
    z-index: 999
    ul
      padding-bottom: 8px
      li
        line-height: 54px
        &:hover
          background-color: rgba(0,103,184,.1)
        a
          margin-left: 25px
          color: #333
          font-size: 14px
          display: block

  .m_list
    position: static
    width: 100%
    border: none
    li
      padding-left: 34px
      a
        margin-left: 0 !important
        &:hover
          text-decoration: underline
  .software-enter-active, .software-leave-active
    height: 280px
    transition: height .3s
  .software-enter, .software-leave-to
    height: 0
</style>
