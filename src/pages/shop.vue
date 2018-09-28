<template>
<div class="shop">
  <div v-if="bd>766">
    <v-header></v-header>
  </div>
  <div v-else>
    <v-nav></v-nav>
  </div>
  <div style="margin-top: 50px">
    <v-details></v-details>
  </div>
  <div>
    <v-info></v-info>
  </div>
  <div>
    <v-comment></v-comment>
  </div>
  <div v-if="bd<766">
    <v-footer></v-footer>
  </div>
</div>
</template>

<script>
import details from '@/components/details'
import info from '@/components/details/info'
import header from '@/components/v-header'
import nav from '@/components/details/header'
import footer from '@/components/details/footer'
import comment from '@/components/details/comment'
import {mapState} from 'vuex'
export default {
  components: {
    'v-details': details,
    'v-info': info,
    'v-header': header,
    'v-nav': nav,
    'v-footer': footer,
    'v-comment': comment
  },
  computed: mapState([
    'bd'
  ])
}
</script>

<style scoped lang="stylus">
</style>
