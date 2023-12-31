import { createRouter, createWebHistory } from "vue-router";
import Countries from "../components/Countries.vue"
import About from "../components/About.vue"
import Country from "../components/Country.vue"


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
        },
        {
            path:"/country/:code",
            name:"country",
            component:Country
        }
    ]
})


export default router