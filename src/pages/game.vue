<template>
<div class="game">
  <div>
    <v-header></v-header>
  </div>
  <div>
    <v-banner></v-banner>
  </div>
  <div>这是game 页面</div>
</div>
</template>

<script>
import header from '@/components/v-header'
import banner from '@/components/banner'
export default {
  components: {
    'v-header': header,
    'v-banner': banner
  }
}
</script>

<style scoped lang="stylus">
</style>
