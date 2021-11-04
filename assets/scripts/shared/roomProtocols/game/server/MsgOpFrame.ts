import { uint } from "tsrpc-proto";

/**
 * 答题过程中帧同步
 */
export interface MsgOpFrame {
    questionIndex: uint,
    userStateChanges: {
        [uid: string]: {
            /** 玩家选择的赛道 0-3 */
            answer: uint,
            /** 在本题中操作的行动顺序（先来后到） */
            actionIndex: uint
        }
    },

    index: uint
}