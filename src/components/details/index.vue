<template>
<div class="details">
  <div class="container de-tp">微软官方商城 &gt; Surface &gt; 微软 Surface Pro 中文版</div>
  <div class="container">
    <div class="details-left">
      <div class="details-left-box">
<<<<<<< HEAD
        <v-pic></v-pic>
        <v-fun class="box"></v-fun>
      </div>
    </div>
    <div class="details-right">
      <v-title class='details-box'></v-title>
      <div @click="show"><v-plan></v-plan></div>
      <div class="fun details-box"><v-fun></v-fun></div>
      <div class="details-page"><v-pages></v-pages></div>
=======
        <v-pic :imgs="goodsData.imgArr"></v-pic>
        <v-fun :desc="goodsData.desc" class="box"></v-fun>
      </div>
    </div>
    <div class="details-right">
      <v-title :goodsName="goodsData.goods_name" :config="goodsData.config[shop.config]" class='details-box'></v-title>
      <div @click="show"><v-plan :goodsConfig="goodsData.config"></v-plan></div>
      <div class="fun details-box"><v-fun :desc="goodsData.desc"></v-fun></div>
      <div class="details-page"><v-pages :page="goodsData.page"></v-pages></div>
>>>>>>> ...
      <v-buy></v-buy>
    </div>
  </div>
  <div class="alert-a" :class="{'tops': lows}" ref="alp">
    <v-alert></v-alert>
  </div>
</div>
</template>

<script>
<<<<<<< HEAD

=======
>>>>>>> ...
import pic from '@/components/details/pic'
import fun from '@/components/details/fun'
import plan from '@/components/details/plan'
import pages from '@/components/details/pages'
import buy from '@/components/details/buy'
import title from '@/components/details/title'
import win from '@/components/details/alert'
import { mapState, mapActions } from 'vuex'
export default {
<<<<<<< HEAD
  data () {
    return {}
  },
  computed: mapState([
    'lows'
=======
  computed: mapState([
    'lows',
    'shop',
    'goodsData'
>>>>>>> ...
  ]),
  components: {
    'v-pic': pic,
    'v-fun': fun,
    'v-plan': plan,
    'v-pages': pages,
    'v-buy': buy,
    'v-title': title,
    'v-alert': win
  },
  methods: {
    ...mapActions([
<<<<<<< HEAD
      'show'
    ])
=======
      'show',
      'goods'
    ])
  },
  created () {
    // let id = this.$route.params.id
    // this.goodsData.goods_id = id
    // this.$axios.get('/api/web/index.php?m=default&c=goods&a=index&id=' + id).then((res) => {
    //   this.goods(res.data[0])
    //   this.images = res.data[1]
    //   this.shop.name_id = id
    // })
>>>>>>> ...
  }
}
</script>

<style scoped lang="stylus">
  .de-tp
    height: 24px
    line-height: 24px
    font-size: 12px
    color: #515151

  @media only screen and (min-width: 766px)
    .details
      .container
        display: flex
        justify-content: space-between
        .details-left
          width: 49%
          max-width: 576.8888888889px
          .details-left-box
            margin-top: 30px
            box-sizing: border-box
            width: 100%
            overflow: hidden
            .box
              margin-top: 40px
        .details-right
          width: 49%
          max-width: 576.8888888889px
          .fun
            display: none
      .alert-a
        display: none

  @media only screen and (max-width: 765px)
    .details
      .de-tp
        display: none
      .container
        width: 100%
        box-sizing: border-box
        .box
          width: 100%
          padding: 0 12px
          box-sizing: border-box
          display: none
        .details-box
          width: 100%
          padding: 0 12px
          box-sizing: border-box
        .details-page
          display: none
      .alert-a
        position: fixed
        width: 100%
        height: 100%
        // background-color: rgba(0, 0, 0, 0.2)
        z-index: 200
        top: 100%
        left: 0
        transition: all .3s
      .tops
        top: 0
</style>
