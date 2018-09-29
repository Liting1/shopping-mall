<template>
<div class="surface">
  <div>
    <v-header></v-header>
  </div>
  <div>
    <v-banner :banData="data.banner"></v-banner>
  </div>
  <div>
    <v-classify v-if="data.classify" :show="true" :items="data.classify"></v-classify>
  </div>
  <div style="margin-top: 20px">
    <v-compare v-if="data.comp" :data="data.comp"></v-compare>
  </div>
  <div style="margin-bottom: 5.08474576%">
    <v-goods :goods="data.goods"></v-goods>
  </div>
  <div>
    <v-desc :surface="data.surface"></v-desc>
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
import compare from '@/components/compare'
import bottom from '@/components/bottom'
import footer from '@/components/v-footer/m-footer'
import goods from '@/components/goods'
import desc from '@/components/desc'

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
    'v-compare': compare,
    'v-bottom': bottom,
    'v-footer': footer,
    'v-goods': goods,
    'v-desc': desc
  },
  created () {
    this.$axios.get('/api/static/data.php?c=surface').then((res) => {
      this.data = res.data
    }).catch((err) => {
      console.log(err)
    })
  }
}
</script>

<style>
</style>
