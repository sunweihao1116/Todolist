import Vue from 'vue'
import Router from 'vue-router'
import Picker from '../components/Picker'
import Todo from '../components/Todo'
Vue.use(Router)

export default new Router({
  routes: [
  	{
  		path:'/',
  		component:Todo,
  	},{
      path: '/Picker',
      name: 'Picker',
      component: Picker,
    }
  ]
})
