import { BaseConf, BaseRequest, BaseResponse } from '../../base';

export interface ReqGetStatus extends BaseRequest {

}

export interface ResGetStatus extends BaseResponse {
    remainedExpTimes: number,
    formalResult?: {
        rightNum: number,
        addPoints: number
    }
}

export const conf: BaseConf = {

};