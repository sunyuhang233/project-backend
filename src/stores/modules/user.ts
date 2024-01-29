import router from "@/router"
import { defineStore } from "pinia"
import {ref,reactive} from "vue"

export const useUserStore = defineStore("useUserStore", () => {
    let userInfo = reactive({
        userId: 102131,
        username: "admin",
        nickname: "管理员",
        avatar: "https://p.qqan.com/up/2021-1/16097287631656400.jpg",
        slogan:"hello word"
    })

    const isLogin = ref(false)

    const token=ref("")

    // login
    async function userLogin() {
        console.log("login")
     }

    // quite
    async function userQuite() {
        ElMessageBox.confirm("确定退出登录吗？", "退出登录", {
            confirmButtonText: "确定退出",
            cancelButtonText: "取消",
            type: "warning",
        }).then(() => {
            ElNotification.success({
                title: "退出成功",
            })
            cleanUser()
        }).catch(() => { 
            ElNotification.info({
                title: "取消退出",
            })
        })
    }

    // Clean
    function cleanUser() {
        userInfo = {
            username: "",
            nickname: "",
            avatar: "",
            userId: 0,
            slogan:''
        }
        token.value = ""
        isLogin.value = false
        router.replace("/login")
    }

    return {
        userInfo,
        isLogin,
        token,
        userLogin,
        userQuite
    }

})