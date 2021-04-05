//import * as VueRouter from 'vue-router'
import Page from '@/components/pages' // Created index.js in pages just declare new page components in there
                                      // will be able to access by Page.ComponentName. Seemed like a good idea
import { createRouter, createWebHistory } from 'vue-router'
import sourceData from "@/data.json"

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Page.Home
    },
    {
        path: '/forum/:id',
        name: 'Forum',
        component: Page.Forum,
        props: true
    },
    {
        path: '/thread/:id',
        name: 'ThreadShow',
        component: Page.ThreadShow,
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
        component: Page.NotFound 
    }
]

export default createRouter({
    history: createWebHistory(),
    routes
})