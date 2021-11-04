import { BaseConf, BaseRequest, BaseResponse } from '../base';
import { CurrentUser } from '../models/CurrentUser';

export interface ReqGetCurrentUser extends BaseRequest {
    from?: string,
    fromUid?: string
}

export interface ResGetCurrentUser extends BaseResponse {
    user: CurrentUser
}

export const conf: BaseConf = {

};