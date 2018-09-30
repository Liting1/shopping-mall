<template>
<div class="game">
  <div class="container">
    <div class="title">
      <span>热门Windows 10 游戏及应用</span>
    </div>
    <div class="game-list">
      <ul>
        <li v-for="item in items" :key="item.id">
          <router-link :to='item.path'>
            <img width="100%" :src="item.img" alt="">
            <div class="desc">{{item.desc}}</div>
            <div class="star">
              <img src="@/assets/img/stars.png" alt="">
              <div class="star-x" :style="{width: item.width}"></div>
            </div>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</div>
</template>

<script>
export default {
  props: ['items']
}
</script>

<style scoped lang="stylus">
.game
  .title
    font-size: 30px
    line-height: 2em
  .game-list
    ul
      li
        display: inline-block
        width: 10.53497942%
        box-sizing: border-box
        position: relative
        vertical-align: top
        margin: 0 0.90534979%
        .desc
          color: #004d91
          font-size: 14px
          line-height: 18px
          height: 36px
          -webkit-line-clamp: 2
          display: -webkit-box
          -webkit-box-orient: vertical
          overflow: hidden
          text-overflow: ellipsis
        .star
          width: 93px
          height: 16px
          position: relative
          background-color: #C7C7C7
          img
            position: absolute
            top: 0
            left: 0
            height: 16px
            z-index: 99
          .star-x
            z-index: 98
            position: absolute
            top: 0
            left: 0
            height: 16px
            background-color: #da3b01
</style>
