import { uint } from "tsrpc-proto";

export interface MsgRoundEnd {
    roundRanks: GameRankItem[],
    roomRanks?: GameRankItem[],
}

export interface GameRankItem {
    uid: string,
    nickname: string,
    avatar: string,
    score: number,
    // 从 1 开始，可以重复
    rank: uint,
    /** 用户是否已经离开房间 */
    isExited?: boolean
}