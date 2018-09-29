<template>
<div class="computer">
  <div>
    <v-header></v-header>
  </div>
  <div class="container" style="margin-bottom: .9%">
    <div class="title"><a href="#">微软官方商城</a> > <a href="#">电脑与平板</a></div>
    <div>
      <a href="#"><img width="100%" src="http://www.liting.ltd/static/img/pbanner.jpg"></a>
    </div>
  </div>
  <div class="navbar">
    <div class="container">
      <div class="nav-content" ref="navContent">
        <ul>
          <li v-for="item in data.navs" :key="item.id"><a :href="item.src">{{item.name}}</a></li>
        </ul>
      </div>
      <div class="nav-cp" ref="navCp">
        <div id="dell">
          <cp-two :data="data.items"></cp-two>
        </div>
        <cp-two :data="data.lov" id="lenovo"></cp-two>
        <cp-two :data="data.tablet" id="tablet"></cp-two>
      </div>
    </div>
  </div>
  <div>
    <v-bottom></v-bottom>
  </div>
  <div>
    <v-footer></v-footer>
  </div>
</div>
</template>

<script>
import header from '@/components/v-header'
import cpTwo from '@/components/cp/cp-two'
import bottom from '@/components/bottom'
import footer from '@/components/v-footer/m-footer'
import {mapState} from 'vuex'
export default {
  data () {
    return {
      data: {}
    }
  },
  computed: mapState([
    'scrollHeight'
  ]),
  components: {
    'v-header': header,
    'cp-two': cpTwo,
    'v-bottom': bottom,
    'v-footer': footer
  },
  methods: {
    fun () {
      var data = this.data
      if ((data.box < this.scrollHeight + 74) && data.control) {
        data.k = true
        this.$refs.navCp.style.marginTop = 100 + 'px'
      } else {
        data.k = false
        this.$refs.navCp.style.marginTop = 0
      }
    }
  },
  created () {
    this.$axios.get('/api/static/data.php?c=computer').then((res) => {
      this.data = res.data
    }).catch((err) => {
      console.log(err)
    })
    // console.log(JSON.stringify(this.$data))
  }
}
</script>

<style scoped lang="stylus">
  .computer
    .container
      .title
        line-height: 24px
        font-size: 12px
        color: #515151
    .navbar
      .container
        .nav-content
          margin-bottom: 3.75%
          width: 100%
          &.active
            position: fixed
            top: 74px
            left: 0
            z-index: 100
            width: 100%
            ul
              width: 90%
              margin: auto
              max-width: 1180px
          ul
            display: flex
            line-height: 60px
            height: 60
            li
              width: 25%
              background-color #1185c5
              border-right: solid 1px #fff
              border-left: solid 1px #fff
              text-align: center
              a
                font-size: 24px
                color: #fff

@media only screen and (max-width: 766px)
  .computer
    .container
      width: 100%
      .title
        display: none
    .navbar
      .container
        padding: 0 12px
        box-sizing: border-box
        margin: 30px 0 10px 0

@media only screen and (max-width: 700px)
  .computer
    .navbar
      .container
        .nav-content
          ul
            height: 32px
            line-height: 32px
            li
              a
                font-size: 12px
</style>
