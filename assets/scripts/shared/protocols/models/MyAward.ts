import { uint } from "tsrpc-proto";

export interface BaseMyAward {
    _id: string,

    // 获奖人信息
    uid: string,
    nickname: string,
    jobNo: string,

    /** 奖品名称 */
    name: string,
    /** 奖品图标 */
    icon: string,
    /** 奖品来源 */
    from: MyAwardFromDaily | MyAwardFromActivity | MyAwardFromRank | MyAwardFromCustom | MyAwardFromQunzhan,

    status: '待领取' | '待发出' | '已发出',

    /** 中奖时间 */
    createTime: number,

    meta?: any
}

export interface MyAwardFromDaily {
    type: '日常抽奖',
    desc: string
}

export interface MyAwardFromActivity {
    type: '活动',
    activityId: string,
    desc: string
}

/** 排名奖励 */
export interface MyAwardFromRank {
    type: '周排名' | '月排名',
    desc: string,
    period: {
        /** yyyy-MM-dd */
        startDate: string,
        endDate: string
    },
    /** 自己的排名 */
    rank: uint
}

/** 自定义发放 */
export interface MyAwardFromCustom {
    type: 'Custom',
    poolId: string,
    desc: string,
    /** 领奖凭据 */
    keys: string[]
}

export interface MyAwardFromQunzhan {
    type: '群战拼图',
    poolId: string,
    desc: string
}

export interface BaseRealAwardAddress {
    /** 登记时间 */
    time: number,
    name: string,
    tel: string,
}

export interface RealAwardAddressExpress extends BaseRealAwardAddress {
    type: '快递',
    province: string,
    city: string,
    area: string,
    addr: string
}

export interface RealAwardAddressZiti extends BaseRealAwardAddress {
    type: '工区自提',
    city: string,
    /** 工区 */
    area: string
}

export type RealAwardAddress = RealAwardAddressExpress | RealAwardAddressZiti;

/** 实物奖品 */
export interface MyAwardReal extends BaseMyAward {
    type: '实物',

    /** 登记的收货地址 */
    address?: RealAwardAddress,

    /** 物流信息 */
    allowedDeliveryType: ('快递' | '工区自提')[],
    delivery?: {
        time: number,
        /** 快递公司 */
        expressCompany: string,
        /** 快递单号 */
        expressNo: string,
    }
}

/** 虚拟奖品 */
export interface MyAwardVirtual extends BaseMyAward {
    type: '虚拟',

    /** 发货的卡密 */
    delivery?: {
        time: number,
        content: string,
    }
}

/** 待开宝箱 */
export interface MyAwardLuckyBox extends BaseMyAward {
    type: 'LuckyBox',
    selectedPoolItemId?: string,
    /** 宝箱标题 */
    title: string,
    /** 宝箱描述 */
    desc: string
}

export type MyAward = MyAwardReal | MyAwardVirtual | MyAwardLuckyBox;