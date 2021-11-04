import { uint } from 'tsrpc-proto';
import { BaseRequest, BaseResponse, BaseConf } from '../base'

export interface ReqGetTodayRoundNum extends BaseRequest {
    
}

export interface ResGetTodayRoundNum extends BaseResponse {
    '1v1': uint,
    qunzhan: uint,
    total: uint,
    date: string,
    exceedTodayMax: boolean
}

export const conf: BaseConf = {
    
};