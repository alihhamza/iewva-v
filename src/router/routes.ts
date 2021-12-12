import {RouteRecordRaw} from "vue-router";

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        component: () => import('../layouts/MainLayout.vue'),
        children: [
            {
                path: '/',
                name: 'Home',
                component: () => import('../pages/Home.vue')
            },
            {
                path: '/profile',
                name: 'Profile',
                component: () => import('../pages/Profile.vue')
            }
        ]
    },
    {
        path: '/',
        component: () => import('../layouts/BaseLayout.vue'),
        children: [
            {
                path: '/login',
                name: 'Login',
                component: () => import('../pages/auth/Login.vue')
            }
        ]
    }
]

export default routes
