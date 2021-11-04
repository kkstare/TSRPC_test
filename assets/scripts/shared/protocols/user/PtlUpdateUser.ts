import { BaseRequest, BaseResponse, BaseConf } from '../base'
import { CurrentUser } from '../models/CurrentUser';

export interface ReqUpdateUser extends BaseRequest {
    nickname?: string,
    avatar?: string
}

export interface ResUpdateUser extends BaseResponse {
    user: CurrentUser;
}

export const conf: BaseConf = {

};