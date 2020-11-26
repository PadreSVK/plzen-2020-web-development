import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import NotFound from '../views/NotFound'



Vue.use(VueRouter)

const router = new VueRouter({
    routes: [
        {
          path: '/',
          name: 'Home',
          component: Home
        },
        {
          path: '/about',
          name: 'About',
          // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
          children: [
              {
                  path: "better-about", // /about/better-about
                  component: 
                  
              }
          ]
        },
        {
          path: '/user/:userId/loookup/:detailId',
          name: 'UserDetail',
          // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
        },
        {
          path: '*',
          name: '404',
          component: NotFound
        },
      
      ]
})

export default router
