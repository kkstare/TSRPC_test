import { BaseRequest, BaseResponse, BaseConf } from '../base'
import { QuizRound, QuizRoundSelf } from '../models/QuizRound';

export interface ReqFinishRound extends BaseRequest {
    // 本局的roundID
    _id: string,
    self: QuizRoundSelf,
    /** 对局所有题目的数量 */
    questionNum: number,
    questionGroupId: string
}

export interface ResFinishRound extends BaseResponse {
    // 积分变化
    pointsChange: number,
    // 奖章变化
    medalsChange: number,
    // 获得的字节范特质称号
    byteStyleChange: { name: string, amount: number }[]
}

export const conf: BaseConf = {

};