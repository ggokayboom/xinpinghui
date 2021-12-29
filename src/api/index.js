//对所有API接口进行统一管理
import requests from "@/api/request";
import mockRequests from '@/api/mockAjax'
//三级联动接口
export const reqCategoryList = ()=>{
    //发送请求，返回结果为Promise对象
    return requests({
        url:'/product/getBaseCategoryList',
        method:'get'
    })
}

//获取Banner
export const reqBannerList = ()=> mockRequests.get('/banner')