import { createRouter, createWebHistory } from "vue-router";
import Countries from "../components/Countries.vue"


const router=createRouter({
    history:createWebHistory(import.meta.env.BASE_URL),
    routes:[
        {
            path:"/",
            name:"home",
            component: Countries
        },
        {
            path:"/about",
            name:"about",
            component:About
        }
    ]
})