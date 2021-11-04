import { BaseRequest, BaseResponse, BaseConf } from '../base'
import { QuizQuestion } from '../models/QuizQuestion';
import { QuizRound } from '../models/QuizRound';

export interface ReqStartRound extends BaseRequest {
    type: DailyRoundType,
}

export interface ResStartRound extends BaseResponse {
    // 本局的RoundID
    _id: string,
    // 题目数据
    questions: QuizQuestion[],
    // 对手信息
    opponent: QuizRound['opponent'],
    /** 问题组合标识，Finish时透传 */
    questionGroupId: string,    
}

export const conf: BaseConf = {

};

export type DailyRoundType = 'practise' | 'match';