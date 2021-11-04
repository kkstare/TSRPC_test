import { BaseConf, BaseRequest, BaseResponse } from './base_rm';

export type EnterRoomOptions = {
    type: '邀请同事',
    code?: undefined,
} | {
    type: '面对面开黑',
    code: string
}

/** 客户端直连，创建房间 */
export interface ReqEnterRoom extends BaseRequest {
    options: EnterRoomOptions
}

export interface ResEnterRoom extends BaseResponse {
    serverUrl: string,
    roomId: string
}

export const conf: BaseConf = {

};