/**
 * Created by mz05 on 2016/12/12.
 */
//引入组件
import contract from 'src/page/contract/contract'
import createContract from 'src/page/contract/createContract'
import dashboard from 'src/page/dashboard/dashboard'
import contractDetail from 'src/page/contract/contractDetail'
/*import login from 'src/page/login'*/
/*export default [
  { path: '/', name: '', component: (resolve) => require(['src/page/login/login'], resolve)},
  { path: '/login', name: 'login', component: (resolve) => require(['src/page/login/login'], resolve)},
  { path: '/dashboard', name: 'dashboard', component: dashboard},
  { path: '/contract', name: 'contract', component: contract},
  { path: '/contract/createContract', name: 'createContract', component: createContract},
  { path: '/contract/contractDetail/:id', name: 'contractDetail', component: contractDetail},
  //{ path: '*', component: NotFoundComponent }给出一个404页面，覆盖应用里面覆盖所有的路由情况
]*/
export default [
  { path: '/', name: '', component: (resolve) => require(['src/page/login/login'], resolve)},
  { path: '/login', name: 'login', component: (resolve) => require(['src/page/login/login'], resolve)},
  {
    path: '/home',
    name: 'home',
    component: (resolve) => require(['src/components/common/home.vue'], resolve),
    children: [
      { path: '/dashboard', name: 'dashboard', component: dashboard},
      { path: '/contract', name: 'contract', component: contract},
      { path: '/contract/createContract', name: 'createContract', component: createContract},
      { path: '/contract/contractDetail/:id', name: 'contractDetail', component: contractDetail}
    ]
  }
]
