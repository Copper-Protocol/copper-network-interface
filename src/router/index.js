import {createRouter, createWebHashHistory} from 'vue-router'
import Home from "@/pages/Home.vue"
import Token from "@/pages/Token.vue"

import Airdrop from "@/pages/Airdrop.vue"
import Construction001 from "@/components/construction/001.vue"

import About from "@/pages/About.vue"

import {docsRoutes} from './docs'
import {extraRoutes} from './extras'
import {adminRoutes} from './admin'

// import Ecosystem from "@/pages/Ecosystem.vue"

// 2. Define some routes
// Each route should map to a component.
// We'll talk about nested routes later.
const routes = [
  { path: '/', component: Home },
  { path: '/construction', component: Construction001 },
  { path: '/token', component: Token },
  { path: '/airdrop', component: Airdrop },
  { path: '/about', component: About },
  docsRoutes,
  ...extraRoutes,
  adminRoutes,
  // { path: '/ecosystem', component: Ecosystem },
]
// Example function to verify Ethereum addresses using the signature
async function verifySignature() {
  // Your implementation here (use web3, ethers.js, or any other library to verify the signature)
  // Return true if the signature is valid, otherwise false
  return true // TODO: MUST CHANGE THIS!!!
}

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
export const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHashHistory(),
  routes, // short for `routes: routes`
})
// Navigation guard to check if the user has admin access
router.beforeEach(async (to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAdmin)) {
    // Check if the user has admin access
    const hasAdminAccess = await verifySignature();
    if (hasAdminAccess) {
      next(); // Proceed to the admin route
    } else {
      // Redirect to another page (e.g., login page)
      next('/login');
    }
  } else {
    next(); // For non-admin routes, proceed normally
  }
});
export default router
