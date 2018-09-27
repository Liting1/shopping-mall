export default {
  sum (state) {
    var cart = state.cart
    var sum = 0
    var price = 0
    cart.forEach(function (v, i) {
      price = v.goods.config[v.config].new_price
      price = price.slice(1)
      price = price.replace(',', '')
      price = parseInt(price)
      price = price * v.num
      sum += price
    })
    sum = String(sum).split('').reverse()
    var d = []
    for (let i = 0; i < sum.length; i++) {
      if (i % 3 === 0) {
        d.push(',')
      }
      d.push(sum[i])
    }
    sum = '¥ ' + d.reverse().join('').replace(/^,|,$/, '') + '.00'
    return sum
  },
  all (state) {
    var cart = state.cart
    var a = 0
    cart.forEach(function (v, i) {
      a += v.num
    })
    return a
  }
}
