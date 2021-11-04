export default class MathUtil {

    static limit(src: number, min: number, max: number) {
        return Math.min(max, Math.max(min, src));
    }

    static randomFloat(min: number, max: number) {
        return Math.random() * (max - min) + min;
    }

    static randomInt(min: number, max: number) {
        return this.randomFloat(min, max + 1) | 0;
    }
}