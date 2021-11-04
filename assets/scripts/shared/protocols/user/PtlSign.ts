import { uint } from 'tsrpc-proto';
import { BaseConf, BaseRequest, BaseResponse } from '../base';

export interface ReqSign extends BaseRequest {
    url: string
}

export interface ResSign extends BaseResponse {
    appId: string,
    nonceStr: string,
    timestamp: uint,
    signature: string
}

export const conf: BaseConf = {
    allowGuest: true
};