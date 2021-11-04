import { QuizOperation } from "./QuizOperation";
import { UserInfo } from "./UserInfo";

export interface QuizRoundSelf {
    operations: QuizOperation[],
    score: number,
    /** 战斗结果 胜利/失败/平局 */
    result: 'win' | 'lose' | 'draw',
    /** 字节范特质得分 */
    byteStyleScore: { [key: string]: number }
    // 奖章数（段位）
    medals: number,
}

export interface QuizRound {
    /** 答题人（左侧） */
    selfInfo: UserInfo & {
        /** 保护不能同城匹配 */
        city?: string,
        /** 保护测试账号不被匹配 */
        isDev?: boolean
    },

    /** 自己的操作和结果，为空则说明尚未完成 */
    self?: QuizRoundSelf

    // 对手的信息，创建时即生成
    opponent: {
        userInfo: UserInfo,
        operations: QuizOperation[],
        score: number,
        byteStyleScore: { [key: string]: number },
        /** 对手对局的记录ID 如果为空 说明这是一个AI */
        roundId?: string
    }

    /** 该对局当前是否可以开放被匹配（根据self的表现来判定，目的是过滤劣质对局），最终能否匹配还要结合matchedNum一起看 */
    matchable: boolean;
    /** 已被匹配的次数 */
    matchedNum: number;
    // 随机值
    random: number;

    createTime: number;
    finishTime?: number;
}