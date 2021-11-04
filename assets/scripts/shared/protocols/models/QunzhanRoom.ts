import { uint } from "tsrpc-proto";

export interface QunzhanRoom {
    _id: string,

    serverUrl: string,
    /** 房间状态 */
    state: QunzhanRoomState,
    /** 是否公共房间 */
    isPublic: boolean,
    isActive: boolean,
    /** 强制新手题目判定依据 */
    firstRoundNum?: uint,
    /** 活动模式，用于指定题目 */
    activityId?: string,

    /** 房间内成员（第一位是房主） */
    users: QunzhanRoomUser[],

    roomStat: {
        uid: string,
        nickname: string,
        avatar: string,
        winRounds: uint
    }[],

    /** 面对面开黑房间码 */
    code?: string,

    createTime: uint,
    lastActiveTime: uint,
    startMatchTime?: uint,
    startGameTime?: uint
}

export enum QunzhanRoomState {
    '等待加入' = 'Waiting',
    '匹配中' = 'Matching',
    '游戏中' = 'Gaming'
}

export interface QunzhanRoomUser {
    uid: string,
    nickname: string,
    avatar: string,
    skinId: string,
    joinBy: '随机匹配' | '邀请同事' | '面对面开黑',
    isAI?: boolean,
    activity?: {
        activityId: string,
        isFormal: boolean
    }
}