// 事件触发器
export default {
  show ({commit}) {
    commit('SHOW')
  },
  hidden ({commit}) {
    commit('HIDDEN')
  },
  size ({commit}, s) {
    commit('SIZE', s)
  },
  scroll ({commit}, h) {
    commit('SCROLL', h)
  },
  goods ({commit}, f) {
    commit('GOODS', f)
  },
  addCart ({commit}, r) {
    commit('ADDCART', r)
  },
  isNum ({commit}, bool) {
    commit('ISNUM', bool)
  },
  modifyconfig ({commit}, num) {
    commit('MODIFYCONFIG', num)
  },
  modifypage ({commit}, num) {
    commit('MODIFYPAGE', num)
  },
  modifynum ({commit}, num) {
    commit('MODIFYNUM', num)
  }
}
