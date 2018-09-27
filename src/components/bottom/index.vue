<template>
<div class="bottom">
  <div class="container">
    <div class="bottom-head">
      <span>获取新品发售资讯，有机会享专属优惠</span>
      <div class="iptBox"><input type="text" placeholder="请输入您的邮件地址"><button>订阅</button></div>
      <a href="#" class="clauseLink">隐私条款</a>
    </div>
    <div class="bottom-content">
      <ul>
        <li v-for="(item, index) in items" :key="item.id">
          <div class="bottom-block">
            <span class="title" @click="showThis(index)">{{item.title}}</span>
            <ul class="links" :class="{'show': ishow === index}">
              <li v-for='at in item.list' :key='at.id'><a href="#">{{at}}</a></li>
            </ul>
          </div>
          <div></div>
        </li>
      </ul>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      items: [{
        title: '产品类别',
        list: ['Surface', '电脑与平板', 'Xbox', 'Office', 'Windows', 'Visual Studio', '其他软件与服务', '配件']
      }, {
        title: '账号信息',
        list: ['账户详情', '订单跟踪', '订单历史', '软件密钥和下载']
      }, {
        title: '支持与帮助',
        list: ['产品支持信息', '退换货政策', '常见问题', '软件产品问题', '教育优惠相关问题', '购物流程', '支付与配送', '售后服务']
      }, {
        title: '热门资源',
        list: ['Surface Pro', 'Surface Laptop', 'Surface Studio', 'Surface Pro 4', 'Surface Book', 'Xbox One', 'Office 365', 'Office for Mac', '优惠信息', '教育专区', '商务专区', '以旧换新']
      }],
      ishow: ''
    }
  },
  methods: {
    showThis (i) {
      if (this.ishow === i) {
        this.ishow = ''
      } else {
        this.ishow = i
      }
    }
  }
}
</script>

<style scoped lang="stylus">
@media only screen and (min-width: 766px)
  .bottom
    background-color: #eeeeee
    .bottom-head
      border-bottom: 1px solid #737373
      color: #666
      padding: 15px 0
      line-height: 36px
      box-sizing: border-box
      .iptBox
        display: inline-block
        height: 30px
        font-size: 0
        vertical-align: middle
        margin: 0 14px
        input
          font-size: 14px
          height: 30px
          border: 1px solid #cccccc
          width: 220px
          box-sizing: border-box
          padding: 0 5px
          outline: none
        button
          display: inline-block
          width: 80px
          text-decoration: none
          color: #fff
          text-decoration: center
          line-height: 30px
          padding: 0
          background-color: #0067b8
          font-size: 14px
          margin-left: -1px
          text-align: center
          box-sizing: border-box
          border: none
      .clauseLink
        display: inline-block
        vertical-align: middle
        font-size: 12px
        color: #0d71a6
        text-decoration: underline
    .bottom-content>ul
      margin-top: 30px
      text-align: justify
      display: flex
      justify-content: space-between
      li
        width: 22%
        display: block
        vertical-align: top
        .bottom-block
          margin-bottom: 23px
          .title
            color: #333333
            font-size: 16px
            line-height: 36px
          .links
            margin-top: 16px
            font-size: 14px
            li
              height: 30px
              line-height: 30px
              white-space: nowrap
              display: block
              a
                color: #0d72a6

@media only screen and (max-width: 766px)
  .bottom
    background-color: #eeeeee
    margin-bottom: 45px
    .bottom-head
      padding: 15px 0
      color: #666
      line-height: 36px
      span
        font-size: 12px
      .iptBox
        height: 30px
        font-size: 0
        input
          width: calc(100% - 80px)
          height: 30px
          font-size: 14px
          border: solid 1px #cccccc
          padding: 0 5px
          box-sizing: border-box
          outline: none
        button
          display: inline-block
          width: 80px
          text-decoration: none
          color: #fff
          text-decoration: center
          line-height: 30px
          background-color: #0067b8
          font-size: 14px
          margin-left: -1px
          text-align: center
          border: none
          padding: 0
      a
        display: inline-block
        vertical-align: middle
        font-size: 12px
        color: #333
        text-decoration: underline
    .bottom-content
      ul li
        width: 100%
        .bottom-block
          border-top: solid 1px #d6d6d6
          margin-bottom: 3px
          .title
            display: block
            line-height: 30px
            padding-top: 7px
            height: auto
            font-size: 12px
          .links
            display:none
            padding-left: 20px
            box-sizing: border-box
            li
              height: 30px
              white-space: nowrap
              line-height: 30px
              a
                font-size: 14px
                color: #333
          .show
            display: block
  .container
    padding: 0 12px
    box-sizing: border-box
    width: 100%
</style>
