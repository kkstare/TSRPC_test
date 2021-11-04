export class RankIdUtil {

    // 段位榜 - 总榜
    static medal = 'Medal';
    static medal1v1 = 'Medal_1v1';
    static medalQunzhan = 'Medal_群战';

    private static _prefixMedalWeek = 'MedalWeek';
    private static _prefixMedalMonth = 'MedalMonth';

    /**
     * 段位榜 - 周榜
     * @param time 当周内的任一时间
     */
    static medalWeek(type: '1v1' | '群战' | '总榜', time: number) {
        let week = this.getWeek(time);
        return this._prefixMedalWeek + week.start.format('yyyyMMdd') + '~' + week.end.format('yyyyMMdd') + (type === '总榜' ? '' : `:${type}`);
    }

    /** 段位榜 - 月榜 */
    static medalMonth(type: '1v1' | '群战' | '总榜', time: number) {
        let month = this.getMonth(time);
        return this._prefixMedalMonth + month.start.format('yyyyMM') + (type === '总榜' ? '' : `:${type}`);
    }

    /**
     * 获取一个时间戳所属周的周一和周日的Date
     * @param time 
     */
    static getWeek(time: number): {
        start: Date,
        end: Date
    } {
        let date = new Date(time);

        let dayOfWeek = date.getDay();
        if (dayOfWeek === 0) {
            dayOfWeek = 6;
        }
        else {
            dayOfWeek -= 1;
        }

        let weekStartDate = new Date(date.getFullYear(), date.getMonth(), date.getDate() - dayOfWeek);
        let weekEndDate = new Date(date.getFullYear(), date.getMonth(), date.getDate() + 6 - dayOfWeek, 23, 59, 59);
        return {
            start: weekStartDate,
            end: weekEndDate
        }
    }

    /**
     * 获取一个时间戳所属月的第一天和最后一天的Date
     * @param time 
     */
    static getMonth(time: number): {
        start: Date,
        end: Date
    } {
        let date = new Date(time);
        let monthStartDate = new Date(date.getFullYear(), date.getMonth(), 1);
        let monthEndDate = new Date(date.getFullYear(), date.getMonth() + 1, 0, 23, 59, 59);
        return {
            start: monthStartDate,
            end: monthEndDate
        }
    }
}