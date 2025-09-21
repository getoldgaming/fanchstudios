import { createRouter, createWebHistory } from 'vue-router'

import Home from '../pages/Home.vue'
import About from '../pages/About.vue'
import Contact from '../pages/Contact.vue'
import Services from '../pages/services/Services.vue'
import BoudoirExperience from '../pages/services/BoudoirExperience.vue'
import CouplesBoudoir from '../pages/services/CouplesBoudoir.vue'
import BridalBoudoir from '../pages/services/BridalBoudoir.vue'
import Locations from '../pages/locations/Locations.vue'
import Cincinnati from '../pages/locations/Cincinnati.vue'

const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/about', name: 'about', component: About },
  { path: '/contact', name: 'contact', component: Contact },
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
  history: createWebHistory('/'),
  routes,
  scrollBehavior (to, from, savedPosition) {
    // If there is a saved position (back/forward navigation), animate to it.
    if (savedPosition) {
      if (typeof window !== 'undefined' && 'scrollTo' in window) {
        // Use requestAnimationFrame so the page has painted before animating.
        window.requestAnimationFrame(() => {
          try {
            window.scrollTo({ left: savedPosition.left || 0, top: savedPosition.top || 0, behavior: 'smooth' })
          } catch (e) {
            // Fallback
            window.scrollTo(savedPosition.left || 0, savedPosition.top || 0)
          }
        })
        // Returning false tells the router not to perform its own jump.
        return false
      }
      return savedPosition
    }

    // If navigating to a hash anchor, scroll to the element smoothly.
    if (to.hash) {
      return { el: to.hash, behavior: 'smooth' }
    }

    // Default: scroll to top
    return { top: 0 }
  }
})

// Let the router manage scroll restoration instead of the browser.
if (typeof window !== 'undefined' && 'scrollRestoration' in window.history) {
  try { window.history.scrollRestoration = 'manual' } catch (e) { /* ignore */ }
}

export default router
