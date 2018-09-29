<template>
<div id="index">
  <div>
    <v-header></v-header>
  </div>
  <div class="content">
    <div>
      <v-banner :banData="data.banner"></v-banner>
    </div>
    <div class="pc" v-if="show">
      <div style="margin-bottom: 2.96296296%;">
        <v-classify v-if="data.classify" :show="false" :items="data.classify"></v-classify>
      </div>
      <div>
        <v-recommended :items="data.recommend"></v-recommended>
      </div>
    </div>
    <div class="m" v-else>
      <v-mClassify style="margin-bottom: 12.1875%;" :items="data.mclassify"></v-mClassify>
      <v-mClassify2 :items="data.ads"></v-mClassify2>
    </div>
    <div>
      <v-cp-one :items="data.cp"></v-cp-one>
    </div>
    <div class="games" style="margin-bottom: 45px">
      <v-game :items="data.hot"></v-game>
    </div>
    <div>
      <v-service></v-service>
    </div>
  </div>
  <div>
    <v-bottom></v-bottom>
  </div>
  <div>
    <v-footer></v-footer>
  </div>
</div>
</template>

<script>
import header from '@/components/v-header'
import banner from '@/components/banner'
import classify from '@/components/classify'
import mClassify from '@/components/classify/m_classify'
import mClassify2 from '@/components/classify/m_classify2'
import recommended from '@/components/recommended'
import cpOne from '@/components/cp/cp-one'
import game from '@/components/game'
import service from '@/components/service'
import bottom from '@/components/bottom'
import footer from '@/components/v-footer/m-footer'
import { mapState } from 'vuex'
export default {
  data () {
    return {
      data: {}
    }
  },
  components: {
    'v-header': header,
    'v-banner': banner,
    'v-classify': classify,
    'v-recommended': recommended,
    'v-cp-one': cpOne,
    'v-game': game,
    'v-service': service,
    'v-mClassify': mClassify,
    'v-mClassify2': mClassify2,
    'v-bottom': bottom,
    'v-footer': footer
  },
  computed: {
    ...mapState([
      'bd'
    ]),
    show () {
      if (this.bd > 766) {
        return true
      } else {
        return false
      }
    }
  },
  created () {
    this.$axios.get('/api/static/data.php?c=index').then((res) => {
      this.data = res.data
    }).catch((err) => {
      console.log(err)
    })
  }
}
</script>

<style scoped lang="stylus">
@media only screen and (max-width: 766px)
  .games
    display: none
</style>
