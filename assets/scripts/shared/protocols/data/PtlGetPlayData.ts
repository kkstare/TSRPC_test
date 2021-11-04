import { BaseRequest, BaseResponse, BaseConf } from '../base'
import { PlayData } from '../models/PlayData';

export interface ReqGetPlayData extends BaseRequest {

}

export interface ResGetPlayData extends BaseResponse {
    data: Partial<PlayData>,
}

export const conf: BaseConf = {

};