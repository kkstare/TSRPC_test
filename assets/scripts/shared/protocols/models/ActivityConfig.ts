export interface ActivityConfig {
    _id: string,
    /** 是否启用 */
    isEnabled: boolean,
    /** 活动名称 */
    name: string,
    /** 首页的Banner图地址 */
    homeBanner?: string,
    /** 活动首页的标题图 */
    titleImage: string,
    /** 活动首页的详情图 */
    descImage: string,
    /** 开始时间 */
    startTime: number,
    /** 结束时间 */
    endTime: number,
    /** 每个用户最多参与几次 */
    maxPlayTimesPerUser: number,
    /** 是否启用字节范特质显示 */
    showByteStyle: boolean,
    /** 攻略地址 */
    tacticUrl?: string,

    /** 是群战模式 */
    qunzhan?: {
        /** 对几道题给多少积分 */
        awards: { [rightNum: number]: number }
    },

    // 以下字段不能通过前端修改
    // 参与人数
    joinedUserNum: number
}