import * as types from './mutation-types'
import { clearUserInfo, clearUserToken } from '../assets/js/cache'
const mutations = {
  [types.SET_USER_INFO] (state, query) {
    state.userInfo = query
  },
  [types.SET_USER_TOKEN] (state, query) {
    state.userToken = query
  },
  [types.SET_USER_MONEY] (state, query) {
    state.userMoney = query
  },
  [types.CLEAR_USER_INFO] (state) {
    state.userInfo = clearUserInfo()
  },
  [types.CLEAR_USER_TOKEN] (state) {
    state.userToken = clearUserToken()
  },
  [types.ERROR_TIME_LIST] (state, arr) {
    state.errorTimeList = arr
  },
  [types.SET_TASK_COUNT] (state, query) {
    state.taskCount = query
  },
  [types.SET_TASK_COUNT_BUY] (state, query) {
    state.taskCountBuy = query
  }
}
export default mutations
