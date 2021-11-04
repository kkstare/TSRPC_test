export interface UgcQuestion {
    _id: string;
    /** 题干 */
    question: string;
    /** 正确答案 */
    rightAnswer: string;
    /** 错误答案 */
    wrongAnswers: string[];
    /** 字节范特质 */
    byteStyle: { [key: string]: number };

    /** 审核结果 */
    approveResult?: ({ time: number } & (
        { isPassed: true } | { isPassed: false, reason: string })
    ),

    create: {
        time: number,
        uid: string,
        nickname: string
    }
}