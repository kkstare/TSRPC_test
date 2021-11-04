import { BaseRequest, BaseResponse, BaseConf } from '../base_room'

export interface ReqAuth extends BaseRequest {
    adminToken: string
}

export interface ResAuth extends BaseResponse {
    
}

export const conf: BaseConf = {
    
};