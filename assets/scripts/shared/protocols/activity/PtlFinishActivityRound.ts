import { BaseRequest, BaseResponse, BaseConf } from '../base'
import { QuizRoundSelf } from '../models/QuizRound';

export interface ReqFinishActivityRound extends BaseRequest {
    // 本局的roundID
    _id: string,
    self: QuizRoundSelf,
    /** 对局所有题目的数量 */
    questionNum: number
}

export interface ResFinishActivityRound extends BaseResponse {
    // 积分变化
    pointsChange: number,
    // 获得的字节范特质称号奖杯
    byteStyleChange: { name: string, amount: number }[]
}

export const conf: BaseConf = {

};  
