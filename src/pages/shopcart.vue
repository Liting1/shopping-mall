<template>
<div>
  <v-header :showNav="false"></v-header>
  <v-shopcart></v-shopcart>
  <v-bottom></v-bottom>
  <v-footer></v-footer>
</div>
</template>

<script>
import header from '@/components/v-header'
import shopcart from '@/components/shopcart'
import bottom from '@/components/bottom'
import footer from '@/components/v-footer/m-footer'
export default {
  components: {
    'v-header': header,
    'v-shopcart': shopcart,
    'v-bottom': bottom,
    'v-footer': footer
  }
}
</script>

<style>
</style>
