import { BaseRequest, BaseResponse, BaseConf } from '../base'
import { QuizQuestion } from '../models/QuizQuestion';
import { QuizRound } from '../models/QuizRound';

export interface ReqStartActivityRound extends BaseRequest {
    /** 指定ActivityRoundID 一般情况下不用 只有在例如误退出 希望不消耗次数重来的情况下可用 */
    _id?: string;

    activityId: string;
}

export interface ResStartActivityRound extends BaseResponse {
    // 本局的RoundID
    _id: string,
    // 题目数据
    questions: QuizQuestion[],
    // 对手信息
    opponent: QuizRound['opponent']
}

export const conf: BaseConf = {

};