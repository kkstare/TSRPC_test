import { uint } from 'tsrpc-proto';
import { BaseConf, BaseRequest, BaseResponse } from './base_rm';

/**
 * 客户端直连，开始匹配
 */
export interface ReqStartMatch extends BaseRequest {
    firstRoundNum?: uint,
    activityId?: string
}

export interface ResStartMatch extends BaseResponse {
    serverUrl: string,
    roomId: string
}

export const conf: BaseConf = {

};