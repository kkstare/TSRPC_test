// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import {ApiReturn, HttpClient, TsrpcError,WsClient} from "tsrpc-browser"
import { serviceProto } from "../shared/protocols/serviceProto";
import { Config } from "./Config";
const {ccclass, property} = cc._decorator;

@ccclass
export default class Main extends cc.Component {


    // LIFE-CYCLE CALLBACKS:
    private _client = new HttpClient(serviceProto,{
        server:Config.server,
        timeout:Config.apiTimeout,
        logger:CC_DEBUG ? console : undefined
    })

    onLoad () {
        this.apiSend("rank/GetRankList", {
            rankId: "MedalWeek20211025~20211031",
            topCount: 100,
            nearCount: 0
        })
    }

    start () {

    }

    async apiSend(apiName:any,realReq:any){
        let ret = await this._client.callApi(apiName, realReq);
        if (ret.isSucc) {
            console.log("成功")
            // this._preProcessRes(ret.res as BaseResponse);
            console.log(ret)
        }
        else {
            console.log("失败")
            console.log(ret)
        }
    }

    // update (dt) {}
}
