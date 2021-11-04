import { int, uint } from 'tsrpc-proto';
import { QunzhanUser } from '../models/QunzhanUser';
import { JoinBy } from '../../roomProtocols/room/PtlJoinRoom';
import { BaseConf, BaseRequest, BaseResponse } from '../base';
import { UserInfo } from '../models/UserInfo';

export interface ReqGetMine extends BaseRequest {

}

export interface ResGetMine extends BaseResponse {
    /** 段位（生涯统计） */
    career: {
        medals: uint,
        medals1v1: uint,
        medalsQunzhan: uint,
        rank?: uint,
        rank1v1?: uint,
        rankQunzhan?: uint
    },

    /** 字节范特质奖杯 */
    byteStyles: {
        name: string,
        num: uint
    }[],

    qunzhanUser: QunzhanUser,

    /** 本周表现 */
    thisWeek: {
        medals: int,
        medals1v1: int,
        medalsQunzhan: int,
        rank?: uint,
        rank1v1?: uint,
        rankQunzhan?: uint
    },

    /** 本月表现 */
    thisMonth: {
        medals: int,
        medals1v1: int,
        medalsQunzhan: int,
        rank?: uint,
        rank1v1?: uint,
        rankQunzhan?: uint
    },

    ugc: {
        /** 累计出题 */
        created: uint,
        /** 审核通过 */
        approved: uint
    },

    /** 最近战绩 */
    history1v1: {
        result: 'win' | 'draw' | 'lose',
        selfScore: uint,
        oppScore: uint,
        opponentInfo: UserInfo
    }[],

    historyQunzhan: {
        skinId: string,
        joinBy: JoinBy,
        isWin: boolean,
        endTime: Date
    }[]
}

export const conf: BaseConf = {

};