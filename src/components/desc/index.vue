<template>
<div class="desc">
  <div class="container">
    <div class="desc-img">
      <img width="100%" src="https://imgazure.microsoftstore.com.cn/_ui/images/category/surface/ad_surfacepro5_1180.png">
    </div>
    <div class="desc-content">
      <div class="desc-content-inst">
        <h3>注释说明：</h3>
        <p v-for="(item, index) in inst" :key="item.id">[{{index + 1}}] 视频播放时间最长可达 {{item}} 小时。电池续航时间会因设置、使用及其他因素有显著差异。</p>
      </div>
      <div class="desc-content-box">
        <h1>微软Surface</h1>
        <ul>
          <li v-for="item in surface" :key="item.id" :class="{'li': item.bool}"><a href="#" v-if="item.bool">{{item.link}}</a>{{item.txt}}</li>
        </ul>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  props: ['surface'],
  data () {
    return {
      inst: [9, 13.5, 14.5, 17]
    }
  }
}
</script>

<style scoped lang='stylus'>
.desc
  .desc-img
    margin-bottom: 6%
  .desc-content
    .desc-content-inst
      h3
        font-size: 16px
        line-height: 24px
        color: #333
        font-weight: bold
      p
        font-size: 12px
        color: #666666
        line-height: 24px
    .desc-content-box
      margin-top: 70px
      margin-bottom: 70px
      h1
        font-size: 20px
        line-height: 30px
        font-weight: normal
        color: #1a1a1a
      ul
        li
          font-size: 16px
          line-height: 24px
          color: #1a1a1a
          margin-bottom: 20px
          a:hover
            text-decoration: underline
        .li:before
          content: ' • '
</style>
