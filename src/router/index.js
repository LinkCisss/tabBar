import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import('../views/home/Home')
const Category = () => import('../views/category/Category')
const Surprise = () => import('../views/surprise/Surprise')
const Cart = () => import('../views/cart/Cart')
const Profile = () => import('../views/profile/Profile')


Vue.use(Router)
const router = new Router({
  mode: 'history',// 把默认的 hash模式 转换成history模式 这样链接后面没有#
  // linkActiveClass: 'active', //这个可以改自动添加的类名字
  routes:[
    {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/surprise',
    component: Surprise
  },
  {
    path: '/cart',
    component: Cart
  },
  {
    path: '/profile',
    component: Profile
  }
  ]

})
export {router}

//下面这个不对
//
// const Routers = [
//   {
//     path: '',
//     redirect: '/home'
//   },
//   {
//     path: '/home',
//     component: Home
//   },
//   {
//     path: '/category',
//     component: Category
//   },
//   {
//     path: '/surprise',
//     component: Surprise
//   },
//   {
//     path: '/cart',
//     component: Cart
//   },
//   {
//     path: '/profile',
//     component: Profile
//   }
// ]
//
// const router = new Router({
//   Routers,
//   mode:'history',
// })
// export default router
