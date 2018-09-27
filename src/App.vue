<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import {mapState, mapActions} from 'vuex'
export default {
  name: 'App',
  computed: mapState([
    'bd',
    'scrollHeight'
  ]),
  methods: {
    ...mapActions([
      'size',
      'scroll'
    ])
  },
  mounted () {
    var _this = this
    var b = document.querySelector('body')
<<<<<<< HEAD
    _this.size(b.offsetWidth)
=======
    this.$nextTick(() => {
      _this.size(b.offsetWidth)
    })
>>>>>>> ...
    b.onresize = function (e) {
      _this.size(e.target.innerWidth)
    }
    window.onscroll = function () {
      _this.scroll($(document).scrollTop())
    }
  }
}
</script>

<style scoped lang="stylus">
</style>
