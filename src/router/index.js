import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('../views/home/home')
const Cart = () => import('../views/cart/cart')
const Profile = () => import('../views/profile/profile')
const Category = () => import('../views/category/category')
Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    redirect:'/home',
  },
  {
    path:'/home',
    component:Home
  },
  {
    path:'/category',
    component:Category
  },
  {
    path:'/cart',
    component:Cart
  },
  {
    path:'/profile',
    component:Profile
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
