import { uint } from "tsrpc-proto";

export interface BaseAwardPoolItem {
    _id: string,
    /** 奖池ID */
    poolId: string,

    name: string,
    icon: string,

    // #region 获得方式
    /** 通过抽奖获得 */
    draw?: {
        /** 中奖概率权重 */
        weight: uint
    },
    /** 通过排名奖励获得 */
    rankAward?: {
        /** 周排行排名高于等于此值可领取 */
        week?: uint,
        /** 月排行排名高于等于此值可领取 */
        month?: uint
    },
    /** 直接获得 */
    customSelectable?: {
        /** 可以用于领取的 KEYS，凭 KEY 领取，"*" 代表所有人都可以领取 */
        keys: string[],
        /** 如果无法获得的提示文字 */
        lockedMsg: string,
    }
    // #endregion

    // 库存配置
    /** 当前剩余库存 */
    currentAmount: uint,
    /** 被获得的的奖品数量 */
    gotAmount: uint,

    /** 展示排序（从小到大） */
    sort: number,
}

export interface AwardPoolItemNormal extends BaseAwardPoolItem {
    type: '虚拟' | 'NoAward',
}

export interface AwardPoolItemEntity extends BaseAwardPoolItem {
    type: '实物',
    deliveryType: ('快递' | '工区自提')[]
}

export type AwardPoolItem = AwardPoolItemNormal | AwardPoolItemEntity;