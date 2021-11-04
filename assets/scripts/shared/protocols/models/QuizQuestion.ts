/** 局内的问题（已经生成好的） */
export interface QuizQuestion {
    // 数据库存储的
    _id: string;
    /** options对应题库的索引，>=0为错误答案索引，-1为正确答案 */
    questionBankIndices: number[];

    // 经过解析出来的
    category: string;
    question: string;
    options: string[];
    rightAnswerIndex: number;
    // 字节范特质分数
    byteStyle: { [key: string]: number };
    // 由XXX提供
    provider?: string;
    /** 题目解析 */
    analysis?: string;
    /** 题目解析链接 */
    analysisUrl?: string
}