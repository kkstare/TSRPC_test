import { uint } from 'tsrpc-proto';
import { BaseRequest, BaseResponse, BaseConf } from '../base'

/**
 * 领取UGC出题奖励
 * 本次游戏生命周期，首次进入UGC界面调用
 */
export interface ReqGetUgcAwards extends BaseRequest {

}

export interface ResGetUgcAwards extends BaseResponse {
    /** 奖励了多少积分 */
    pointsChange: uint
}

export const conf: BaseConf = {

};