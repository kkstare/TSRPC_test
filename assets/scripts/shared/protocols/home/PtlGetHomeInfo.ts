import { uint } from 'tsrpc-proto';
import { BaseRequest, BaseResponse, BaseConf } from '../base'

/** 
 * 获取首页需要的小红点等信息
 * 一次游戏周期获取一次即可
 */
export interface ReqGetHomeInfo extends BaseRequest {

}

export interface ResGetHomeInfo extends BaseResponse {
    /** 小红点 */
    dots: {
        /** 用户出题（红点） */
        ugc: boolean,
        /** 奖品（带数字红点） */
        award: uint
    },

    /** 自动开宝箱（每开启一个，dots.award -1） */
    luckyBoxIds: string[],

    /** 活动Banner */
    activity?: {
        activityId: string,
        banner: string
    }
}

export const conf: BaseConf = {

};