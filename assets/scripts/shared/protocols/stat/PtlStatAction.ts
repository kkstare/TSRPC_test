import { BaseConf, BaseRequest, BaseResponse } from '../base';

export interface ReqStatAction extends BaseRequest {
    action: string,
    isTodayFirst?: boolean
}

export interface ResStatAction extends BaseResponse {

}

export const conf: BaseConf = {
    allowGuest: true
};