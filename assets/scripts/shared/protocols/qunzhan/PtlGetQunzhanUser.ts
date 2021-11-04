import { QunzhanUser } from '../models/QunzhanUser';
import { BaseRequest, BaseResponse, BaseConf } from '../base'

export interface ReqGetQunzhanUser extends BaseRequest {

}

export interface ResGetQunzhanUser extends BaseResponse {
    qunzhanUser: QunzhanUser,
    isFirstTime?: boolean
}

export const conf: BaseConf = {

};