import { int, uint } from "tsrpc-proto";
import { QunzhanPicturePiece } from "../../roomProtocols/game/server/MsgGameOver";
import { JoinBy } from "../../roomProtocols/room/PtlJoinRoom";

export interface QunzhanRoundHistory {
    _id: string,

    roundId: string,
    uid: string,
    nickname: string,
    avatar: string,
    skinId: string,
    joinBy: JoinBy,

    operations: {
        answer: uint,
        usedTime: uint,
        /** 在队伍中的顺序，0 代表最前面 */
        queueIndex: uint,
        isRight: boolean
    }[],
    isWin: boolean,

    dropedPicPieces: QunzhanPicturePiece[],
    medals?: {
        change: int,
        after: uint
    },

    startTime: Date,
    endTime: Date
}