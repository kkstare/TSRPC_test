import { uint } from 'tsrpc-proto';
import { BaseRequest, BaseResponse, BaseConf } from '../base'

export interface ReqGetUgcQuestions extends BaseRequest {
    // 从1开始
    page: uint,
    pageSize: uint
}

export interface ResGetUgcQuestions extends BaseResponse {
    data: {
        question: string,
        rightAnswer: string,
        wrongAnswers: string[],
        createTime: number,
        status: '审核中' | '不通过' | '已通过',
        /** 审核不通过原因 */
        rejectReason?: string
    }[],
    total: uint
}

export const conf: BaseConf = {

};