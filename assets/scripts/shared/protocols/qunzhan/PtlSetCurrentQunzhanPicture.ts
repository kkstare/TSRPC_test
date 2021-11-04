import { BaseRequest, BaseResponse, BaseConf } from '../base'

/** 设置群战拼图 */
export interface ReqSetCurrentQunzhanPicture extends BaseRequest {
    picId: string
}

export interface ResSetCurrentQunzhanPicture extends BaseResponse {
    
}

export const conf: BaseConf = {
    
};