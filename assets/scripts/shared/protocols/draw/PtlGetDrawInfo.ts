import { DrawTicket } from '../../models/AwardUtil';
import { BaseRequest, BaseResponse, BaseConf } from '../base'
import { ActivityConfig } from '../models/ActivityConfig';

export interface ReqGetDrawInfo extends BaseRequest {
    ticket: DrawTicket
}

export interface ResGetDrawInfo extends BaseResponse {
    /** 奖品列表 */
    awards: {
        _id: string,
        type: '实物' | '虚拟' | 'NoAward',
        name: string,
        icon: string
    }[],

    /** 如果req的type为activity，则此项必有值 */
    activityConfig?: ActivityConfig
}

export const conf: BaseConf = {

};