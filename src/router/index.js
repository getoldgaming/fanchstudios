import { createRouter, createWebHashHistory } from 'vue-router'

import Home from '../pages/Home.vue'
import Services from '../pages/services/Services.vue'
import BrandPhotography from '../pages/services/BrandPhotography.vue'
import ProductPhotography from '../pages/services/ProductPhotography.vue'
import PortraitsHeadshots from '../pages/services/PortraitsHeadshots.vue'
import Locations from '../pages/locations/Locations.vue'
import Cincinnati from '../pages/locations/Cincinnati.vue'

const routes = [
  { path: '/', name: 'home', component: Home },
  {
    path: '/services',
    name: 'services',
    component: Services,
    children: [
      { path: 'brand-photography', name: 'services-brand', component: BrandPhotography },
      { path: 'product-photography', name: 'services-product', component: ProductPhotography },
      { path: 'portraits-headshots', name: 'services-portraits', component: PortraitsHeadshots },
    ],
  },
  { path: '/locations', name: 'locations', component: Locations },
  { path: '/locations/cincinnati', name: 'cincinnati', component: Cincinnati },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior () {
    return { top: 0 }
  }
})

export default router
