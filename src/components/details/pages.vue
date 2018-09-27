<template>
<div class="pages-packages">
  <div class="pages-packages-title">请选择特惠套餐</div>
  <div class="pages-packages-box">
    <ul>
<<<<<<< HEAD
      <li v-for="(item, index) in packages" :key="item.id" @click="pages(index)" :class="{'active': index === page}"><button>
        <div class="name">专业键盘盖套餐</div>
=======
      <li v-for="(item, index) in page" :key="item.id" @click="pages(index)" :class="{'active': index === shop.page}"><button>
        <div class="name">{{item}}</div>
>>>>>>> ...
        <div><span>¥5088</span><em>¥88</em></div>
      </button></li>
    </ul>
  </div>
</div>
</template>

<script>
<<<<<<< HEAD
export default {
  data () {
    return {
      packages: [1, 2, 3, 4, 5, 6, 7, 8],
      page: 0
    }
  },
  methods: {
    pages (index) {
      this.page = index
=======
import { mapState, mapActions } from 'vuex'
export default {
  props: ['page'],
  computed: mapState([
    'shop',
    'is_num'
  ]),
  methods: {
    ...mapActions([
      'isNum',
      'modifypage'
    ]),
    pages (index) {
      this.modifypage(index)
      if (index === (this.page.length - 1)) {
        this.isNum(true)
      } else {
        this.isNum(false)
      }
>>>>>>> ...
    }
  }
}
</script>

<style scoped lang="stylus">
.pages-packages
  .pages-packages-title
    font-size: 16px
    padding: 24px 0 2.01680672%
    line-height: 16px
  .pages-packages-box
    padding-bottom: 3px
    border-bottom: solid 1px #ccc
    overflow: hidden
    ul
      li
        border: solid 1px #ccc
        width: 31.59663866%
        margin-right: 2.5210084%
        margin-bottom: 2.01680672%
        float: left
        box-sizing: border-box
        height: 54px
        &.active
          border: solid 1px #3a9cd7
          button
            border: solid 2px #3a9cd7
        button
          width: 100%
          height: 100%
          background-color: transparent
          outline: none
          font-size: 14px
          border: solid 2px #fff
          .name
            overflow: hidden
            white-space: nowrap
            text-overflow: ellipsis
            padding: 0 32px
          em
            font-style: normal
            color: #da3b01
            padding: 0 4px
      li:nth-child(3n)
        margin-right: 0

@media only screen and (max-width: 1024px)
  body .pages-packages
    .pages-packages-box
      ul
        li
          width: 47.91666667%
          margin-right: 4.16666667% !important
          margin-bottom: 4.16666667%
        li:nth-child(2n)
          margin-right: 0 !important
</style>
