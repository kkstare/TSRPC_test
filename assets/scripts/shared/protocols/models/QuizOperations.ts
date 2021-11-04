export interface QuizOperationsItem {
    /** 选择了第几个选项 从0开始 */
    answer: number;
    /** 答题所用的时间 */
    usedTime: number;
    /** 是否答对 */
    isRight: boolean;
    /** 得分 */
    score: {
        // 回答正确得分
        right: number,
        // 速度得分
        speed: number
    }
}

/** null 代表本题没有作答 */
export type QuizOperations = (QuizOperationsItem | null)[];