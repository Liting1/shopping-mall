<template>
<div>
  <div><v-header></v-header></div>
  <div><v-user></v-user></div>
  <div><v-bottom></v-bottom></div>
  <div><v-footer></v-footer></div>
</div>
</template>

<script>
import header from '@/components/v-header'
import user from '@/components/user'
import bottom from '@/components/bottom'
import footer from '@/components/v-footer/m-footer'
export default {
  components: {
    'v-header': header,
    'v-user': user,
    'v-bottom': bottom,
    'v-footer': footer
  }
}
</script>

<style scoped lang="stylus">
</style>
