import { BaseConf, BaseRequest, BaseResponse } from '../base';
import { MyAward } from '../models/MyAward';

/** 选择宝箱的奖品 */
export interface ReqSelectLuckyBoxAward extends BaseRequest {
    /** LuckyBox对应的 MyAward ID */
    luckyBoxId: string,
    /** 选择的奖品的 AwardPoolItem ID */
    poolItemId: string,
}

export interface ResSelectLuckyBoxAward extends BaseResponse {
    award: MyAward
}

export const conf: BaseConf = {

};