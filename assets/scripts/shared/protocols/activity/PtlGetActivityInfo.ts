import { BaseRequest, BaseResponse, BaseConf } from '../base'
import { ActivityConfig } from '../models/ActivityConfig';

export interface ReqGetActivityInfo extends BaseRequest {
    activityId: string
}

export interface ResGetActivityInfo extends BaseResponse {
    // 活动配置信息
    activityConfig: ActivityConfig,

    // 自己的参与状态
    self: {
        /** 剩余参与次数 */
        remainedPlayTimes: number,
        /** 挑战通过的roundId */
        winRoundId?: string,
        /** 抽到的奖品MyAwardID */
        myAwardId?: string
    }
}

export const conf: BaseConf = {

};