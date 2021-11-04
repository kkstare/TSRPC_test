import { BaseRequest, BaseResponse, BaseConf } from '../base';

// 同时更新省榜和世界榜
export interface ReqUpdateRank extends BaseRequest {
    rankId: string,
    // 若为true，则更新总榜的同时更新地区榜
    // province?: boolean,
    score: number
}

export interface ResUpdateRank extends BaseResponse {

}

export const conf: BaseConf = {

};