import { uint } from 'tsrpc-proto';
import { BaseRequest, BaseResponse, BaseConf } from '../base'

export interface ReqConsumePoints extends BaseRequest {
    points: uint,
    /** 消费用途 */
    reason: string
}

export interface ResConsumePoints extends BaseResponse {

}

export const conf: BaseConf = {
    
};