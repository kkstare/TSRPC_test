import { uint } from 'tsrpc-proto';
import { BaseRequest, BaseResponse, BaseConf } from '../base'

export interface ReqGetDailyEnergy extends BaseRequest {

}

export interface ResGetDailyEnergy extends BaseResponse {
    gotFreeEnergy: uint,
    nextGetTime: number
}

export const conf: BaseConf = {

};