import { BaseRequest, BaseResponse, BaseConf } from '../base'
import { ResLogin } from './ResLogin';

export interface ReqLoginDev extends BaseRequest {
    loginKey: string,
    from?: string,
    fromUid?: string
}

export type ResLoginDev = ResLogin;

export const conf: BaseConf = {
    allowGuest: true
};