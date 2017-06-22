/**
 * Created by mz05 on 2016/12/14.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import userInfo from './modules/user_info'
import count from './modules/count'
import navStatus from './modules/nav_status'
Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';
export default new Vuex.Store({
  modules: {
    userInfo,
    count,
    navStatus
  },
  strict: debug,
  middlewares: debug ? [] : []
})
