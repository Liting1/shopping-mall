<template>
<div class='compare container'>
  <div><h3 class="title-t">Surface 机型对比</h3></div>
  <div class="head">
    <div class="compare-title">
      <span>Surface 机型对比</span>
    </div>
    <div class="headContent">
      <div class="head-btn"><a href="javascript:;" @click="prev"><img width="100%" src="../../assets/img/l.png"></a></div>
      <ul>
        <li :class="{'hidden': index !== num}" v-for="(item, index) in data.cp" :key="item.id">
          <a href="#">
            <div class="img"><img width="100%" :src="item.img" alt=""></div>
            <p>{{item.name}}</p>
            <p class="price" style="color: #333">{{item.price}}</p>
            <div class="button">
              <button>查看详情</button>
            </div>
          </a>
        </li>
      </ul>
      <div class="head-btn"><a href="javascript:;" @click="next"><img width="100%" src="../../assets/img/r.png"></a></div>
    </div>
  </div>
  <div class="content" v-for="item in data.cpdata" :key="item.id">
    <div class="title"><span>{{item.title}}</span></div>
    <ul>
      <li :class="{'abc': index !== num}" v-for="(desc, index) in item.desc" :key="desc.id"><p v-html="desc"></p></li>
    </ul>
  </div>
</div>
</template>

<script>
export default {
  props: ['data'],
  data () {
    return {
      num: 0
    }
  },
  methods: {
    next () {
      if (this.num >= 3) {
        this.num = -1
      }
      this.num++
    },
    prev () {
      if (this.num <= 0) {
        this.num = 4
      }
      this.num--
    }
  }
}
</script>

<style scoped lang="stylus">
@media screen and (min-width: 766px)
  .compare
    .title-t
      display: none
    .head
      .compare-title
        margin-top: 10px
        span
          font-size: 40px
          color: #009bdf
          vertical-align: middle
      .headContent
        .head-btn
          display: none
        ul
          display: flex
          a
            text-align: center
            p:nth-child(2)
              font-size: 26px
              margin-bottom: 4.74576271%
              color: #333
            p:nth-child(3)
              font-size: 18px
              line-height: 24px
            .button button
              width: 150px
              height: 36px
              line-height: 36px
              color: #fff
              font-size: 14px
              background-color: #ec5411
              outline: none
              border: none
              margin-bottom: 6.77966102%
    .content
      .title
        font-size: 18px
        color: #333
        line-height: 2em
        text-indent: 0.4em
        border-bottom: 1px solid #999
      ul
        display: flex
        li
          width: 25%
          padding: 1.18644068% 0 1.18644068% 5.93220339%
          box-sizing: border-box
          font-size: 14px
          p
            line-height: 2.3em
            sup
              line-height: 0
              vertical-align: super
              font-size: smaller

@media screen and (max-width: 765px)
  .compare
    width: 100%
    padding: 0 12px
    box-sizing: border-box
    .title-t
      font-size: 20px
      text-align: center
      margin: auto
      margin-bottom: 4.19463087%
      color: #009bdf
    .head
      border: solid 1px #666
      display: flex
      align-items: center
      .compare-title
        width: 24.83221477%
        flex-shrink: 0
        padding: 0 0.4em
        box-sizing: border-box
        font-size: 11px
      .headContent
        width: auto
        border-left: solid 1px #666
        display: flex
        box-sizing: border-box
        .head-btn
          width: 22.52252252%
          flex-shrink: 0
          a
            display: block
            width: 70%
            margin: 28px auto 0
        ul
          .img
            text-align: center
            margin-bottom: 4.74576271%
            img
              width: 84.74576271%
          .hidden
            display: none
          p
            font-size: 12px
            text-align: center
            margin-bottom: 4.74576271%
          .button
            text-align: center
            margin-bottom: 6.77966102%
            button
              width: 103px
              height: 25px
              line-height: 25px
              background-color: #ec5411
              border: none
              outline: none
              color: #fff
    .content
      display: flex
      border: solid 1px #666
      border-top: none
      align-items: center
      .title
        width: 24.83221477%
        flex-shrink: 0
        padding: 0 0.4em
        box-sizing: border-box
        font-size: 11px
      ul
        border-left: solid 1px #666
        box-sizing: border-box
        width: 100%
        li
          padding: 1.18644068% 0 1.18644068% 5.93220339%
          p
            line-height: 1.3em
            font-size: 11px
        .abc
          display: none
</style>
