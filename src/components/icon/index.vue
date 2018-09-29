<template>
<div class="icon">
  <component :is="svg"></component>
</div>
</template>

<script>
import star from './svg/star'
import box from './svg/box'
import truck from './svg/truck'
import waiter from './svg/waiter'
import fxicon from './svg/fxicon'
import card2 from './svg/card2'
import fans from './svg/fans'
import logo from './svg/logo'
import home from './svg/home'
import apps from './svg/apps'
import cart from './svg/cart'
import man from './svg/man'
import service from './svg/service'
export default {
  props: {
    num: ''
  },
  computed: {
    svg () {
      switch (this.num) {
        case 'star':
          return 'star'
          break
        case 0:
          return 'box'
          break
        case 1:
          return 'truck'
          break
        case 2:
          return 'waiter'
          break
        case 3:
          return 'fxicon'
          break
        case 4:
          return 'card2'
          break
        case 5:
          return 'fans'
          break
        case 'logo':
          return 'logo'
          break
        case 'home':
          return 'home'
          break
        case 'apps':
          return 'apps'
          break
        case 'cart':
          return 'cart'
          break
        case 'man':
          return 'man'
          break
        case 'service':
          return 'service'
          break
      }
    }
  },
  components: {
    star,
    box,
    truck,
    waiter,
    fxicon,
    card2,
    fans,
    logo,
    home,
    apps,
    cart,
    man,
    service
  }
}
</script>

<style scoped lang="stylus">
  .icon
    width: 100%
    height: 100%
    div
      display: block
      width: 100%
      height: 100%
</style>
