/**
 * Created by mz05 on 2016/12/20.
 */
export default {
  state: {
    navShow: true
  },
  mutations: {
    changeStatus_show(state){
      //state.navShow = true;
      state.navShow = !state.navShow;
    }
  }
}
