<template>
<div class="header" :class="{'border': !showNav}">
  <div style="background-color: #f5f5f5">
    <div class="container">
      <div class="header-top" ref="headerTop" >
        <div class="header-logo"><router-link to="/"><v-icon :num="'logo'" class="logo"></v-icon></router-link></div>
        <div class="header-help">支持与帮助</div>
        <i class="icon-search m_search" @click='search'></i>
        <div class="header-search" v-show="search_m">
          <input type="text" placeholder="Suface Pro" v-model="txt" @keyup.enter="submit">
          <i class="icon-search" @click="submit"></i>
        </div>
        <div class="header-shop" @click="togocart">
          <span class="icon-cart"></span>
          <span class="num">{{all>0?all:''}}</span>
        </div>
        <div class="header-login" :class="{'header-login-active':a}">
          <a href="javascript:;" @click="a=!a">登录</a>
          <i class="icon-user" @click="a=!a"></i>
          <div class="header-login-box">
            <div class="content">
              <div class="title">
                <h4>我的账户</h4>
              </div>
              <ul>
                <li><router-link to="/user">我的账户</router-link></li>
                <li><a href="javascript:;">地址管理</a></li>
                <li><a href="javascript:;">我的专区</a></li>
                <li><a href="javascript:;">我的优惠券</a></li>
              </ul>
              <div class="login-bottom">
                <router-link to="/login">登录</router-link>
                <p><a href="javascript:;">正在查找 Microsoft 帐<br>户设置？</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="container">
    <div v-show="showNav" class="header-nav" ref="headerNav" :class="{'header-box': navBox}">
      <ul>
        <li><router-link to='/'><a href="javascript:;">微软官方商城</a></router-link><button @click="nav" class="icon-equalizer"></button></li>
        <li :class="{'active': menu}">
          <a class="menulist" href="javascript:;" @click.stop="softwareA">硬件<i :class="{'icon-chevron-small-down': !software,'icon-chevron-small-up': software}"></i></a>
        </li>
        <v-list v-show="software" :dataList="obj" :mobile="mobile"></v-list>
        <li :class="{'active': menu}">
          <a class="menulist" href="javascript:;" @click.stop="hardwareA">软件<i :class="{'icon-chevron-small-down': !hardware,'icon-chevron-small-up': hardware}"></i></a>
        </li>
        <v-list v-show="hardware" :dataList="obj2" :mobile="mobile"></v-list>
        <li :class="{'active': menu}"><a class="menulist" href="javascript:;">商务</a></li>
        <li :class="{'active': menu}"><a class="menulist" href="javascript:;">教育</a></li>
        <li :class="{'active': menu}"><a class="menulist" href="javascript:;">以旧换新</a></li>
        <li :class="{'active': menu}"><a href="javascript:;">订单跟踪</a></li>
        <li :class="{'active': menu}"><span class="tui">30退换货</span></li>
      </ul>
    </div>
  </div>
