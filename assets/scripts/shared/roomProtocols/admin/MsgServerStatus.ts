import { uint } from "tsrpc-proto";

/** 
 * 由 RoomServer 定时同步来的匹配中的房间信息
 * RoomManager 主动连接 RoomServer，然后 RoomServer 定时下发消息
 */
export interface MsgServerStatus {
    matchingRooms: {
        roomId: string,
        userNum: uint,
        startMatchTime: uint,
        activityId?: string
    }[],
    connNum: uint,
    roomNum: uint
}