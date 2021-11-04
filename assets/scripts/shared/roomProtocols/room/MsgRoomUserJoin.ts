import { QunzhanRoomUser } from "../../protocols/models/QunzhanRoom";

export interface MsgRoomUserJoin {
    roomId: string,
    user: QunzhanRoomUser
}