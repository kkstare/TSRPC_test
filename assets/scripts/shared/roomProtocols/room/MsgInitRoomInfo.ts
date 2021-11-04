import { QunzhanRoomState, QunzhanRoomUser } from "../../protocols/models/QunzhanRoom";

export interface MsgInitRoomInfo {
    state: QunzhanRoomState,
    users: QunzhanRoomUser[],
}