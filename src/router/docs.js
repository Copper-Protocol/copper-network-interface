import Docs from "@/pages/docs/Index.vue"
import DocsHome from "@/pages/docs/Home.vue"
import DocsPage from "@/pages/docs/Page.vue"
import DocsDAOPlus from "@/pages/docs/DAOPlus.vue"
import GettingStarted from '@/pages/docs/GettingStarted.vue';

export const docsRoutes =   {
    path: '/docs', component: Docs, 
        children: [{
            path: 'home', component: DocsHome
        }, {
            path: 'home/:id', component: DocsPage
        }, {
            path: 'getting-started', component: GettingStarted
        }, {
            path: 'daoplus', component: DocsDAOPlus
        }] 
}

export default docsRoutes