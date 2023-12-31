// 接口统一管理
import mockRequests from "@/api/mockRequest";
import requests from "@/api/request";

export const reqCategoryList = () => {
    return requests({
        url: 'product/getBaseCategoryList',
        method: "GET",
    })
}

export const reqBannerList = () => {
    return mockRequests({
        url: '/banner',
        method: 'GET',
    })
}

export const reqFloorList = () => {
    return mockRequests({
        url: '/floor',
        method: 'GET',
    })
}

export const reqSearchInfo = (params) => {
    return requests({
        url: '/list',
        method: 'POST',
        data: params,
    })
}
