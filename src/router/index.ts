import {createRouter, createWebHistory} from 'vue-router'

import {store} from "../store";

import routes from "./routes";

const router = createRouter({
    history: createWebHistory(),
    routes,
})

router.beforeEach((to, from, next) => {
    const isAuthenticated = store.getters['auth/authenticated']

    if (isAuthenticated) {
        if (to.name === 'Login') {
            return next({name: 'Home'})
        }
        return next()
    }

    if (to.name === 'Login') {
        return next()
    }

    return next({name: 'Login'})
})

export default router
