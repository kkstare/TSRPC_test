import { BaseRequest, BaseResponse, BaseConf } from './base'
import { GameConfig } from './models/GameConfig';

export interface ReqGetGameConfig extends BaseRequest {
    version?: number;
}

export interface ResGetGameConfig extends BaseResponse {
    version: number
    /** config返回为空，代表version没变，所以不需要再返回（节省流量） */
    config?: GameConfig,
}

export const conf: BaseConf = {
    allowGuest: true
};