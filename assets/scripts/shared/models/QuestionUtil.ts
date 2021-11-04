export class QuestionUtil {

    static categoryDaily = '日常';
    static getActivityCategory(activityId: string) {
        return '活动' + activityId;
    }

    static getActivityId(category: string) {
        if (!category.startsWith('活动')) {
            return undefined;
        }
        return category.substr(2);
    }

}