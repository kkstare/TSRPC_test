import { uint } from "tsrpc-proto";

export interface MsgUserOp {
    questionIndex: uint,
    answer: uint
}