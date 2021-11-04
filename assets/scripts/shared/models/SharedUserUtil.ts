import { GameConfig } from '../protocols/models/GameConfig';
export class SharedUserUtil {

    /** 
     * 根据medals获取段位信息
     * 如果返回里有star，代表是精益求精
     */
    static getLevelInfo(medals: number, levelsConfig: GameConfig['levels']): GameConfig['levels'][number] & { star?: number } {
        // 高过最高 显示为精益求精
        let maxLevelConf = levelsConfig.last();
        if (medals > maxLevelConf.maxMedals) {
            let star = Math.ceil((medals - maxLevelConf.maxMedals) / 5);
            return {
                id: 'max',
                name: '精益求精 ★' + star,
                star: star,
                minMedals: maxLevelConf.maxMedals + (star - 1) * 5 + 1,
                maxMedals: maxLevelConf.maxMedals + star * 5
            };
        }

        // 低过最低，保护性显示为第一个
        if (medals < levelsConfig[0].minMedals) {
            return levelsConfig[0];
        }

        // 在配置的段位中
        for (let i = 0; i < levelsConfig.length; ++i) {
            if (medals >= levelsConfig[i].minMedals && medals <= levelsConfig[i].maxMedals) {
                return levelsConfig[i];
            }
        }

        // 异常情况保护 应该不会存在
        return {
            id: 'unknown',
            name: '未知段位',
            minMedals: medals,
            maxMedals: medals
        }
    }

}