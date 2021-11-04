export interface BaseRequest {
    
}

export interface BaseResponse {
    // 刷新本地
    __refresh?: {
        medals?: number,
        points?: number,
        energy?: number
    }
}

export interface BaseConf {
    /**
     * - 为true时，无登录态时也可使用
     */
    allowGuest?: boolean
}