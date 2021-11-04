import { uint } from 'tsrpc-proto';
import { BaseRequest, BaseResponse, BaseConf } from '../base'

export interface ReqGetRankList extends BaseRequest {
    rankId: string,
    // 若为true，则返回地区榜
    // province?: boolean,
    // 如果自己未上榜，又有score，则用score更新再查
    score?: number,
    // 返回TOP N
    topCount: uint,
    // 返回自己上下N名，会和TOP N合并返回
    nearCount: uint
}

export interface ResGetRankList extends BaseResponse {
    list: RankListItem[],
    // 自己的省份名
    province: string,
    self?: {
        rank: uint,
        score: number
    }
}

export const conf: BaseConf = {

};

export interface RankListItem {
    nickName: string,
    avatar: string,
    score: number,
    rank: uint,
    province: string,
    city: string
}