import PageHome from '@/components/pages/Home'
import PageThreadShow from '@/components/pages/ThreadShow'
import PageNotFound from '@/components/pages/NotFound'
//import * as VueRouter from 'vue-router'
import { createRouter, createWebHistory } from 'vue-router'
import sourceData from "@/data.json"

const routes = [
    {
        path: '/',
        name: 'Home',
        component: PageHome
    },
    {
        path: '/thread/:id',
        name: 'ThreadShow',
        component: PageThreadShow,
        props: true,
        beforeEnter (to, from, next) {
            // check if thread exists
            const threadExists = sourceData.threads.find(thread => thread.id === to.params.id)
            //if exists continue
            // if doesn't exist redirect to not found
            if(threadExists) {
                return next()
            } else {
                // to not change the url so the user can review the wrongly entered url
                next({
                    name: 'NotFound',
                    params: { pathMatch: to.path.substring(1).split('/') },
                    query: to.query,
                    hash: to.hash
                })
            }
        }
    },
    { 
        path: '/:pathMatch(.*)*', 
        name: 'NotFound', 
        component: PageNotFound 
    }
]

export default createRouter({
    history: createWebHistory(),
    routes
})