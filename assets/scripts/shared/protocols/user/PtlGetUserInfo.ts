import { BaseRequest, BaseResponse, BaseConf } from '../base'
import { UserGender } from '../models/UserInfo';

export interface ReqGetUserInfo extends BaseRequest {
    uid: string
}

export interface ResGetUserInfo extends BaseResponse {
    uid: string,
    nickname: string,
    avatar: string,
    gender: UserGender
}

export const conf: BaseConf = {
};