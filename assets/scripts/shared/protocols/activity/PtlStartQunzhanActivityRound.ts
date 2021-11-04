import { BaseRequest, BaseResponse, BaseConf } from '../base'

export interface ReqStartQunzhanActivityRound extends BaseRequest {
    activityId: string;
}

export interface ResStartQunzhanActivityRound extends BaseResponse {
    /** 剩余参与次数 */
    remainedPlayTimes: number,
}

export const conf: BaseConf = {
    
};