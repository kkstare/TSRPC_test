import { uint } from "tsrpc-proto";

export interface QunzhanUser {
    /** 同 uid */
    _id: string,

    currentSkinId: string,

    /** 解锁的拼图 */
    pictures: {
        [pictureId: string]: {
            // index = col + row * COL
            // index: 已收集数量
            [index: number]: uint
        }
    },
    /** 正在收集的拼图 ID */
    currentPictureId?: string,
    /** 已经集齐的拼图 ID */
    // completePictureIds: string[],
    /** 已经领取过奖励的拼图 ID */
    awardedPictureIds: string[]
}