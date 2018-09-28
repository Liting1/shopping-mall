<template>
<div class="classify2">
  <div class="container">
    <ul>
      <li v-for="item in items" :key="item.id">
        <router-link :to="item.path">
          <div class="img"><img :src="item.imgUrl" alt=""></div>
          <div class="desc">
            <div class="name">{{item.name}}</div>
            <p v-html="item.desc"></p>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</div>
</template>

<script>
export default {
  props: ['items']
}
</script>

<style scoped lang="stylus">
.classify2
  .container
    width: 100%
    padding: 0 12px
    box-sizing: border-box
    ul
      border-top: solid 1px #ccc
      border-left: solid 1px #ccc
      box-sizing: border-box
      overflow: hidden
      li
        position: relative
        float: left
        border-right: solid 1px #ccc
        border-bottom: solid 1px #ccc
        box-sizing: border-box
        width: 50%
        &:after
          content: ''
          display: block
          padding-top: 57.43243243%
        a
          position: absolute
          left: 0
          top: 0
          display: flex
          align-items: center
          width: 100%
          height: 100%
        .img
          width: 47.2972973%
          text-align: center
          flex-shrink: 0
          img
            max-width: 79px
            height: auto
        .desc
          width: 100%
          padding-right: 3.37837838%
          text-align: right
          .name
            font-size: 3.43vw
            line-height: 1.3em
            color: rgb(51, 51, 51)
          p
            font-size: 2.81vw
            color: #666
            line-height: 1.3em
</style>
