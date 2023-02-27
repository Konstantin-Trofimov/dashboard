import { createRouter, createWebHistory } from 'vue-router'

import ViewAnalyze from '@/views/view-analyze.vue'
import ViewMyCampaigns from '@/views/view-my-campaigns.vue'
import ViewConfigure from '@/views/view-configure.vue'


const routes = [
 {
  name: 'view-analyze',
  path: '/dashboard',
  component: ViewAnalyze
 },
 {
  name: 'view-my-campaigns',
  path: '/campaigns',
  component: ViewMyCampaigns
 },
 {
  name: 'view-configure',
  path: '/configure',
  component: ViewConfigure
 }
]

export default createRouter({
 history: createWebHistory(),
 routes
})