import { uint } from 'tsrpc-proto';
import { BaseRequest, BaseResponse, BaseConf } from '../base'

export interface ReqGetMyMistakes extends BaseRequest {
    /** 从1开始 */
    page: uint,
    pageSize: uint
}

export interface ResGetMyMistakes extends BaseResponse {
    data: {
        question: string,
        options: string[],
        /** 打对勾的选项 */
        rightIndex: uint,
        /** 打红叉的选项 */
        wrongIndex: uint,
        /** 题目解析 */
        analysis?: string,
        /** 题目解析链接 */
        analysisUrl?: string
    }[],
    total: uint
}

export const conf: BaseConf = {

};