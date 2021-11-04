import { uint } from "tsrpc-proto";

export interface MsgChat {
    messages: {
        sn: uint,
        user: {
            uid: string,
            nickname: string,
            avatar: string
        },
        content: string,
        time: uint
    }[]
}