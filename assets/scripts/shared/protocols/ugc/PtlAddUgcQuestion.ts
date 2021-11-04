import { BaseRequest, BaseResponse, BaseConf } from '../base'

export interface ReqAddUgcQuestion extends BaseRequest {
    question: string,
    rightAnswer: string,
    wrongAnswers: string[],
    /**
     * 例如 { 踏实肯干: 1, 勇于创新: 1 }
     */
    byteStyle: { [key: string]: number }
}

export interface ResAddUgcQuestion extends BaseResponse {

}

export const conf: BaseConf = {

};