</div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import list from '@/components/v-header/list'
import icon from '@/components/icon'
export default {
  props: {
    showNav: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      software: false,
      hardware: false,
      menu: true,
      mobile: true, // 判断移动端还是PC端
      navBox: false,
      search_m: false,
      txt: '',
      a: false,
      obj: {
        list: [{
          name: 'Surface',
          router: '/Surface'
        }, {
          name: '平板于电脑',
          router: '/Computer'
        }, {
          name: 'xbox+游戏',
          router: '/Game'
        }, {
          name: '虚拟与混合现实',
          router: '/Virtual'
        }, {
          name: '配件',
          router: '/Accessories'
        }],
        left: 139
      },
      obj2: {
        list: [{
          name: 'Office',
          router: '/Office'
        }, {
          name: 'Windows',
          router: '/Windows'
        }, {
          name: 'Apps and Windows 10 游戏',
          router: '/Apps'
        }, {
          name: 'Visual Studio',
          router: '/Visual'
        }, {
          name: '其他软件与服务',
          router: '/Other'
        }],
        left: 218
      },
      t: '',
      height: ''
    }
  },
  computed: {
    ...mapState([
      'bd',
      'scrollHeight'
    ]),
    ...mapGetters([
      'all'
    ])
  },
  methods: {
    softwareA () {
      if (this.software) {
        this.software = false
      } else {
        this.software = true
        this.hardware = false
      }
    },
    hardwareA () {
      if (this.hardware) {
        this.hardware = false
      } else {
        this.hardware = true
        this.software = false
      }
    },
    search () {
      this.search_m = !this.search_m
    },
    nav () {
      if (this.menu) {
        this.menu = false
      } else {
        this.menu = true
      }
    },
    togocart () {
      this.$router.push('shopcart')
    },
    submit () {
      console.log(this.txt)
    }
  },
  created () {
    if (this.bd > 833) {
      this.search_m = true
      this.mobile = false
    } else {
      this.search_m = false
      this.mobile = true
    }
  },
  mounted () {
    var _this = this
    this.t = this.$refs.headerNav.offsetTop // 元素距离顶部的距离
    this.$nextTick(() => {
      this.t = this.$refs.headerNav.offsetTop // 元素距离顶部的距离
    })
    document.getElementsByTagName('body')[0].onclick = function () {
      _this.software = false
      _this.hardware = false
    }
  },
  watch: {
    bd () {
      this.height = this.$refs.headerNav.offsetHeight // 获取元素的高度
      if (this.bd > 833) { // 当屏幕宽度大于833时 说明是PC端
        this.mobile = false
        this.search_m = true
      } else {
        this.mobile = true
        this.software = false
        this.hardware = false
        this.search_m = false
      }
    },
    scrollHeight () {
      if (this.t <= this.scrollHeight) {
        this.navBox = true
        this.$refs.headerTop.style.marginBottom = this.height + 'px'
      } else {
        this.navBox = false
        this.$refs.headerTop.style.marginBottom = 0
      }
    }
  },
  components: {
    'v-list': list,
    'v-icon': icon
  }
}
</script>

<style scoped lang="stylus">
@import '../../assets/css/style.css'
@media screen and (max-width: 1024px)
  .header-search input
    width: 100% !important
    box-sizing: border-box
    height: 30px
// -------------------------------
@media screen and (min-width: 833px)
  .header
    border-bottom: solid 1px rgba(0,0,0,0.2)
    &.border
      border-bottom: none
    .header-top
      height: 50px
      background-color: #f5f5f5
      display: flex
      .header-logo
        height: 50px
        width: 120px
        flex-shrink: 0
        .logo
          width: 95px
          height: 22px
          margin: auto
          margin-top: 14px
      .header-help
        width: 120px
        height: 50px
        line-height: 50px
        text-align: center
        font-size: 14px
        color: #666
        flex-shrink: 0
      .m_search
        display: none
      .header-search
        width: 100%
        text-align: right
        position: relative
        input
          height: 30px
          width: 344px
          outline: none
          text-indent: 12px
          border: solid 1px #707070
          margin-top: 10px
          box-sizing: border-box
        .icon-search
          position: absolute
          top: 16px
          right: 8px
          z-index: 10
      .header-shop
        flex-shrink: 0
        line-height: 55px
        margin: 0 20px
        span
          font-size: 20px
          color: #666
          cursor: pointer
        .num
          font-size: 16px
      .header-login
        line-height: 50px
        flex-shrink: 0
        position: relative
        >a
          font-size: 14px
          padding: 0 8px
          color: #333
          border: solid 1px #f5f5f5
          display: inline-block
          position: relative
          box-sizing: border-box
          background-color: #f5f5f5
          z-index: 201
          height: 100%
        .icon-user
          display: none
        .header-login-box
          width: 225px
          background-color: #fff
          position: absolute
          right: 0
          z-index: 200
          top: 49px
          border: solid 1px #e0e0e0
          display: none
          .content
            box-sizing: border-box
            margin: 0 10px
            padding: 13px 0 9px 20px
            .title
              h4
                font-size: 20px
                font-weight: normal
                color: #333
                line-height: 50px
                color: #0067b8
            ul
              li
                line-height: 40px
                a
                  font-size: 14px
                  color: #333
                  &:hover
                    text-decoration: underline
            .login-bottom
              padding: 20px 0
              >a
                display: inline-block
                width: 166px
                height: 40px
                line-height: 40px
                color: #333
                font-size: 15px
                background-color: #bbd80a
                text-align: center
              p
                font-size: 16px
                line-height: 20px
                text-align: left
                padding-top: 1em
                a
                  color: #333
      .header-login-active
        position: relative
        >a
          border: solid 1px #e0e0e0
          border-bottom: solid 1px #fff
          background-color: #fff
        .header-login-box
          display: block
    .header-nav
      background-color: #fff
      z-index: 100
    .header-nav>ul
      position: relative
      height: 72px
      max-width: 1180px
      box-sizing: border-box
      li
        float: left
        line-height: 72px
        .tui
          cursor: text
          color: #666
          padding: 0 12px
        .icon-equalizer
          display: none
        .menulist
          padding: 0 25px
          font-size: 14px
          display: inline-block
          height: 72px
          color: #0067b8
          .icon-chevron-small-down, .icon-chevron-small-up
            vertical-align: sub
      li:nth-child(1)
        margin-right: 10px
        min-width: 130px
        a
          font-size: 16px
          color: #333
      li:nth-child(n+9), li:last-child
        float: right
        font-size: 12px
        a
          padding: 0 12px
          color: #666
    .header-box
      position: fixed !important
      top: 0
      left: 0
      width: 100%
      border-bottom: solid 1px #ccc
      ul
        width: 90%
        margin: auto
