export default {
  moneyStr (m) {
    var str = String(m).split('').reverse()
    var d = []
    for (let i = 0; i < str.length; i++) {
      if (i % 3 === 0) {
        d.push(',')
      }
      d.push(str[i])
    }
    return '¥ ' + d.reverse().join('').replace(/^,|,$/, '') + '.00'
  },
  strMoney (s) {
    return parseInt(s.slice(1).replace(/,/g, ''))
  }
}
