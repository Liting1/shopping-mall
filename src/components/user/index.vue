<template>
<div class="user">
  <div class="container">
    <div class="user-nav">
      <a href="#">微软官方商城</a><i> > </i><span>我的账户</span>
    </div>
    <div class="title">
      <h1><span>欢迎您！</span>hello world</h1>
    </div>
    <div class="ser">
      <ul>
        <li v-for="item in [1, 2, 3, 4, 5]" :key="item.id">
          <a href="#">
            <div class="left-icon">
              <span class="icon">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid" width="100%" height="100%" viewBox="0 0 52 52">
                  <path d="M51.997,52.000 L-0.012,52.000 L-0.012,-0.000 L51.997,-0.000 L51.997,52.000 ZM2.000,50.000 L50.000,50.000 L50.000,2.000 L2.000,2.000 L2.000,50.000 ZM31.985,41.996 L5.998,41.996 L5.998,34.011 L31.985,34.011 L31.985,41.996 ZM8.000,40.000 L30.000,40.000 L30.000,36.000 L8.000,36.000 L8.000,40.000 ZM31.985,29.998 L5.998,29.998 L5.998,21.985 L31.985,21.985 L31.985,29.998 ZM8.000,28.000 L30.000,28.000 L30.000,24.000 L8.000,24.000 L8.000,28.000 ZM48.015,16.011 L4.005,16.010 L4.005,14.009 L48.015,14.002 L48.015,16.011 Z" fill=" #ccc"></path>
                </svg>
              </span>
            </div>
            <div class="right-desc">
              <h3>我的订单</h3>
              <p>查看订单详情、软件密钥、物流信息</p>
            </div>
          </a>
        </li>
      </ul>
    </div>
  </div>
</div>
</template>

<script>
export default {}
</script>

<style lang="stylus" scoped>
  .user
    .container
      .user-nav
        height: 24px
        line-height: 24px
        font-size: 12px
        color: #515151
      .title
        line-height: 120px
        height: 120px
        margin-bottom: 30px
        h1
          font-size: 24px
      .ser
        ul
          li
            display: inline-block
            background-color: #f3f3f3
            width: 32%
            height: 145px
            -webkit-box-sizing: border-box
            box-sizing: border-box
            vertical-align: top
            margin-right: 2%
            margin-bottom: 2%
            a
              display: block
              width: 100%
              font-size: 0px
              height: 100%
              .left-icon
                width: 23.13624679%
                display: inline-block
                vertical-align: top
                .icon
                  display: block
                  width: 52px
                  height: 52px
                  max-width: 80%
                  margin: 22.22222222% auto 0
              .right-desc
                width: 76.6066838%
                display: inline-block
                margin-top: 20px
                vertical-align: top
                padding: 0 5px
                box-sizing: border-box
                h3
                  color: #0067b8
                  font-size: 18px
                  line-height: 21px
                  margin-bottom: 8px
                p
                  font-size: 14px
                  line-height: 18px
                  color: #666
                  max-height: 36px
                  overflow: hidden
          li:nth-child(3)
            margin-right: 0

@media only screen and (max-width: 776px)
  .user
    .container
      width: 100%
      padding: 0 12px
      box-sizing: border-box
      .ser
        ul
          li
            display: block
            width: 100%
            height: 80px
            margin-bottom: 15px
            a
              .left-icon
                width: 33.41902314%
                .icon
                  margin: 15px auto
              .right-desc
                width: 66.32390746%
                margin-top: 0
                p
                  display: none
                h3
                  line-height: 80px
                  margin: 0
                  font-size: 18px
</style>
