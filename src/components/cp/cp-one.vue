<template>
<div class="box">
  <div class="container" v-for="item in items" :key="item.id">
    <div class="title">
      <span>{{item.title}}</span>
    </div>
    <div class="box-content">
      <ul>
        <li v-for="cp in item.cp" :key="cp.id" :style="{backgroundImage: 'url(' + cp.bgimg + ')'}">
          <router-link :to="cp.path">
            <div class="box-a">
              <div class="img" v-if="cp.img"><img width="100%" :src="cp.img" alt=""></div>
              <div class="desc">
                <h3 v-html="cp.title"></h3>
                <p>{{cp.desc}}</p>
                <div class="price" v-if="cp.price">售价：<strong>{{cp.price}}</strong> 起</div>
              </div>
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
@media only screen and (max-width: 1100px)
  .box .container .box-content ul li .box-a .desc h3
    font-size: 14px !important

@media only screen and (min-width: 766px)
  .box
    .container
      margin-bottom: 45px
      .title
        font-size: 30px
        line-height: 2em
      .box-content
        ul
          display: flex
          border-top: solid 1px #e4e4e4
          border-left: solid 1px #e4e4e4
          li
            width: 25%
            display: inline-block
            box-sizing: border-box
            border-right: 1px solid #e4e4e4
            border-bottom: 1px solid #e4e4e4
            background-size: cover
            background-position: center
            .box-a
              padding: 0 6.66666667%
              display: block
              box-sizing: border-box
              cursor: pointer
              .img
                margin-top: 11.66666667%
              .desc
                h3
                  font-weight: normal
                  margin-top: 6.66666667%
                  color: #333
                  font-size: 16px
                  line-height: 1.3em
                  overflow: hidden
                  white-space: nowrap
                  text-overflow: ellipsis
                p
                  font-size: 14px
                  line-height: 1.3em
                  height: 2.6em
                  color: #666666
                  max-height: 180px
                  overflow: hidden
                  margin-top: 3%
                .price
                  margin-top: 5%
                  font-size: 13px
                  line-height: 18px
                  color: #da3b01
                  margin-bottom: 20%
                  span
                  strong
                    font-size: 18px
                    font-weight: bold
          li:first-child
            .box-a
              cursor: default
            img
              display: none
            .price
              display: none
            .desc
              h3
                font-size: 18px
                line-height: 1.5em
                height: auto
                color: #333
                overflow: visible
                white-space: normal
                text-overflow: clip
              p
                font-size: 14px
                color: #5E5E5E
                height: auto
                &:hover
                  text-decoration: underline
                  cursor: pointer

@media only screen and (max-width: 765px)
  .box
    .container
      width: 100%
      box-sizing: border-box
      padding: 0 12px
      .title
        display: none
      .box-content
        li:first-child
          min-height: 100px
          background-position: right center
          background-repeat: no-repeat
          background-size: auto 100%
          background-color: #f8f8f8
          margin-top: 2.8125%
          .box-a
            padding: 5%
            .img
              display: none
            h3
              font-size: 14px
              line-height: 1.5em
              color: #333
              height: auto
            p
              color: #999
              font-size: 12px
              line-height: 1.5em
              display: inline-block
              &:hover
                  text-decoration: underline
                  cursor: pointer
            .price
              display: none
        li:nth-child(n+2)
          width: 100%
          border-bottom: solid 1px #ccc
          .box-a
            padding: 8px 0
            display: flex
            cursor: pointer
            .img
              width: 44.44444444%
              display: inline-block
              vertical-align: top
              margin-top: 0
            .desc
              width: 55.555556%
              vertical-align: top
              text-align: left
              display: flex
              flex-direction: column
              justify-content: center
              h3
                font-size: 12px
                color: #333
                margin-top: 6.66666667%
                line-height: 1.3em
                overflow: hidden
                white-space: nowrap
                text-overflow: ellipsis
              p
                font-size: 14px
                line-height: 1.3em
                color: #666
                overflow: hidden
                margin-top: 3%
              .price
                margin-top: 5%
                font-size: 13px
                line-height: 18px
                color: #da3b01
                strong
                  font-size: 18px
</style>
