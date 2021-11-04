import { uint } from "tsrpc-proto";
import { UserGender } from "./UserInfo";

export interface CurrentUser {
    _id: string;
    nickname: string;
    /** 小号头像 72x72 */
    avatar: string;
    /** 中号头像 240x240 */
    avatarMiddle: string;
    /** 大号头像 640x640 */
    avatarBig: string;
    gender: UserGender,
    /** 工号 */
    jobNo: string,
    /** 地区 */
    country: string,
    province: string,
    city: string,

    from?: string,
    fromUid?: string,

    /** 积分 */
    points: number,
    /** 段位奖章数量 */
    medals: number,
    /** 字节范特质称号 */
    byteStyle: {
        [key: string]: number
    },
    /** 体力 */
    energy: number,
    /** 拉新人数 */
    invitedNewUser?: uint,

    createTime: number,
}