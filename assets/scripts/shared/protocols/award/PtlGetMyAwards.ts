import { BaseRequest, BaseResponse, BaseConf } from '../base'
import { MyAward } from '../models/MyAward';

export interface ReqGetMyAwards extends BaseRequest {
    /** 从1开始 */
    page: number,
    pageSize: number,

    /** 给【活动首页】->【查看奖品】预留，只显示本活动奖品 */
    activityId?: string,
}

export interface ResGetMyAwards extends BaseResponse {
    data: MyAward[],
    total: number
}

export const conf: BaseConf = {

};