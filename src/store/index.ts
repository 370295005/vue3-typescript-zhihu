import { createStore } from 'vuex'
import { UserProps } from '@/types'
interface StoreState {
  userInfo: UserProps
  isLoading: boolean
}
export default createStore<StoreState>({
  state: {
    userInfo: {
      isLogin: false,
      nickname: '',
      id: 0,
      avatar: '',
      email: ''
    },
    isLoading: true
  },
  mutations: {
    setUserInfo (state, data) {
      state.userInfo = data
    },
    setLoading (state, data) {
      state.isLoading = data
    }
  },
  actions: {
    updateUserInfo ({ commit }, data) {
      commit('setUserInfo', data)
    },
    updateLoading ({ commit }, data) {
      commit('setLoading', data)
    }
  },
  modules: {},
  getters: {
    getUserInfo (state) {
      return state.userInfo
    }
  }
})