// -------------------------------

@media screen and (max-width: 832px)
  .header
    .container
      width: 100%
    .header-top
      margin: 0 12px
      position: relative
      box-sizing: border-box
      background-color: #f5f5f5
      .header-logo
        width: 100px
        height: 45px
      .header-help
        display: none
      .m_search
        position: absolute
        padding: 0 8px
        line-height: 45px
        right: 84px
        top: 0
        cursor: pointer
      .header-search
        width: 100%
        position: relative
        input
          margin: 5px 0
          box-sizing: border-box
          padding-left: 1em
        .icon-search
          position: absolute
          right: 10px
          top: 12px
      .header-shop .icon-cart
        position: absolute
        padding: 0 18px
        line-height: 45px
        right: 32px
        top: 0
        color: #666
      .header-shop .num
        position: absolute
        right: 35px
        top: 16px
        font-size: 12px
      .header-login
        >a
          display: none
        .icon-user
          cursor: pointer
          border: solid 1px #f5f5f5
          background-color: #f5f5f5
          box-sizing: border-box
          position: absolute
          right: 0
          top: 0
          line-height: 45px
          padding: 0 8px
          z-index: 201
          height: 45px
        .header-login-box
          width: 225px
          background-color: #fff
          border: solid 1px #e0e0e0
          position: absolute
          right: 0
          z-index: 200
          top: 44px
          display: none
          .content
            box-sizing: border-box
            margin: 0 10px
            padding: 13px 0 9px 20px
            .title
              h4
                font-size: 20px
                font-weight: normal
                color: #333
                line-height: 50px
                color: #0067b8
            ul
              li
                line-height: 40px
                a
                  font-size: 14px
                  color: #333
                  &:hover
                    text-decoration: underline
            .login-bottom
              padding: 20px 0
              >a
                display: inline-block
                width: 166px
                height: 40px
                line-height: 40px
                color: #333
                font-size: 15px
                background-color: #bbd80a
                text-align: center
              p
                font-size: 16px
                line-height: 20px
                text-align: left
                padding-top: 1em
                a
                  color: #333
      .header-login-active
        .icon-user
          border: solid 1px #e0e0e0
          border-bottom: solid 1px #fff
          background-color: #fff
        .header-login-box
          display: block
    .header-nav
      height: 50px
      background-color: #fff
      position: relative
      z-index: 100
      ul li:nth-child(1)
        line-height: 50px
        border-bottom: solid 1px rgba(0,0,0,0.2)
        box-sizing: border-box
        button
          float: right
          margin-top: 15px
          cursor: pointer
      li
        width: 100%
        box-sizing: border-box
        padding: 0 12px
        line-height: 50px
        background-color: #fff
        .icon-equalizer
          border: none
          outline: none
          background-color: #fff
          color: #0067b8
          font-size: 16px
        .tui
          cursor: text
          color: #666
          padding: 0 12px
          font-size: 12px
        a
          color: #0067b8
      li:nth-child(n+2)
        padding-left: 25px
        a
          font-size: 14px
          display: inline-block
          width: 100%
          .icon-chevron-small-down, .icon-chevron-small-up
            vertical-align: sub
        &.active
          display: none
      li:last-child
        border-bottom: solid 1px rgba(0,0,0,0.2)
    .header-box
      position: fixed !important
      top: 0
      left: 0
      width: 100%
      border-bottom: solid 1px #ccc
      ul li
        padding: 0 12px
</style>
