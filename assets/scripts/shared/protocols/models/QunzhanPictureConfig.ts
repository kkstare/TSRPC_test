import { uint } from "tsrpc-proto";

export interface QunzhanPictureConfig {
    _id: string,
    name: string,
    url: string,
    col: uint,
    row: uint,
}