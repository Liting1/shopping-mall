<template>
<div class="fun">
  <div class="fun-desc">
    <p v-for="item in desc" :key="item.id">{{item}}</p>
  </div>
  <div class="fun-more">点击查看更多相关产品</div>
</div>
</template>

<script>
export default {
  props: ['desc']
}
</script>

<style scoped lang="stylus">
.fun-desc
  line-height: 20px
  font-size: 14px
  text-align: left
.fun-more
  background-color: #f6f6f6
  padding: 7px
  text-align: left
  font-size: 14px
  line-height: 20px
  color: #666
  margin-top: 20px

@media only screen and (max-width: 765px)
  .fun-desc
    p
      font-size: 12px
      line-height: 18px
      color: #333
</style>
