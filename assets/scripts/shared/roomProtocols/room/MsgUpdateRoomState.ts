import { QunzhanRoomState } from "../../protocols/models/QunzhanRoom";

export type MsgUpdateRoomState = {
    /**
     * 切换为匹配中：从切换时刻开始读秒
     * 切换为开始游戏：从开始时刻开始倒计时 5 秒
     */
    state: QunzhanRoomState
}