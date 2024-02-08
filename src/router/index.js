import Vue from 'vue'
import VueRouter from 'vue-router'
import CartPage from '../views/CartPage.vue'
import ProductsPage from '../views/ProductsPage.vue'
import ProductDetailPage from '../views/ProductDetailPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path:'/products',
    name: "Products",
    component: ProductsPage
  },
  {
    path: "/products/:id",
    name:"ProductDetail",
    component: ProductDetailPage
  },
  {
    path:"/cart",
    name: "Cart",
    component: CartPage
  },
  {
    path: '/',
    redirect: "/products"
  }
  // {
  //   path: '/',
  //   name: 'home',
  //   component: HomeView
  // },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
