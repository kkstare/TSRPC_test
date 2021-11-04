import { uint } from 'tsrpc-proto';
import { BaseConf, BaseRequest, BaseResponse } from '../base_room';
import { JoinBy } from '../room/PtlJoinRoom';

export interface ReqCreateRoom extends BaseRequest {
    /** 客户端透传来的 */
    sso: string,

    joinBy: JoinBy,

    /** 面对面开黑房间码 */
    code?: string,

    /** 指定使用新手题目 */
    firstRoundNum?: uint,

    /** 活动模式，指定题目 */
    activityId?: string,
}

export interface ResCreateRoom extends BaseResponse {
    roomId: string
}

export const conf: BaseConf = {

};