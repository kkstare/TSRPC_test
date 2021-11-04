import { ResOpenLuckyBox } from '../award/PtlOpenLuckyBox';
import { BaseConf, BaseRequest } from '../base';

/** 领取群战拼图奖励 */
export interface ReqGetQunzhanPictureAward extends BaseRequest {
    pictureId: string
}

export interface ResGetQunzhanPictureAward {
    luckyBoxId: string
};

export const conf: BaseConf = {

};