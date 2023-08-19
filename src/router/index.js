import {createRouter, createWebHashHistory} from 'vue-router'
import Home from "@/pages/Home.vue"
import Token from "@/pages/Token.vue"
import Docs from "@/pages/docs/Index.vue"
import DocsHome from "@/pages/docs/Home.vue"
import DocsPage from "@/pages/docs/Page.vue"
import Airdrop from "@/pages/Airdrop.vue"
import JoinTheMovement from "@/pages/JoinTheMovement.vue"
import ThankYou from "@/pages/ThankYou.vue"
import Construction001 from "@/components/construction/001.vue"
import GettingStarted from '@/pages/docs/GettingStarted.vue';

import About from "@/pages/About.vue"
import Admin from "@/pages/admin/Index.vue"
import AdminDashboard from "@/pages/admin/Dashboard.vue"
// import Ecosystem from "@/pages/Ecosystem.vue"

// 2. Define some routes
// Each route should map to a component.
// We'll talk about nested routes later.
const routes = [
  { path: '/', component: Home },
  { path: '/construction', component: Construction001 },
  { path: '/token', component: Token },
  { path: '/docs', component: Docs, 
    children: [{
    path: 'home', component: DocsHome
  }, {
    path: 'home/:id', component: DocsPage
  }, {
    path: 'getting-started', component: GettingStarted

  }] 
  },
  { path: '/airdrop', component: Airdrop },
  { path: '/join', component: JoinTheMovement },
  { path: '/thank-you', component: ThankYou },
  // { path: '/ecosystem', component: Ecosystem },
  { path: '/about', component: About },
  { path: '/admin', component: Admin, children: [
    { path: 'dashboard', component: AdminDashboard, meta: { requiresAdmin: true }, },
    // { path: 'dashboard', component: AdminDashboard, meta: { requiresAdmin: true }, },
    // { path: 'dashboard', component: AdminDashboard, meta: { requiresAdmin: true }, },
  ] },
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
