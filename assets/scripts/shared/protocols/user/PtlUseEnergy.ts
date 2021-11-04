import { uint } from 'tsrpc-proto';
import { BaseConf, BaseRequest, BaseResponse } from '../base';

export interface ReqUseEnergy extends BaseRequest {
    useAmount: uint,
    reason: string
}

export interface ResUseEnergy extends BaseResponse {
    newEnergy: uint
}

export const conf: BaseConf = {

};