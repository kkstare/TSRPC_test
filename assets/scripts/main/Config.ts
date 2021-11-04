import 'k8w-super-object';

export const DefaultSystemConfig = {
    version: 1015,

    // #region 环境配置

    // ===== Prod =====
    // gameUrl: 'https://cdn.bytequiz.ixald.com/byte-quiz/html/index.html',
    // server: 'https://bytequiz.ixald.com/byte-quiz/api/',
    // roomManagerServer: 'https://bytequiz.ixald.com/byte-quiz/room-manager/',
    // oss_host: 'https://cdn.bytequiz.ixald.com/byte-quiz/remote/',
    // appId: 'cli_a085283a2a74100b',

    // ===== Test =====
    // gameUrl: 'https://cdn.bytequiz.ixald.com/byte-quiz/test/index.html',
    // server: 'https://bytequiz.ixald.com/byte-quiz/test/api/',
    // roomManagerServer: 'https://bytequiz.ixald.com/byte-quiz/test/room-manager/',
    // oss_host: 'https://cdn.bytequiz.ixald.com/byte-quiz/remote/',
    // appId: 'cli_a085283a2a74100b',

    // ===== Local =====
    gameUrl: `http://${location.hostname}:7456`,
    server: `http://${location.hostname}:3001/`,
    roomManagerServer: `http://${location.hostname}:3100`,
    // oss_host: 'https://cdn.bytequiz.ixald.com/byte-quiz/remote/',
    oss_host: 'https://cdn.kingworks.cn/byte-quiz/remote/',
    appId: 'cli_a085283a2a74100b',

    // ===== KingWorks Test =====
    // gameUrl: 'https://cdn.bytequiz.ixald.com/byte-quiz/test-kw/index.html',
    // roomManagerServer: 'https://bytequiz.ixald.com/byte-quiz/test/room-manager/',
    // server: 'https://bytequiz.ixald.com/byte-quiz/test-kw/api/',
    // oss_host: 'https://cdn.bytequiz.ixald.com/byte-quiz/remote/',
    // appId: 'cli_9f42e552bfae900d',

    // #endregion    

    apiTimeout: 5000,
}

export const Config: typeof DefaultSystemConfig = Object.merge({}, DefaultSystemConfig);

function getSearchQuery(): { [key: string]: string } {
    let obj: { [name: string]: string } = {};
    let str = window.location.search.slice(1);
    if (str) {
        let options = str.split('&');
        for (let i = 0; i < options.length; ++i) {
            let arr = options[i].split('=');
            obj[arr[0]] = decodeURIComponent(arr[1]);
        }
    }
    return obj;
}
let query = getSearchQuery();
if (query.server) {
    Config.server = query.server;
}