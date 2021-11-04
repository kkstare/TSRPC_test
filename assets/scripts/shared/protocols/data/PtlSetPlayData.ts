import { BaseRequest, BaseResponse, BaseConf } from '../base'
import { PlayData } from '../models/PlayData';

// 一次性全量设置
export interface ReqSetPlayData extends BaseRequest {
    data: PlayData
}

export interface ResSetPlayData extends BaseResponse {
    updateTime: number
}

export const conf: BaseConf = {

};