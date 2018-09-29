<template>
<div>
  <h1>测试页面</h1>
  <p>{{num>5?'num是大于5的数字':'num不是大于5'}}</p>
  <button @click="send">发送请求</button>
  <v-icon :num="'star'"></v-icon>
</div>
</template>

<script>
import ica from '@/components/icon'
export default {
  data () {
    return {
      num: 10
    }
  },
  methods: {
    send () {
      this.$axios.get('/apis/report/data.json').then((res) => {
        console.log(res)
      }).catch((err) => {
        console.log(err)
      })
    }
  },
  created () {},
  components: {
    'v-icon': ica
  }
}
</script>

<style>
</style>
