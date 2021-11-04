import { uint } from 'tsrpc-proto';
import { BaseConf, BaseRequest, BaseResponse } from '../base';

export interface ReqGetQunzhanIndexInfo extends BaseRequest {

}

export interface ResGetQunzhanIndexInfo extends BaseResponse {
    list: {
        richText: string,
        time: Date
    }[],
    onlineUserNum: uint,
    roomNum: uint
}

export const conf: BaseConf = {

};