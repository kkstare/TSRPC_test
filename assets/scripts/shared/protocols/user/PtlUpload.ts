import { BaseRequest, BaseResponse, BaseConf } from '../base'

export interface ReqUpload extends BaseRequest {
    data: ArrayBuffer | Uint8Array,
    ext: string
}

export interface ResUpload extends BaseResponse {
    /** 文件的绝对地址 */
    url: string
}

export const conf: BaseConf = {

};