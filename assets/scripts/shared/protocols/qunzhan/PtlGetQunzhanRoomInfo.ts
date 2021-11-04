import { QunzhanRoom, QunzhanRoomUser } from '../models/QunzhanRoom';
import { BaseConf, BaseRequest, BaseResponse } from '../base';

/**
 * 获取面对面开黑的房间信息
 */
export type ReqGetQunzhanRoomInfo = BaseRequest & ({
    roomId: string
} | {
    /** 面对面开黑码 */
    code: string
});

export interface ResGetQunzhanRoomInfo extends BaseResponse {
    room?: QunzhanRoom
}

export const conf: BaseConf = {

};