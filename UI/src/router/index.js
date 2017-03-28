import Vue from 'vue'
import Router from 'vue-router'
import ZeeCard from '@/components/ZeeCard'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'air-quality-card',
      component: ZeeCard
    }
  ]
})
