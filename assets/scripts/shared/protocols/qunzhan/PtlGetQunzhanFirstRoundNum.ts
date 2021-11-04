import { uint } from 'tsrpc-proto';
import { BaseRequest, BaseResponse, BaseConf } from '../base'

export interface ReqGetQunzhanFirstRoundNum extends BaseRequest {

}

export interface ResGetQunzhanFirstRoundNum extends BaseResponse {
    firstRoundNum: uint
}

export const conf: BaseConf = {

};