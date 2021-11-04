import { BaseRequest, BaseResponse, BaseConf } from '../base'
import { ResLogin } from './ResLogin';

export interface ReqLoginFeishu extends BaseRequest {
    code: string,
    from?: string,
    fromUid?: string
}
export type ResLoginFeishu = ResLogin;

export const conf: BaseConf = {
    allowGuest: true
};