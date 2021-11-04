export interface QuestionBank {
    _id: string,
    /** 题库分类，中文，例如日常、活动 */
    category: string;
    /** 题干 */
    question: string;
    /** 正确答案 */
    rightAnswer: string;
    /** 错误答案 */
    wrongAnswers: string[];
    /** 字节范特质 */
    byteStyle: { [key: string]: number };
    /** 出题人 */
    provider?: {
        _id: string,
        nickname: string
    },
    /** 题目解析 */
    analysis?: string;
    /** 题目解析链接 */
    analysisUrl?: string
    /** 是否启用 */
    isEnabled: boolean,
}