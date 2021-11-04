import { BaseRequest, BaseResponse, BaseConf } from '../base'
import { MyAwardReal, RealAwardAddress, MyAward } from '../models/MyAward';

export interface ReqSubmitAddr extends BaseRequest {
    myAwardId: string,
    address: RealAwardAddress
}

export interface ResSubmitAddr extends BaseResponse {
    newMyAward: MyAward
}

export const conf: BaseConf = {

};