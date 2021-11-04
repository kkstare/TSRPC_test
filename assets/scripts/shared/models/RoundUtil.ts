import { GameConfig } from '../protocols/models/GameConfig';
import { QuizOperation } from '../protocols/models/QuizOperation';
import MathUtil from './MathUtil';
import { QuizQuestion } from '../protocols/models/QuizQuestion';
import { QuizRoundSelf } from '../protocols/models/QuizRound';
import { SharedConfig } from './SharedConfig';
export class RoundUtil {

    /** 使用前请先确保设置了此值 */
    static gameConfig: GameConfig;

    /**
     * 计算单题得分
     * @param operation 
     * @param isDouble 最后一题分数双倍
     */
    static getQuestionScore(isRight: boolean | undefined, usedTime: number | undefined, isDouble?: boolean): { right: number, speed: number } {
        if (!isRight || usedTime === undefined) {
            return {
                right: 0,
                speed: 0
            }
        }

        let right = this.gameConfig.round.questionScore.right;
        let speed = MathUtil.limit((1 - usedTime / this.gameConfig.round.roundTime) * this.gameConfig.round.questionScore.speed | 0, 0, this.gameConfig.round.questionScore.speed);
        return {
            right: right * (isDouble ? 2 : 1),
            speed: speed * (isDouble ? 2 : 1)
        }
    }

    /** 
     * 计算单局的字节范得分（绘制雷达图、颁发奖杯）
     * 计算出来的每项字节范得分都是归一化的（0~1）
     */
    static getByteStyleScore(questions: QuizQuestion[], operations: QuizOperation[]) {
        if (operations.length !== questions.length) {
            throw new Error('Operations长度错误');
        }

        // 全对返回满分
        if (operations.every(v => v && v.isRight)) {
            return Object.fromEntries(SharedConfig.byteStyles.map(v1 => [v1, 1]));
        }

        // 求最高分
        let maxScore: { [key: string]: number } = {};
        for (let v of questions) {
            for (let byteStyleKey in v.byteStyle) {
                if (!maxScore[byteStyleKey]) {
                    maxScore[byteStyleKey] = 0;
                }
                maxScore[byteStyleKey] += v.byteStyle[byteStyleKey];
            }
        }

        let score: { [key: string]: number } = {};
        for (let i = 0; i < operations.length; ++i) {
            if (operations[i]?.isRight) {
                let question = questions[i];
                for (let byteStyleKey in question.byteStyle) {
                    if (!score[byteStyleKey]) {
                        score[byteStyleKey] = 0;
                    }
                    score[byteStyleKey] += question.byteStyle[byteStyleKey];
                }
            }
        }

        let output: { [key: string]: number } = {};
        for (let key in maxScore) {
            output[key] = (score[key] || 0) / maxScore[key];
        }
        return output;
    }

    /** 计算单局最高分 */
    static getRoundMaxScore(questionNum: number) {
        return (this.gameConfig.round.questionScore.right + this.gameConfig.round.questionScore.speed) * (questionNum + 1);
    }

    static getRoundResult(selfScore: number, oppScore: number): QuizRoundSelf['result'] {
        return selfScore > oppScore ? 'win' : selfScore < oppScore ? 'lose' : 'draw';
    }

}