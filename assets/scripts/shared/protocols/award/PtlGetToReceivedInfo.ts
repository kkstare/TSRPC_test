import { BaseRequest, BaseResponse, BaseConf } from '../base'

/**
 * 获取待领取奖励的信息
 */
export interface ReqGetToReceivedInfo extends BaseRequest {

}

export interface ResGetToReceivedInfo extends BaseResponse {
    // 待开宝箱
    luckyBoxIds: string[],
    // 待领取实物
    myAwardIds: string[]
}

export const conf: BaseConf = {

};