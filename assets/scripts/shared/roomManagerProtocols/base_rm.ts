export interface BaseRequest {
    sso: string;
}

export interface BaseResponse {
    // 刷新本地
    __refresh?: {
        sso?: string,
        medals?: number,
        points?: number,
        energy?: number
    }
}

export interface BaseConf {

}