import { uint } from "tsrpc-proto";

/** 
 * 时间到 公布结果
 */
export interface MsgOpResult {
    questionIndex: uint,
    /** 全量 */
    userStates: {
        [uid: string]: {
            /** 玩家选择的赛道 0-3 */
            answer: uint,
            /** 在本题中操作的行动顺序（先来后到） */
            actionIndex: uint
        }
    },
    rightAnswer: uint,
    rands: number[],

    index: uint
}