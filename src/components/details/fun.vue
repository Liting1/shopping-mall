<template>
<div class="fun">
  <div class="fun-desc">
<<<<<<< HEAD
    <p>• 在笔记本电脑、平板电脑与工作室模式间随意切换</p>
    <p>• 配备第 7 代英特尔酷睿处理器</p>
    <p>• 续航长达 13.5 小时1，满足日常所需</p>
    <p>• 12.3" PixelSense 触控显示屏</p>
    <p>• 支持 Surface 触控笔及 Surface Dial</p>
    <p>• 预装 Windows 10 家庭版，Office 家庭和学生版</p>
  </div>
  <div class="fun-more">点击查看专业版</div>
=======
    <p v-for="item in desc" :key="item.id">{{item}}</p>
  </div>
  <div class="fun-more">点击查看更多相关产品</div>
>>>>>>> ...
</div>
</template>

<script>
<<<<<<< HEAD
export default {}
=======
export default {
  props: ['desc']
}
>>>>>>> ...
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
