import { BaseConf, BaseRequest, BaseResponse } from '../base';

export interface ReqFinishQunzhanActivityRound extends BaseRequest {
    qunzhanRoundHistoryId: string,
    activityId: string
}

export interface ResFinishQunzhanActivityRound extends BaseResponse {
    isWin: boolean,
    /** 剩余参与次数 */
    remainedPlayTimes: number,
}

export const conf: BaseConf = {

};