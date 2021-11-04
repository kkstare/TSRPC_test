const PASS = [19, 41, 3, 152, 32, 67, 39, 1, 0, 42, 254, 19, 423, 56, 32, 92];

export class PickSomeFlower {

    static makeFlower(buf: Uint8Array): Uint8Array {
        let n = 0;
        for (let i = 0; i < buf.length; ++i) {
            buf[i] = buf[i] ^ PASS[n++];
            if (n >= PASS.length) {
                n = 0;
            }
        }
        return buf;
    }

}