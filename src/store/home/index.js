import {reqCategoryList} from "@/api";
//home模块的小仓库
const state = {
    categoryList:[],
}

const mutations = {
    CATEGORYLIST(state, value){
        state.categoryList = value
    }
}

const actions = {
    //通过API里面的接口函数调用，向服务器发送请求，获取服务器的数据
    async categoryList(context){
        let result = await reqCategoryList();
        if(result.code === 200){
            context.commit("CATEGORYLIST", result.data)
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