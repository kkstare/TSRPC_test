import { BaseConf, BaseRequest, BaseResponse } from '../base_room';

export interface ReqSendChat extends BaseRequest {
    content: string
}

export interface ResSendChat extends BaseResponse {

}

export const conf: BaseConf = {

};