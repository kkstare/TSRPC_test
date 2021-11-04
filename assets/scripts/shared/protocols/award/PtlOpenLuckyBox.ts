import { BaseConf, BaseRequest, BaseResponse } from '../base';
import { MyAwardFromCustom, MyAwardFromRank } from '../models/MyAward';

/** 打开宝箱 查看宝箱里的奖品 */
export interface ReqOpenLuckyBox extends BaseRequest {
    /** LuckyBox的MyAward ID */
    luckyBoxId: string
}

// 奖品能否领取应该根据 poolItem的currentAmount和rankAward条件双重判定
export interface ResOpenLuckyBox extends BaseResponse {
    title: string,
    desc: string,
    from: LuckyBoxFrom,
    poolItems: {
        _id: string,
        name: string,
        icon: string,
        /** 有此值则被锁住无法选择 */
        lockedMsg?: string
    }[];
}

export type LuckyBoxFrom = MyAwardFromRank | MyAwardFromCustom;

export const conf: BaseConf = {

};