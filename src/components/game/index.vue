<template>
<div class="game">
  <div class="container">
    <div class="title">
      <span>热门Windows 10 游戏及应用</span>
    </div>
    <div class="game-list">
      <ul>
        <li v-for="item in items" :key="item.id">
<<<<<<< HEAD
          <a href="#">
=======
          <router-link :to='item.path'>
>>>>>>> ...
            <img width="100%" :src="item.img" alt="">
            <div class="desc">{{item.desc}}</div>
            <div class="star">
              <img src="@/assets/img/stars.png" alt="">
              <div class="star-x" :style="{width: item.width}"></div>
            </div>
<<<<<<< HEAD
          </a>
=======
          </router-link>
>>>>>>> ...
        </li>
      </ul>
    </div>
  </div>
</div>
</template>

<script>
export default {
<<<<<<< HEAD
  data () {
    return {
      items: [{
        img: 'http://store-images.s-microsoft.com/image/apps.31326.13510798885735219.3dfb176a-2479-4b17-ab6e-418794f3932d.a8aae002-3be2-4cd4-9ca3-b3e2e7e14882',
        desc: 'Minecraft for Windows 10',
        width: '100%'
      }, {
        img: 'http://store-images.s-microsoft.com/image/apps.21021.13954787087416189.65ab3adc-81a4-4030-aa3c-ced31da4491a.73b0760d-45f7-46fc-8ce2-ab5ee02520f8',
        desc: '帝国时代：决定版',
        width: '80%'
      }, {
        img: 'http://store-images.s-microsoft.com/image/apps.4458.13510798887550312.1152921504704380324.3a10922a-e559-46bf-8fb4-a273279585b6',
        desc: 'Forza Horizon 3 标准版',
        width: '70%'
      }, {
        img: 'http://store-images.microsoft.com/image/apps.39696.13510798882964918.84c62c00-331b-45af-af2b-3a3e606cf731.573cd12b-dd2a-4227-b689-ef1931cac634',
        desc: 'Plague Inc.',
        width: '60%'
      }, {
        img: 'http://store-images.s-microsoft.com/image/apps.26032.13510798887557860.1152921504704287565.54fc5f07-e35a-4eb6-b4c7-15a6884d6f22',
        desc: 'Forza Horizon 3 豪华版',
        width: '50%'
      }, {
        img: 'http://store-images.s-microsoft.com/image/apps.46738.13711224919405392.9feef292-1f71-4dcb-9f1b-9f75dfb6ff78.d126a3dd-d7f8-4e50-9549-9c0b189e4ec2',
        desc: '三国群英传-逐鹿中原',
        width: '40%'
      }, {
        img: 'http://store-images.s-microsoft.com/image/apps.1703.13510798887557960.1152921504704415655.59ac322d-aa29-4bf1-9dab-954155c8e2c2',
        desc: 'Forza Horizon 3 终极版',
        width: '30%'
      }, {
        img: 'http://store-images.s-microsoft.com/image/apps.35072.13670972585585116.70570f0d-17aa-4f97-b692-5412fa183673.25a97451-9369-4f6b-b66b-3427913235eb',
        desc: 'Cuphead',
        width: '20%'
      }],
      goods: []
    }
=======
  props: ['items'],
  data () {
    return {
    }
  },
  created () {
    // this.$axios.get('/api/web/index.php?m=default&c=index&a=goods&limit=8&start=0').then((res) => {
    //   this.goods = res.data
    // })
>>>>>>> ...
  }
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
            z-index: 100
          .star-x
            z-index: 99
            position: absolute
            top: 0
            left: 0
            height: 16px
            background-color: #da3b01
</style>
