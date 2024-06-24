import { createMemoryHistory, createRouter } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'layout',
        component: () => import('./layouts/Sidebar.vue'),
        children: [
            {
                path: '',
                name: 'dashboard',
                component: () => import('./views/Dashboard.vue'),
            },
            {
                path: 'niche',
                name: 'niche',
                component: () => import('./views/Niche.vue'),
            },
            {
                path: 'article',
                name: 'article',
                component: () => import('./views/Article.vue'),
            },
        ]
    },
]

const router = createRouter({
    history: createMemoryHistory(),
    routes,
})

export {router, routes}
