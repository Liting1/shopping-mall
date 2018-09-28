<template>
<div class="classify">
  <div class="container">
    <ul>
      <li v-for="item in items" :key='item.id'>
        <a href="#">
          <div class="name">{{item.name}}</div>
          <img :src="item.imgUrl" alt="">
        </a>
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
.classify
  width: 100%
  .container
    padding: 0 12px
    width: 100%
    box-sizing: border-box
    ul
      box-sizing: border-box
      border-top: solid 1px #ccc
      border-left: solid 1px #ccc
      overflow: hidden
      li
        float: left
        box-sizing: border-box
        width: 25%
        border-right: solid 1px #ccc
        border-bottom: solid 1px #ccc
        text-align: center
        position: relative
        &:after
          content: ''
          display: block
          padding-top: 100%
        a
          display: flex
          flex-direction: column
          justify-content: center
          align-items: center
          position: absolute
          width: 100%
          height: 100%
          left: 0
          top: 0
          .name
            font-size: 3.4vw
            color: #333
            margin-bottom: 6.89655172%
          img
            max-width: 50px
            height: auto
            text-align: center
</style>
