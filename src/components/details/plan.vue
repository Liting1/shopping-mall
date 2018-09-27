<template>
<div class="plan">
 <div class="plan-select">
<<<<<<< HEAD
    <div class="plan-select-title">请选择配置</div>
    <div class="cons">
      <ul>
        <li v-for="(item, index) in test" :key="item" @click="addclass(index)" :class="{'active': index === cons}"><div>
          <a href="javascript:;">酷睿 m3/4GB/128GB/银灰<span>￥6688</span></a>
=======
    <div class="plan-select-title">{{bd>766?'请选择配置':goodsConfig[shop.config].name}}</div>
    <div class="cons">
      <ul>
        <li v-for="(item, index) in goodsConfig" :key="item.id" @click="modifyconfig(index)" :class="{'active': index === shop.config}"><div>
          <button>{{item.name}}<span>{{item.new_price}}</span></button>
>>>>>>> ...
        </div></li>
      </ul>
    </div>
  </div>
</div>
</template>

<script>
<<<<<<< HEAD
export default {
  data () {
    return {
      test: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      cons: 0
    }
  },
  methods: {
    addclass (index) {
      this.cons = index
    }
=======
import { mapState, mapActions } from 'vuex'
export default {
  props: ['goodsConfig'],
  computed: mapState([
    'shop',
    'bd'
  ]),
  methods: {
    ...mapActions([
      'modifyconfig'
    ])
>>>>>>> ...
  }
}
</script>

<style scoped lang="stylus">
@media only screen and (min-width: 766px)
  .plan-select
    border-bottom: solid 1px #ccc
    overflow: hidden
    padding-bottom: 10px
    .plan-select-title
      font-size: 16px
      padding: 24px 0 2.01680672%
      line-height: 16px
    .cons
      ul
        li
          font-size: 14px
          width: 49%
          border: solid 1px #ccc
          height: 40px
          box-sizing: border-box
          float: left
          margin-bottom: 1.875%
          &.active
            border: solid 1px #3a9cd7
            div
               border: solid 2px #3a9cd7
          div
            padding: 0 60px 0 8px
            border: solid 2px #fff
            box-sizing: border-box
            height: 100%
            span
              font-size: 12px
<<<<<<< HEAD
            a
              max-height: 32px
              line-height: 14px
              display: block
              margin-top: 4px
=======
            button
              height: 100%
              text-align: left
              padding: 0
              overflow: hidden
              width: 100%
              line-height: 16px
              display: block
              border: none
              outline: none
              color: #666
              background-color: transparent
>>>>>>> ...
        li:nth-child(2n+1)
          margin-right: 2%

@media only screen and (max-width: 1024px)
  body .plan .plan-select
    .cons ul
      li
        width: 100%
        margin-right: 0
        line-height: 32px
        &.active
          div
            box-sizing: border-box
        div
          padding: 0px 8px
          height: 100%
<<<<<<< HEAD
          a
            line-height: 32px
            margin-top: 0
=======
>>>>>>> ...

@media only screen and (max-width: 765px)
  .plan
    .plan-select
      .cons
        display: none
    .plan-select-title
      box-sizing: border-box
      font-size: 12px
      padding: 12px
      color: #999
      border-top: solid 5px #f0f0f0
      border-bottom: solid 5px #f0f0f0
      margin: 8px 0
</style>
