import { uint } from 'tsrpc-proto';
import { BaseRequest, BaseResponse, BaseConf } from '../base'

export interface ReqRedeemStorePoints extends BaseRequest {
    amount: uint
}

export interface ResRedeemStorePoints extends BaseResponse {
    
}

export const conf: BaseConf = {
    
};