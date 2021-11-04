import { uint } from "tsrpc-proto";

/** 游戏配置（存储在后台） */
export interface GameConfig {
    /** 积分数值统一配置 */
    points: {
        /** 新人初始积分 */
        default: uint,
        round: {
            activity: {
                win: uint,
                lose: uint,
                draw: uint
            },
            '1v1': {
                win: uint,
                lose: uint,
                draw: uint
            },
            qunzhan: {
                win: uint,
                lose: uint
            }
        },
        /** 抽奖消耗积分 */
        dailyDraw: uint,
        /** 出题通过奖励积分 */
        ugcAward: uint,
        /** 兑换体力消耗积分 */
        buyEnergy: {
            /** 兑换一次消耗的积分价格 */
            points: uint,
            /** 兑换一次获得的体力数量 */
            energy: uint,

        },
        /** 每日免费体力 */
        freeEnergy: {
            /** 体力恢复时间 (0~23)[] */
            hours: uint[],
            /** 每次免费体力的恢复数量 */
            energy: uint
        },
        /** 拉新有礼奖励 */
        inviteNewUser: uint
    },

    /** 奖章数值统一配置 */
    medals: {
        /** 新人初始奖章 */
        default: uint
    },
    /** 段位配置 */
    levels: {
        /** 段位ID（用于拿图标啊之类的） */
        id: string,
        name: string,
        minMedals: uint,
        maxMedals: uint
    }[]

    round: {
        questionScore: {
            /** 正确得分 */
            right: uint,
            /** 速度得分 */
            speed: uint
        },
        /** 单局时长（毫秒） */
        roundTime: uint,
        /** 一局最多颁发几个字节范奖杯 */
        // maxByteStyle: uint,
        // 一局最多能被匹配几次
        maxMatchedTimes: {
            activity: uint,
            match: uint,
            practise: uint
        },

        /** AI的难度 */
        aiDifficulty: {
            activity: number,
            match: number,
            practise: number
        }
    },

    activity: {

    },

    /** 抽奖模块 */
    draw: {
        /** 日常抽奖每日最多几次 */
        maxDailyLimit: uint
    },

    /** 允许进入的雇员类型 为undefined则代表所有人 */
    limitEmployeeType?: string[],

    /** 排名奖励领取条件 */
    rankAward: {
        /** 排名小于等于多少可获得周排名奖励 */
        maxWeekRank: uint,
        /** 排名小于等于多少可获得月排名奖励 */
        maxMonthRank: uint,
    },

    texts: {
        ugcRules: string,
        dailyDrawRules: string
    },

    /** 游戏运营结束提醒 */
    endAlert?: {
        /** 进入游戏时的提醒 */
        entry: {
            /** 此时间后开始出现 */
            endTime: uint,
            title: string,
            content: string,
            btnText: string
        },
        /** 日常模式关闭提醒 */
        daily: {
            /** 1v1 模式，此时间后开始出现 */
            endTime1v1: uint,
            /** 群战模式，此时间后开始出现 */
            endTimeQunzhan: uint,
            title: string,
            content: string,
            btnText: string
        },
        /** 排行榜定格在某一刻 */
        rankEnd?: {
            endTime: uint,
            weekText: string,
            monthText: string,
        }
    },

    /** 群战模式 */
    // qunzhan: {
    //     // pictures: {
    //     //     id: string,

    //     // }[]
    // }
}