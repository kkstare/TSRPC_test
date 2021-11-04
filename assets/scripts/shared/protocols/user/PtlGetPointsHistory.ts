import { uint } from 'tsrpc-proto';
import { BaseRequest, BaseResponse, BaseConf } from '../base'

export interface ReqGetPointsHistory extends BaseRequest {
    // 从1开始
    page: uint,
    pageSize: uint
}

export interface ResGetPointsHistory extends BaseResponse {
    list: {
        createTime: number,
        change: number,
        reason: string,
        after: number,
    }[]
}

export const conf: BaseConf = {
    
};