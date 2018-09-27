<template>
<div>
  <v-header></v-header>
  <v-login></v-login>
</div>
</template>

<script>
import header from '@/components/v-header'
import login from '@/components/login'
export default {
  components: {
    'v-header': header,
    'v-login': login
  }
}
</script>

<style scoped lang="stylus">
</style>
