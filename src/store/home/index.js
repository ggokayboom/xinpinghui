import {reqCategoryList, reqBannerList} from "@/api";
//home模块的小仓库
const state = {
    categoryList:[],
    bannerList:[],
}

const mutations = {
    CATEGORYLIST(state, value){
        state.categoryList = value
    },
    GETBANNERLIST(state, value){
        state.bannerList = value
    }

}

const actions = {
    //通过API里面的接口函数调用，向服务器发送请求，获取服务器的数据
    async categoryList(context){
        let result = await reqCategoryList();
        if(result.code === 200){
            context.commit("CATEGORYLIST", result.data)
        }
    },
    async getBannerList(context){
        let result = await reqBannerList();
        if(result.code === 200){
            context.commit("GETBANNERLIST", result.data)
        }
    }
}

const getters = {

}

export default {
    namespaced:true,
    state,
    actions,
    mutations,
    getters,
}