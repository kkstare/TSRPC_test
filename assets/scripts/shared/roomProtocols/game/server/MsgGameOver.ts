import { int, uint } from "tsrpc-proto";

export interface MsgGameOver {
    rightNum: uint,
    totalQuestion: uint,
    isWin: boolean,
    /** 掉落的群战碎片 */
    dropedPicPieces: QunzhanPicturePiece[],
    medals?: {
        change: int,
        after: uint,
        qunzhanChange: int,
        qunzhanAfter: uint
    },
    points: {
        change: int,
        after: uint
    }
}

export interface QunzhanPicturePiece {
    _id: string,
    name: string,
    url: string,
    col: uint,
    row: uint,
    index: uint
}