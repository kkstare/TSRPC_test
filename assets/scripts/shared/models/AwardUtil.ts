export class AwardUtil {

    static poolId = {
        rankAward: 'RankAward',
        dailyDraw: 'DrawDaily',
        prefixActivity: 'DrawActivity_',
        prefixQunzhanPicture: 'QP_',
        prefixCustom: 'Custom_'
    }

    static getActivityPoolId(activityId: string) {
        return this.poolId.prefixActivity + activityId;
    }

    static getActivityIdByPoolId(poolId: string): string | undefined {
        if (!poolId.startsWith(this.poolId.prefixActivity)) {
            return undefined;
        }
        return poolId.substr(this.poolId.prefixActivity.length);
    }

    static getDrawPoolId(drawTicket: DrawTicket) {
        if (drawTicket.type === 'activity') {
            return this.getActivityPoolId(drawTicket.activityId);
        }
        else {
            return this.poolId.dailyDraw;
        }
    }

    static getQunzhanPicturePoolId(pictureId: string) {
        return this.poolId.prefixQunzhanPicture + pictureId;
    }

    static getCustomPoolId(dbPoolId: string) {
        return this.poolId.prefixCustom + dbPoolId;
    }

    static isDrawPoolId(poolId: string) {
        return poolId.startsWith('Draw')
    }

}

export interface DrawTicketDaily {
    type: 'daily'
}
export interface DrawTicketActivity {
    type: 'activity',
    activityId: string,
    roundId: string
}
export type DrawTicket = DrawTicketDaily | DrawTicketActivity;