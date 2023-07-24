import {createRouter, createWebHashHistory} from 'vue-router'
import Home from "@/pages/Home.vue"
// import Docs from "@/views/Docs.vue"
// import About from "@/views/About.vue"
// import Ecosystem from "@/views/Ecosystem.vue"

// 2. Define some routes
// Each route should map to a component.
// We'll talk about nested routes later.
const routes = [
  { path: '/', component: Home },
  // { path: '/docs', component: Docs },
  // { path: '/ecosystem', component: Ecosystem },
  // { path: '/about', component: About },
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
export const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHashHistory(),
  routes, // short for `routes: routes`
})

export default router
