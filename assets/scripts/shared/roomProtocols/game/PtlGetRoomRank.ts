import { BaseConf, BaseRequest, BaseResponse } from '../base_room';
import { GameRankItem } from './server/MsgRoundEnd';

export interface ReqGetRoomRank extends BaseRequest {

}

export interface ResGetRoomRank extends BaseResponse {
    ranks: GameRankItem[]
}

export const conf: BaseConf = {

};

