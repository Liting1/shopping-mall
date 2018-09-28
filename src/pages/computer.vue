<template>
<div class="computer">
  <div>
    <v-header></v-header>
  </div>
  <div class="container" style="margin-bottom: .9%">
    <div class="title"><a href="#">微软官方商城</a> > <a href="#">电脑与平板</a></div>
    <div>
      <a href="#"><img width="100%" src="https://imgazure.microsoftstore.com.cn/medias/PC-PCbanner.jpg?context=bWFzdGVyfGltYWdlc3wxOTg2Njd8aW1hZ2UvanBlZ3xpbWFnZXMvaGJlL2gyOC85ODkzMDM0Mjk1MzI2LmpwZ3wyNWQ3OWJiNmNkODc3YzdlOTliNjQxYzliOTBlYmVlZTQzNjU4ZDUwYWYyYjliZDViNmYzZjVjMGRjNzA1OTJi"></a>
    </div>
  </div>
  <div class="navbar">
    <div class="container">
      <div class="nav-content" ref="navContent">
        <ul>
          <li v-for="item in navs" :key="item.id"><a :href="item.src">{{item.name}}</a></li>
        </ul>
      </div>
      <div class="nav-cp" ref="navCp">
        <div id="dell">
          <cp-two :data="items"></cp-two>
        </div>
        <cp-two :data="lov" id="lenovo"></cp-two>
        <cp-two :data="tablet" id="tablet"></cp-two>
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
      k: false,
      box: 0,
      control: false,
      navs: [{
        name: 'Dell品牌专区',
        src: '#dell'
      }, {
        name: '联想品牌专区',
        src: '#lenovo'
      }, {
        name: '电脑和平板精选',
        src: '#tablet'
      }],
      items: [{
        title: 'Dell 品牌专区',
        bgimg: 'https://imgazure.microsoftstore.com.cn/medias/Acc-ProductComputer-CP-Media-00?context=bWFzdGVyfGltYWdlc3wzNzUyNXxpbWFnZS9qcGVnfGltYWdlcy9oZGIvaGM4Lzk0MDc4ODY0MjYxNDIuanBnfGJkYmNiY2FjNTYzMTMwZTQxOWI4ZDI1N2RiYTZjYjM2OTBjMjNiZjg1YmJmOGUxNTg0OWQ4Njk4NmYxZDg3NzY'
      }, {
        img: 'https://imgazure.microsoftstore.com.cn/medias/MICJS0625-300Wx180H-1.png?context=bWFzdGVyfGltYWdlc3w3MzMyM3xpbWFnZS9wbmd8aW1hZ2VzL2gzZC9oYTAvOTg3MjI0MjQ0MjI3MC5wbmd8N2ZlMjVmMmUzZjdjYmIwMTg2NGUxNDM3Zjg0YmE1YzZhZjgzNGMwY2ZiMTgxNDQzNWQ3NzlmZjhiZWY4ZDI5Mg',
        title: 'Dell 戴尔 XPS 13-9360-R3905S 笔记本电脑',
        desc: '13.3 英寸微边框创新设计，搭载11英寸机身，轻薄便携。170° 宽广域视角，清晰感受无边视野。八代 CPU 开启强劲性能。预装正版 Office。',
        price: '¥ 9,999'
      }, {
        img: 'https://imgazure.microsoftstore.com.cn/medias/MICJS0623-300Wx180H-1.png?context=bWFzdGVyfGltYWdlc3w2MDkyMnxpbWFnZS9wbmd8aW1hZ2VzL2g4Ny9oZGYvOTg3MjI0MjgzNTQ4Ni5wbmd8OTk5NTUzN2U2YzZiZGVmNDgzOGE1NDc3MzNkNGI3ZDUzY2ZmMDVjMGJiYTM2NzM3NGYzZWJlZWFjZjg0YjM3Yw',
        title: 'Dell 戴尔灵越游匣 Speed 游戏本',
        desc: '15.6 英寸大硬盘游戏本，强劲配置，冷酷外观。IPS 防眩光显示屏，酷睿 i7处理器，NVIDIA GTX 1050 4G GDDR5  独显。',
        price: '¥ 7,799'
      }, {
        img: 'https://imgazure.microsoftstore.com.cn/medias/MICJS0621-300Wx180H-1.png?context=bWFzdGVyfGltYWdlc3w1MTA5NHxpbWFnZS9wbmd8aW1hZ2VzL2hkNi9oNDEvOTg3MjI0MzcyMDIyMi5wbmd8MDE3NmVhYzk2Y2NlNmQxNzM0MjE5ZTJkNjU5YjdlYjBjYmY0MTk5ODZlZTE1YTE5NDhlMGZkYWJmMGVlNTQ5YQ',
        title: 'Dell 戴尔灵越燃 7000 II Ins14-7472 笔记本电脑',
        desc: '14 英寸全高清 IPS 显示屏，三边全景微边框，轻薄便携。第八代酷睿处理器，动力强劲，NVIDIA MX150 2G 独显，预装 Office 家庭和学生版 2016。',
        price: '¥ 5,499  起'
      }],
      lov: [{
        title: '联想 品牌专区',
        bgimg: 'https://imgazure.microsoftstore.com.cn/medias/Acc-ProductComputer-CP-Media-03.jpg?context=bWFzdGVyfGltYWdlc3wxNzc2MTV8aW1hZ2UvanBlZ3xpbWFnZXMvaDk4L2hjOC85NjAyODg2Njk2OTkwLmpwZ3w1NTQ3NTIxNWEwNmI3NGJhZjczODE5OGYxNGI1YTMyZGM4MjVkNjBjNGUzMjM4ZTliYTlmM2QwNzkzMzQ4YzZm'
      }, {
        img: 'https://imgazure.microsoftstore.com.cn/medias/MICJS0629-300Wx180H-1.png?context=bWFzdGVyfGltYWdlc3w1MjgwMnxpbWFnZS9wbmd8aW1hZ2VzL2gwYy9oMTMvOTgyNjg0MDYwODc5OC5wbmd8ZGVmMDcyNTc3OTc2ZGNhYzVmNzUwNTE1ODU0ZTU5NjczYTQzYTYyYjhlZTBmN2U2MTk4MDhkNzQ5YWY0MjE2OQ',
        title: 'Lenovo 联想拯救者 R720 游戏笔记本电脑',
        desc: '15.6 英寸 IPS 大屏游戏本，大面积触控板，便捷小键盘，独特碳纤维纹理工艺，前端外壳采用斧刃式前冲设计。第七代酷睿处理器，带来迅捷操作体验。',
        price: '¥ 5,899'
      }, {
        img: 'https://imgazure.microsoftstore.com.cn/medias/MICJS0500-300Wx180H-1.png?context=bWFzdGVyfGltYWdlc3wzMTkyMnxpbWFnZS9wbmd8aW1hZ2VzL2g1MC9oN2QvOTg4NjE5OTcwOTcyNi5wbmd8YjVhOGI4ODUzMDBkODFkOWJiMDJjZWU1YmIwOTFkYzY0Y2I5YjBiNDJmMGNmM2I2MmU5NDk2NWQwMDUzM2E4Ng',
        title: 'Lenovo 联想小新 Air 12 云笔记本电脑',
        desc: '英特尔酷睿处理器，12.2"全高清 IPS 屏，金属机身，外观纤薄，杜比音效，预装正版 Office。',
        price: '¥ 3,499'
      }],
      tablet: [{
        title: '电脑和平板精选',
        bgimg: 'https://imgazure.microsoftstore.com.cn/medias/Acc-ProductComputer-CP-Media-02.jpg?context=bWFzdGVyfGltYWdlc3w0NjYwNXxpbWFnZS9qcGVnfGltYWdlcy9oNDEvaDlkLzk0MTA2ODM4MzAzMDIuanBnfDJiMTc1MTVjYzBmMTc5NDQ1YThmNmZjMjYxNGFhM2QwOTk1OGMzM2NkNGUwYWNlYzE2NTIzZWI5OGY5MDFkODY'
      }, {
        img: 'https://imgazure.microsoftstore.com.cn/medias/MIC2309-300Wx180H-1.png?context=bWFzdGVyfGltYWdlc3wzMjUwNXxpbWFnZS9wbmd8aW1hZ2VzL2g3NS9oZTMvOTgzMTcxNDQ1NTU4Mi5wbmd8OWQ2ZDQxMDNmNGNiMmRlNWI1OTlmNGY5YjY4YzE0Nzg4OWFlM2I3NmRkZGZlOWE3YWQxN2Y1ZDIwMDg3ZmI5NA',
        title: 'Porsche Design BOOK ONE 保时捷二合一平板电脑',
        desc: '13.3 英寸 IPS 触控显示屏，第七代酷睿处理器，搭载 Windows 10 专业版操作系统，内含 4,096 级压感手写笔。',
        price: '¥ 12,888'
      }, {
        img: 'https://imgazure.microsoftstore.com.cn/medias/MIC1873-300Wx180H-1.png?context=bWFzdGVyfGltYWdlc3w0ODkyMHxpbWFnZS9wbmd8aW1hZ2VzL2gyOC9oNzkvOTY0OTE4MDYzOTI2Mi5wbmd8ZmJkZTFlMGQ4NzQ3YjU1YTdmYjBhZTUwZDI2YzJhNGM0OTkyOWY5MTNmYzVhYjRkYmYyZWJjYTdlNmZmNDcwNA',
        title: '小米笔记本 Air 13.3″',
        desc: '英特尔酷睿处理器，12.2"全高清 IPS 屏，金属机身，外观纤薄，杜比音效，预装正版 Office。',
        price: '¥ 5,999'
      }, {
        img: 'https://imgazure.microsoftstore.com.cn/medias/MIC1925-300Wx180H-1.png?context=bWFzdGVyfGltYWdlc3w0ODMzN3xpbWFnZS9wbmd8aW1hZ2VzL2hhNi9oODEvOTg1NTUwMjEyMzAzOC5wbmd8ZTM3ODgwMWQxMzRiM2I2MDk3M2ZiNjJiNzY1ZmU2ZTliOGViNjQyMWNiYWQ3ODYwMGYyMjY1MTQ0NWZhYTk0YQ',
        title: '小米笔记本 Air 12.5″',
        desc: '英特尔第 7 代处理器，轻薄全金属机身，固态硬盘，12.5 英寸全高清屏，全贴合1080p屏幕，支持三屏显示和双4K视频播放，AKG 扬声器。',
        price: '¥ 3,999'
      }, {
        img: 'https://imgazure.microsoftstore.com.cn/medias/MICJS0131-300Wx180H-1.png?context=bWFzdGVyfGltYWdlc3w0NjE2M3xpbWFnZS9wbmd8aW1hZ2VzL2gwOC9oZTIvOTI5ODU1OTgyNzk5OC5wbmd8MTAwYzU3NGI1YmYzOGNlZTI1YWIzZGI0YTY1ZjhkNjNjMmRiZmY0OWU3OTJlNjdhMjFmOTZhMzE5OTQ1MTYxZA',
        title: 'Logah Hello Kitty 二合一平板',
        desc: '正版授权Hello Kitty二合一平板，可享Hello Kitty专属主题及开机画面，预装Windows10操作系统，Intel四核处理器，10.1英寸IPS屏幕，2GB内存32GB存储，接口丰富，配备可拆卸皮套式键盘。',
        price: '¥ 1,288'
      }]
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
      if ((this.box < this.scrollHeight + 74) && this.control) {
        this.k = true
        this.$refs.navCp.style.marginTop = 100 + 'px'
      } else {
        this.k = false
        this.$refs.navCp.style.marginTop = 0
      }
      console.log('box: ' + this.box, 'top: ' + (this.scrollHeight + 74))
    }
  },
  mounted () {
    // var _this = this
    // window.onload = function () {
    //   _this.box = _this.$refs.navContent.offsetTop
    //   console.log(_this.box, _this.k)
    //   _this.control = true
    //   _this.fun()
    // }
  },
  watch: {
    scrollHeight () {
      // this.fun()
    }
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
