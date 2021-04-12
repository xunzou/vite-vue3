/*
* @Author: ylq
 * @Date: 2021-04-09 17:01:05
 * @Desc: Store
 * @Last Modified by: ylq
 * @Last Modified time: 2021-04-09 17:28:03
 */
import { createStore } from 'vuex'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'

const store = createStore({
  state () {
    return {
      userInfo:{},
      roles: []
    }
  },
  actions,
  getters,
  mutations,
})

export default store
