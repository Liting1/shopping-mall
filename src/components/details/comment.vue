<template>
<div class="comment">
  <div class="container">
    <div class="title">
      <h3>顾客评价</h3>
      <p>欢迎分享您对本商品的评价或使用心得！</p>
      <button>发表评论</button>
    </div>
    <div class="comments">
      <ul>
        <li v-for="item in [1, 1, 1, 1]" :key="item.id">
          <div class="content-box">
            <div class="title_box">
              <span>不错</span>
              <div class="star_box">
                <div v-for="item in items" :key="item.id"><v-icon :num="'star'"></v-icon></div>
              </div>
            </div>
            <p class="text">新surface外观很漂亮，选了无风扇版本，很安静，但偶尔有卡顿现象</p>
            <div class="time">04/09/2017</div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</div>
</template>

<script>
import icon from '@/components/icon'
export default {
  data () {
    return {
      items: [1, 2, 3, 4, 5]
    }
  },
  components: {
    'v-icon': icon
  }
}
</script>

<style scoped lang="stylus">
  .comment
    margin-top: 26px
    .container
      .title
        position: relative
        h3
          font-size: 40px
          color: #333333
          font-weight: normal
        p
          color: #333
          font-size: 14px
          line-height: 28px
        button
          display: inline-block
          position: absolute
          width: 150px
          height: 35px
          line-height: 34px
          border: 1px solid #da3b01
          text-align: center
          font-size: 14px
          color: #da3b01
          text-decoration: none
          background-color: #fff
          right: 0
          top: 36px
          &:hover
            background-color: #da3b01
            color: #fff
            cursor: pointer
      .comments
        margin-top: 20px
        li
          margin-bottom: 20px
          .content-box
            font-size: 16px
            background-color: #f5f5f5
            padding: 20px 30px
            line-height: 24px
            .title_box
              overflow: hidden
              span
                font-size: 18px
                color: #000
                float: left
              .star_box
                float: right
                width: 118px
                height: 25px
                box-sizing: border-box
                padding-top: 4px
                > div
                  display: inline-block
                  width: 20px
                  height: 20px
                  margin-left: 3px
            .text
              margin-top: 20px
              color: #666
              font-size: 16px
              line-height: 24px
            .time
              margin-top: 14px
              font-size: 16px
              line-height: 24px

@media only screen and (max-width: 766px)
  .comment
    .container
      width: 100%
      padding: 0 12px
      box-sizing: border-box
      .title
        overflow: hidden
        h3
          font-size: 30px
        button
          width: 110px
          height: 30px
          line-height: 30px
          padding: 0
          position: static
          float: right
          margin-top: 13px
      .comments
        margin-top: 15px
        li
          margin-bottom: 10px
          .content-box
            padding: 10px
            .title_box
              span
                font-size: 16px
                width: 100%
              .star_box
                width: 100%
                float: left
                margin-top: 5px
            .text
              margin-top: 5px
              font-size: 12px
            .time
              margin-top: 5px
              font-size: 14px
</style>
