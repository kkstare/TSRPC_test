import { DrawTicket } from '../../models/AwardUtil';
import { BaseRequest, BaseResponse, BaseConf } from '../base'
import { MyAward } from '../models/MyAward';

/** 进行一次抽奖操作 */
export interface ReqDraw extends BaseRequest {
    ticket: DrawTicket
}

export interface ResDraw extends BaseResponse {
    award: {
        // 奖品信息（与GetDrawInfo一致）
        _id: string,
        name: string,
        icon: string,
        // 领奖用的myAwardId
        myAwardId: string
    } & ({
        type: '实物',
        allowedDeliveryType: ('快递' | '工区自提')[],
    } | { type: '虚拟' | 'NoAward' });
}
``
export const conf: BaseConf = {

};