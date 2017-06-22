/**
 * Created by mz05 on 2016/12/15.
 */
import { INCREMENT } from '../mutation_types'
export default {
  state: {
    count: 0,
    todos: [
      { id: 1, text: '...', done: true},
      { id: 2, text: '...', done:false}
    ]
  },
  getters: {
    doneTodos: state => {
      return state.todos.filter(todo => todo.done)
    },
    doneTodosCount: (state, getters) => {
      return getters.doneTodos.length
    }
  },
  //更改Vuex的store中的状态的唯一方法是提交mutation。
  //Vuex中的mutations非常类似于事件：每个mutation都有一个字符串的事件类型（type）和一个回调函数（handler）
  //这个回调函数就是我们实际进行状态更改的地方
  mutations: {//mutation必须是同步函数
    [INCREMENT] (state, payload) {
      state.count += payload.amount;
    },
    //increment: state => state.count++,
    decrement: state => state.count--
  }
}
