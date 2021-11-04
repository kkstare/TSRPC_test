import { QunzhanPictureConfig } from '../models/QunzhanPictureConfig';
import { BaseRequest, BaseResponse, BaseConf } from '../base'

export interface ReqGetQunzhanPictureConfigs extends BaseRequest {

}

export interface ResGetQunzhanPictureConfigs extends BaseResponse {
    confs: (QunzhanPictureConfig & {
        awards: {
            name: string,
            icon: string
        }[]
    })[]
}