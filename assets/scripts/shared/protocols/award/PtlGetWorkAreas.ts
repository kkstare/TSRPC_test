import { BaseRequest, BaseResponse, BaseConf } from '../base'

export interface ReqGetWorkAreas extends BaseRequest {

}

export interface ResGetWorkAreas extends BaseResponse {
    workAreas: {
        city: string,
        areas: string[]
    }[];
}

export const conf: BaseConf = {

};