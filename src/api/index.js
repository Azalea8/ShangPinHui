// 接口统一管理
import requests from "@/api/request";

export const reqCategoryList = () => {
    return requests({
        url: 'product/getBaseCategoryList',
        method: "GET",
    })
}