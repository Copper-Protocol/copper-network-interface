import Admin from "@/pages/admin/Index.vue"
import AdminDashboard from "@/pages/admin/Dashboard.vue"

export const adminRoutes = {
    path: '/admin', component: Admin, children: [
        { path: 'dashboard', component: AdminDashboard, meta: { requiresAdmin: true }, },
        // { path: 'dashboard', component: AdminDashboard, meta: { requiresAdmin: true }, },
        // { path: 'dashboard', component: AdminDashboard, meta: { requiresAdmin: true }, },
      ]
}

export default adminRoutes
