<template>
<div class="recommended">
  <div class="container">
    <div class="title">
      <span>店长推荐</span>
    </div>
    <div class="recommended-list">
      <ul>
        <li v-for="(item, index) in items" :key="item.id" @click="link(index)">
          <div class="img"><img width="100%" :src="item.img"></div>
          <div class="img"><img width="100%" :src="item.imgUrl"></div>
          <div class="name">
            <h4>{{item.name}}</h4>
            <p>{{item.desc}}</p>
          </div>
          <div class="price">
            <span>售价：<strong>{{item.price}}</strong> 起</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</div>
</template>

<script>
export default {
  props: ['items'],
  methods: {
    link (index) {
      if (index === 2) {
        this.$router.push({path: '/shop'})
      }
    }
  }
}
</script>

<style scoped lang="stylus">
.recommended
  .title
    font-size: 30px
    line-height: 2em
    color: #333
    border-bottom: solid 1px #000
  .recommended-list
    padding: 10px 25px 0 50px
    ul
      display: flex
      li
        // flex: 1
        padding: 0 5px
        margin-bottom: 3%
        width: 20%
        .img
          margin-bottom: 6%
        .name
          min-height: 80px
          h4
            font-size: 16px
            color: #333
            font-weight: normal
            overflow: hidden
            white-space: nowrap
            text-overflow: ellipsis
          p
            color: #666
            font-size: 13px
            line-height: 25px
        .price
          font-size: 13px
          color: #da3b01
          strong
            font-weight: bold
            font-size: 18px

@media only screen and (max-width: 1024px)
  .recommended-list
    overflow: hidden
    overflow-x: auto
    padding: 10px 0 0 0 !important
    ul
      width: 145%
</style>
