import { uint } from "tsrpc-proto";
import { QunzhanRoomUser } from "../../../protocols/models/QunzhanRoom";

/**
 * 比赛开始
 */
export interface MsgRoundStart {
    roungId: string;
    /** 参与的用户 */
    users: QunzhanRoomUser[],
    /** 一共几道题 */
    totalQuestion: uint
}