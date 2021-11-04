import { BaseConf, BaseRequest, BaseResponse } from '../base_room';

export interface ReqJoinRoom extends BaseRequest {
    roomId: string,
    joinBy: JoinBy,
    sso: string,
    activity?: {
        activityId: string,
        isFormal: boolean
    }
}

export interface ResJoinRoom extends BaseResponse {

}

export type JoinBy = '随机匹配' | '邀请同事' | '面对面开黑';

export const conf: BaseConf = {

};