import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MediaView from '../views/MediaView.vue'
import BlogView from '../views/BlogView.vue'
import JobView from '../views/JobView.vue'
import ShotJobComponent from '../views/ShotJobView.vue'
import ContactView from '../views/ContactView.vue'
import AboutUsView from '../views/AboutUsView.vue'
import MoreBlogsView from '../views/MoreBlogsView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/media',
    name: 'media',
    component: MediaView
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/MediaView.vue')
  },
  {
    path: '/blog',
    name: 'blog',
    component: BlogView
    
  },
  {
    path: '/job',
    name: 'job',
    component: JobView
    
  },
  {
    path: '/see-job',
    name: 'see-job',
    component: ShotJobComponent
    
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactView
    
  },
  {
    path: '/about',
    name: 'about',
    component: AboutUsView
    
  },
  {
    path: '/more-blogs',
    name: 'more-blogs',
    component: MoreBlogsView
    
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
