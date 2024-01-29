import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(),
    routes: [{
        path: "/login",
        component: () => import("@/views/login/index.vue")
    },
        {
            path: "/main",
            component: () => import("@/layouts/index.vue"),
            redirect: "/main/dashbord",
            children: [
                {
             path: "dashbord",
            component: () => import("@/views/main/dashbord/index.vue"),
                },
                  {
             path: "user",
            component: () => import("@/views/main/user/index.vue"),
                  }
              ]
        }
    ]
})

export default router