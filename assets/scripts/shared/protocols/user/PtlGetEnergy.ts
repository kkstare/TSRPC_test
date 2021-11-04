import { uint } from 'tsbuffer-schema';
import { BaseConf, BaseRequest, BaseResponse } from '../base';

/** 返还体力 */
export interface ReqGetEnergy extends BaseRequest {
    amount: uint,
    reason: string
}

export interface ResGetEnergy extends BaseResponse {

}

export const conf: BaseConf = {

};