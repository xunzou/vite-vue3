/*
* @Author: ylq
 * @Date: 2021-04-09 17:10:10
 * @Desc: Actions
 * @Last Modified by: ylq
 * @Last Modified time: 2021-04-09 17:48:18
 */

export default {
  
  getUserInfo ({commit}) {
    return new Promise((resolve, reject) => {
      commit('set_userInfo',[])
      resolve()
    })
  },
  async getRoles ({commit}) {
    let res = await getData()
    commit('set_roles', res)
  }
}