import { createRouter, createWebHistory } from 'vue-router'

import Home from '../pages/Home.vue'
import Services from '../pages/services/Services.vue'
import BoudoirExperience from '../pages/services/BoudoirExperience.vue'
import CouplesBoudoir from '../pages/services/CouplesBoudoir.vue'
import BridalBoudoir from '../pages/services/BridalBoudoir.vue'
import Locations from '../pages/locations/Locations.vue'
import Cincinnati from '../pages/locations/Cincinnati.vue'

const routes = [
  { path: '/', name: 'home', component: Home },
  {
    path: '/services',
    name: 'services',
    component: Services,
    children: [
  { path: 'boudoir-experience', name: 'services-boudoir-experience', component: BoudoirExperience },
  { path: 'couples-boudoir', name: 'services-couples-boudoir', component: CouplesBoudoir },
  { path: 'bridal-boudoir', name: 'services-bridal-boudoir', component: BridalBoudoir },
    ],
  },
  { path: '/locations', name: 'locations', component: Locations },
  { path: '/locations/cincinnati', name: 'cincinnati', component: Cincinnati },
]

const router = createRouter({
  history: createWebHistory('/fanchstudios/'),
  routes,
  scrollBehavior () {
    return { top: 0 }
  }
})

export default router
