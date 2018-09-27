<template>
<div class="service">
  <div class="container">
    <ul>
      <li v-for="(item, index) in items" :key="item.id">
        <a href="#">
          <div style="width:30px;height:30px"><v-icon :num="index"></v-icon></div>
          <p>{{item}}</p>
        </a>
      </li>
    </ul>
  </div>
</div>
</template>

<script>
import icon from '@/components/icon'
export default {
  data () {
    return {
      items: ['30天退换货', '顺丰包邮', '24 x 7在线服务', '认证翻新 Surface', '微信/支付宝快捷支付', '超万种产品以旧换新']
    }
  },
  components: {
    'v-icon': icon
  }
}
</script>

<style scoped lang="stylus">
@media only screen and (max-width: 766px)
  body
    .service
      border-top: none
      .container
        ul
          flex-wrap: wrap
          li
            width: 33.33333333%
          li:nth-child(3)
            border-right: none

.service
  border-top: solid 1px #ccc
  .container
    ul
      display: flex
      li
        margin: 21px 0
        width: 16.66666667%
        border-right: solid 1px #ccc
        text-align: center
        box-sizing: border-box
        div
          display: inline-block
        p
          font-size: 16px
          line-height: 1.2em
          color: #666
          margin-top: 5px
      li:last-child
        border-right: none
</style>
