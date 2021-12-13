// 该文件专门用于创建整个应用的路由器
import Vue from 'vue'
import VueRouter from "vue-router";
//使用插件
Vue.use(VueRouter)
//引入路由组件
import Home from "@/pages/Home";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import Search from "@/pages/Search";

//重写VueRoute原型对象上的push和replace方法
let originPush = VueRouter.prototype.push
let originReplace = VueRouter.prototype.replace

VueRouter.prototype.push = function (location, resolve, reject){
    if(resolve && reject){
        return originPush.call(this, location,resolve, reject)
    }else {
        return originPush.call(this, location, ()=>{}, ()=>{})
    }
}

VueRouter.prototype.replace = function (location, resolve, reject){
    if(resolve && reject){
        return originReplace.call(this, location,resolve, reject)
    }else {
        return originReplace.call(this, location, ()=>{}, ()=>{})
    }
}

//配置路由
export default new VueRouter({
    routes:[
        {
            path:'/home',
            component:Home,
            meta:{isShow:true}
        },
        {
            path:'/login',
            component:Login,
            meta:{isShow:false}
        },
        {
            path:'/register',
            component:Register,
            meta:{isShow:false}
        },
        {
            name:'search',
            //加问号可以使params参数可有可无，不影响path的展示
            path:'/search/:keyword?',
            component:Search,
            meta:{isShow:true}
        },
        {
            path:'*',
            redirect:'/home'
        },
    ]
})