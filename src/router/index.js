import Vue from "vue";
import VueRouter from 'vue-router'
import Home from '../view/home.vue'

Vue.use(VueRouter)

const routes =[
  {
    path:'',
    name:'Home',
    component:Home
  },
]

const router = new VueRouter({
  routes,
  mode:'history'
})

export default router

// export default new Router({
//   routes: [
//     {
//       path:'/',
//       name:'Carrousel',
//       component:Carrousel,
//     }
//   ]
// })