import { ServiceProto } from 'tsrpc-proto';
import { ReqFinishActivityRound, ResFinishActivityRound } from './activity/PtlFinishActivityRound';
import { ReqFinishQunzhanActivityRound, ResFinishQunzhanActivityRound } from './activity/PtlFinishQunzhanActivityRound';
import { ReqGetActivityInfo, ResGetActivityInfo } from './activity/PtlGetActivityInfo';
import { ReqStartActivityRound, ResStartActivityRound } from './activity/PtlStartActivityRound';
import { ReqStartQunzhanActivityRound, ResStartQunzhanActivityRound } from './activity/PtlStartQunzhanActivityRound';
import { ReqGetMyAwards, ResGetMyAwards } from './award/PtlGetMyAwards';
import { ReqGetToReceivedInfo, ResGetToReceivedInfo } from './award/PtlGetToReceivedInfo';
import { ReqGetWorkAreas, ResGetWorkAreas } from './award/PtlGetWorkAreas';
import { ReqOpenLuckyBox, ResOpenLuckyBox } from './award/PtlOpenLuckyBox';
import { ReqSelectLuckyBoxAward, ResSelectLuckyBoxAward } from './award/PtlSelectLuckyBoxAward';
import { ReqSubmitAddr, ResSubmitAddr } from './award/PtlSubmitAddr';
import { ReqFinishRound, ResFinishRound } from './daily/PtlFinishRound';
import { ReqStartRound, ResStartRound } from './daily/PtlStartRound';
import { ReqGetPlayData, ResGetPlayData } from './data/PtlGetPlayData';
import { ReqSetPlayData, ResSetPlayData } from './data/PtlSetPlayData';
import { ReqDraw, ResDraw } from './draw/PtlDraw';
import { ReqGetDrawInfo, ResGetDrawInfo } from './draw/PtlGetDrawInfo';
import { ReqGetStatus, ResGetStatus } from './events/2021-10-24/PtlGetStatus';
import { ReqStartExp, ResStartExp } from './events/2021-10-24/PtlStartExp';
import { ReqGetHomeInfo, ResGetHomeInfo } from './home/PtlGetHomeInfo';
import { ReqGetMyMistakes, ResGetMyMistakes } from './mistake/PtlGetMyMistakes';
import { ReqLoginDev, ResLoginDev } from './platform/PtlLoginDev';
import { ReqLoginFeishu, ResLoginFeishu } from './platform/PtlLoginFeishu';
import { ReqGetGameConfig, ResGetGameConfig } from './PtlGetGameConfig';
import { ReqGetQunzhanFirstRoundNum, ResGetQunzhanFirstRoundNum } from './qunzhan/PtlGetQunzhanFirstRoundNum';
import { ReqGetQunzhanIndexInfo, ResGetQunzhanIndexInfo } from './qunzhan/PtlGetQunzhanIndexInfo';
import { ReqGetQunzhanPictureAward, ResGetQunzhanPictureAward } from './qunzhan/PtlGetQunzhanPictureAward';
import { ReqGetQunzhanPictureConfigs, ResGetQunzhanPictureConfigs } from './qunzhan/PtlGetQunzhanPictureConfigs';
import { ReqGetQunzhanRoomInfo, ResGetQunzhanRoomInfo } from './qunzhan/PtlGetQunzhanRoomInfo';
import { ReqGetQunzhanUser, ResGetQunzhanUser } from './qunzhan/PtlGetQunzhanUser';
import { ReqSelectQunzhanSkin, ResSelectQunzhanSkin } from './qunzhan/PtlSelectQunzhanSkin';
import { ReqSetCurrentQunzhanPicture, ResSetCurrentQunzhanPicture } from './qunzhan/PtlSetCurrentQunzhanPicture';
import { ReqGetRankList, ResGetRankList } from './rank/PtlGetRankList';
import { ReqUpdateRank, ResUpdateRank } from './rank/PtlUpdateRank';
import { ReqStatAction, ResStatAction } from './stat/PtlStatAction';
import { ReqAddUgcQuestion, ResAddUgcQuestion } from './ugc/PtlAddUgcQuestion';
import { ReqGetUgcAwards, ResGetUgcAwards } from './ugc/PtlGetUgcAwards';
import { ReqGetUgcQuestions, ResGetUgcQuestions } from './ugc/PtlGetUgcQuestions';
import { ReqBuyEnergy, ResBuyEnergy } from './user/PtlBuyEnergy';
import { ReqConsumePoints, ResConsumePoints } from './user/PtlConsumePoints';
import { ReqGetCurrentUser, ResGetCurrentUser } from './user/PtlGetCurrentUser';
import { ReqGetDailyEnergy, ResGetDailyEnergy } from './user/PtlGetDailyEnergy';
import { ReqGetEnergy, ResGetEnergy } from './user/PtlGetEnergy';
import { ReqGetMine, ResGetMine } from './user/PtlGetMine';
import { ReqGetPointsHistory, ResGetPointsHistory } from './user/PtlGetPointsHistory';
import { ReqGetTodayRoundNum, ResGetTodayRoundNum } from './user/PtlGetTodayRoundNum';
import { ReqGetUserInfo, ResGetUserInfo } from './user/PtlGetUserInfo';
import { ReqRedeemStorePoints, ResRedeemStorePoints } from './user/PtlRedeemStorePoints';
import { ReqSign, ResSign } from './user/PtlSign';
import { ReqUpdateUser, ResUpdateUser } from './user/PtlUpdateUser';
import { ReqUpload, ResUpload } from './user/PtlUpload';
import { ReqUseEnergy, ResUseEnergy } from './user/PtlUseEnergy';

export interface ServiceType {
    api: {
        "activity/FinishActivityRound": {
            req: ReqFinishActivityRound,
            res: ResFinishActivityRound
        },
        "activity/FinishQunzhanActivityRound": {
            req: ReqFinishQunzhanActivityRound,
            res: ResFinishQunzhanActivityRound
        },
        "activity/GetActivityInfo": {
            req: ReqGetActivityInfo,
            res: ResGetActivityInfo
        },
        "activity/StartActivityRound": {
            req: ReqStartActivityRound,
            res: ResStartActivityRound
        },
        "activity/StartQunzhanActivityRound": {
            req: ReqStartQunzhanActivityRound,
            res: ResStartQunzhanActivityRound
        },
        "award/GetMyAwards": {
            req: ReqGetMyAwards,
            res: ResGetMyAwards
        },
        "award/GetToReceivedInfo": {
            req: ReqGetToReceivedInfo,
            res: ResGetToReceivedInfo
        },
        "award/GetWorkAreas": {
            req: ReqGetWorkAreas,
            res: ResGetWorkAreas
        },
        "award/OpenLuckyBox": {
            req: ReqOpenLuckyBox,
            res: ResOpenLuckyBox
        },
        "award/SelectLuckyBoxAward": {
            req: ReqSelectLuckyBoxAward,
            res: ResSelectLuckyBoxAward
        },
        "award/SubmitAddr": {
            req: ReqSubmitAddr,
            res: ResSubmitAddr
        },
        "daily/FinishRound": {
            req: ReqFinishRound,
            res: ResFinishRound
        },
        "daily/StartRound": {
            req: ReqStartRound,
            res: ResStartRound
        },
        "data/GetPlayData": {
            req: ReqGetPlayData,
            res: ResGetPlayData
        },
        "data/SetPlayData": {
            req: ReqSetPlayData,
            res: ResSetPlayData
        },
        "draw/Draw": {
            req: ReqDraw,
            res: ResDraw
        },
        "draw/GetDrawInfo": {
            req: ReqGetDrawInfo,
            res: ResGetDrawInfo
        },
        "events/2021-10-24/GetStatus": {
            req: ReqGetStatus,
            res: ResGetStatus
        },
        "events/2021-10-24/StartExp": {
            req: ReqStartExp,
            res: ResStartExp
        },
        "home/GetHomeInfo": {
            req: ReqGetHomeInfo,
            res: ResGetHomeInfo
        },
        "mistake/GetMyMistakes": {
            req: ReqGetMyMistakes,
            res: ResGetMyMistakes
        },
        "platform/LoginDev": {
            req: ReqLoginDev,
            res: ResLoginDev
        },
        "platform/LoginFeishu": {
            req: ReqLoginFeishu,
            res: ResLoginFeishu
        },
        "GetGameConfig": {
            req: ReqGetGameConfig,
            res: ResGetGameConfig
        },
        "qunzhan/GetQunzhanFirstRoundNum": {
            req: ReqGetQunzhanFirstRoundNum,
            res: ResGetQunzhanFirstRoundNum
        },
        "qunzhan/GetQunzhanIndexInfo": {
            req: ReqGetQunzhanIndexInfo,
            res: ResGetQunzhanIndexInfo
        },
        "qunzhan/GetQunzhanPictureAward": {
            req: ReqGetQunzhanPictureAward,
            res: ResGetQunzhanPictureAward
        },
        "qunzhan/GetQunzhanPictureConfigs": {
            req: ReqGetQunzhanPictureConfigs,
            res: ResGetQunzhanPictureConfigs
        },
        "qunzhan/GetQunzhanRoomInfo": {
            req: ReqGetQunzhanRoomInfo,
            res: ResGetQunzhanRoomInfo
        },
        "qunzhan/GetQunzhanUser": {
            req: ReqGetQunzhanUser,
            res: ResGetQunzhanUser
        },
        "qunzhan/SelectQunzhanSkin": {
            req: ReqSelectQunzhanSkin,
            res: ResSelectQunzhanSkin
        },
        "qunzhan/SetCurrentQunzhanPicture": {
            req: ReqSetCurrentQunzhanPicture,
            res: ResSetCurrentQunzhanPicture
        },
        "rank/GetRankList": {
            req: ReqGetRankList,
            res: ResGetRankList
        },
        "rank/UpdateRank": {
            req: ReqUpdateRank,
            res: ResUpdateRank
        },
        "stat/StatAction": {
            req: ReqStatAction,
            res: ResStatAction
        },
        "ugc/AddUgcQuestion": {
            req: ReqAddUgcQuestion,
            res: ResAddUgcQuestion
        },
        "ugc/GetUgcAwards": {
            req: ReqGetUgcAwards,
            res: ResGetUgcAwards
        },
        "ugc/GetUgcQuestions": {
            req: ReqGetUgcQuestions,
            res: ResGetUgcQuestions
        },
        "user/BuyEnergy": {
            req: ReqBuyEnergy,
            res: ResBuyEnergy
        },
        "user/ConsumePoints": {
            req: ReqConsumePoints,
            res: ResConsumePoints
        },
        "user/GetCurrentUser": {
            req: ReqGetCurrentUser,
            res: ResGetCurrentUser
        },
        "user/GetDailyEnergy": {
            req: ReqGetDailyEnergy,
            res: ResGetDailyEnergy
        },
        "user/GetEnergy": {
            req: ReqGetEnergy,
            res: ResGetEnergy
        },
        "user/GetMine": {
            req: ReqGetMine,
            res: ResGetMine
        },
        "user/GetPointsHistory": {
            req: ReqGetPointsHistory,
            res: ResGetPointsHistory
        },
        "user/GetTodayRoundNum": {
            req: ReqGetTodayRoundNum,
            res: ResGetTodayRoundNum
        },
        "user/GetUserInfo": {
            req: ReqGetUserInfo,
            res: ResGetUserInfo
        },
        "user/RedeemStorePoints": {
            req: ReqRedeemStorePoints,
            res: ResRedeemStorePoints
        },
        "user/Sign": {
            req: ReqSign,
            res: ResSign
        },
        "user/UpdateUser": {
            req: ReqUpdateUser,
            res: ResUpdateUser
        },
        "user/Upload": {
            req: ReqUpload,
            res: ResUpload
        },
        "user/UseEnergy": {
            req: ReqUseEnergy,
            res: ResUseEnergy
        }
    },
    msg: {

    }
}

export const serviceProto: ServiceProto<ServiceType> = {
    "version": 16,
    "services": [
        {
            "id": 0,
            "name": "activity/FinishActivityRound",
            "type": "api",
            "conf": {}
        },
        {
            "id": 48,
            "name": "activity/FinishQunzhanActivityRound",
            "type": "api",
            "conf": {}
        },
        {
            "id": 1,
            "name": "activity/GetActivityInfo",
            "type": "api",
            "conf": {}
        },
        {
            "id": 2,
            "name": "activity/StartActivityRound",
            "type": "api",
            "conf": {}
        },
        {
            "id": 49,
            "name": "activity/StartQunzhanActivityRound",
            "type": "api",
            "conf": {}
        },
        {
            "id": 3,
            "name": "award/GetMyAwards",
            "type": "api",
            "conf": {}
        },
        {
            "id": 4,
            "name": "award/GetToReceivedInfo",
            "type": "api",
            "conf": {}
        },
        {
            "id": 5,
            "name": "award/GetWorkAreas",
            "type": "api",
            "conf": {}
        },
        {
            "id": 6,
            "name": "award/OpenLuckyBox",
            "type": "api",
            "conf": {}
        },
        {
            "id": 7,
            "name": "award/SelectLuckyBoxAward",
            "type": "api",
            "conf": {}
        },
        {
            "id": 8,
            "name": "award/SubmitAddr",
            "type": "api",
            "conf": {}
        },
        {
            "id": 9,
            "name": "daily/FinishRound",
            "type": "api",
            "conf": {}
        },
        {
            "id": 10,
            "name": "daily/StartRound",
            "type": "api",
            "conf": {}
        },
        {
            "id": 11,
            "name": "data/GetPlayData",
            "type": "api",
            "conf": {}
        },
        {
            "id": 12,
            "name": "data/SetPlayData",
            "type": "api",
            "conf": {}
        },
        {
            "id": 13,
            "name": "draw/Draw",
            "type": "api",
            "conf": {}
        },
        {
            "id": 14,
            "name": "draw/GetDrawInfo",
            "type": "api",
            "conf": {}
        },
        {
            "id": 50,
            "name": "events/2021-10-24/GetStatus",
            "type": "api",
            "conf": {}
        },
        {
            "id": 51,
            "name": "events/2021-10-24/StartExp",
            "type": "api",
            "conf": {}
        },
        {
            "id": 15,
            "name": "home/GetHomeInfo",
            "type": "api",
            "conf": {}
        },
        {
            "id": 16,
            "name": "mistake/GetMyMistakes",
            "type": "api",
            "conf": {}
        },
        {
            "id": 17,
            "name": "platform/LoginDev",
            "type": "api",
            "conf": {
                "allowGuest": true
            }
        },
        {
            "id": 18,
            "name": "platform/LoginFeishu",
            "type": "api",
            "conf": {
                "allowGuest": true
            }
        },
        {
            "id": 19,
            "name": "GetGameConfig",
            "type": "api",
            "conf": {
                "allowGuest": true
            }
        },
        {
            "id": 46,
            "name": "qunzhan/GetQunzhanFirstRoundNum",
            "type": "api",
            "conf": {}
        },
        {
            "id": 20,
            "name": "qunzhan/GetQunzhanIndexInfo",
            "type": "api",
            "conf": {}
        },
        {
            "id": 21,
            "name": "qunzhan/GetQunzhanPictureAward",
            "type": "api",
            "conf": {}
        },
        {
            "id": 22,
            "name": "qunzhan/GetQunzhanPictureConfigs",
            "type": "api"
        },
        {
            "id": 23,
            "name": "qunzhan/GetQunzhanRoomInfo",
            "type": "api",
            "conf": {}
        },
        {
            "id": 24,
            "name": "qunzhan/GetQunzhanUser",
            "type": "api",
            "conf": {}
        },
        {
            "id": 25,
            "name": "qunzhan/SelectQunzhanSkin",
            "type": "api",
            "conf": {}
        },
        {
            "id": 26,
            "name": "qunzhan/SetCurrentQunzhanPicture",
            "type": "api",
            "conf": {}
        },
        {
            "id": 27,
            "name": "rank/GetRankList",
            "type": "api",
            "conf": {}
        },
        {
            "id": 28,
            "name": "rank/UpdateRank",
            "type": "api",
            "conf": {}
        },
        {
            "id": 29,
            "name": "stat/StatAction",
            "type": "api",
            "conf": {
                "allowGuest": true
            }
        },
        {
            "id": 30,
            "name": "ugc/AddUgcQuestion",
            "type": "api",
            "conf": {}
        },
        {
            "id": 31,
            "name": "ugc/GetUgcAwards",
            "type": "api",
            "conf": {}
        },
        {
            "id": 32,
            "name": "ugc/GetUgcQuestions",
            "type": "api",
            "conf": {}
        },
        {
            "id": 33,
            "name": "user/BuyEnergy",
            "type": "api",
            "conf": {}
        },
        {
            "id": 34,
            "name": "user/ConsumePoints",
            "type": "api",
            "conf": {}
        },
        {
            "id": 35,
            "name": "user/GetCurrentUser",
            "type": "api",
            "conf": {}
        },
        {
            "id": 36,
            "name": "user/GetDailyEnergy",
            "type": "api",
            "conf": {}
        },
        {
            "id": 47,
            "name": "user/GetEnergy",
            "type": "api",
            "conf": {}
        },
        {
            "id": 37,
            "name": "user/GetMine",
            "type": "api",
            "conf": {}
        },
        {
            "id": 38,
            "name": "user/GetPointsHistory",
            "type": "api",
            "conf": {}
        },
        {
            "id": 39,
            "name": "user/GetTodayRoundNum",
            "type": "api",
            "conf": {}
        },
        {
            "id": 40,
            "name": "user/GetUserInfo",
            "type": "api",
            "conf": {}
        },
        {
            "id": 41,
            "name": "user/RedeemStorePoints",
            "type": "api",
            "conf": {}
        },
        {
            "id": 42,
            "name": "user/Sign",
            "type": "api",
            "conf": {
                "allowGuest": true
            }
        },
        {
            "id": 43,
            "name": "user/UpdateUser",
            "type": "api",
            "conf": {}
        },
        {
            "id": 44,
            "name": "user/Upload",
            "type": "api",
            "conf": {}
        },
        {
            "id": 45,
            "name": "user/UseEnergy",
            "type": "api",
            "conf": {}
        }
    ],
    "types": {
        "activity/PtlFinishActivityRound/ReqFinishActivityRound": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "base/BaseRequest"
                    }
                }
            ],
            "properties": [
                {
                    "id": 0,
                    "name": "_id",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 1,
                    "name": "self",
                    "type": {
                        "type": "Reference",
                        "target": "models/QuizRound/QuizRoundSelf"
                    }
                },
                {
                    "id": 2,
                    "name": "questionNum",
                    "type": {
                        "type": "Number"
                    }
                }
            ]
        },
        "base/BaseRequest": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "sso",
                    "type": {
                        "type": "String"
                    },
                    "optional": true
                }
            ]
        },
        "models/QuizRound/QuizRoundSelf": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "operations",
                    "type": {
                        "type": "Array",
                        "elementType": {
                            "type": "Reference",
                            "target": "models/QuizOperation/QuizOperation"
                        }
                    }
                },
                {
                    "id": 1,
                    "name": "score",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 2,
                    "name": "result",
                    "type": {
                        "type": "Union",
                        "members": [
                            {
                                "id": 0,
                                "type": {
                                    "type": "Literal",
                                    "literal": "win"
                                }
                            },
                            {
                                "id": 1,
                                "type": {
                                    "type": "Literal",
                                    "literal": "lose"
                                }
                            },
                            {
                                "id": 2,
                                "type": {
                                    "type": "Literal",
                                    "literal": "draw"
                                }
                            }
                        ]
                    }
                },
                {
                    "id": 3,
                    "name": "byteStyleScore",
                    "type": {
                        "type": "Interface",
                        "indexSignature": {
                            "keyType": "String",
                            "type": {
                                "type": "Number"
                            }
                        }
                    }
                },
                {
                    "id": 4,
                    "name": "medals",
                    "type": {
                        "type": "Number"
                    }
                }
            ]
        },
        "models/QuizOperation/QuizOperation": {
            "type": "Union",
            "members": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "models/QuizOperation/QuizOperationItem"
                    }
                },
                {
                    "id": 1,
                    "type": {
                        "type": "Literal",
                        "literal": null
                    }
                }
            ]
        },
        "models/QuizOperation/QuizOperationItem": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "answer",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 1,
                    "name": "usedTime",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 2,
                    "name": "isRight",
                    "type": {
                        "type": "Boolean"
                    }
                },
                {
                    "id": 3,
                    "name": "score",
                    "type": {
                        "type": "Interface",
                        "properties": [
                            {
                                "id": 0,
                                "name": "right",
                                "type": {
                                    "type": "Number"
                                }
                            },
                            {
                                "id": 1,
                                "name": "speed",
                                "type": {
                                    "type": "Number"
                                }
                            }
                        ]
                    }
                }
            ]
        },
        "activity/PtlFinishActivityRound/ResFinishActivityRound": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "base/BaseResponse"
                    }
                }
            ],
            "properties": [
                {
                    "id": 0,
                    "name": "pointsChange",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 1,
                    "name": "byteStyleChange",
                    "type": {
                        "type": "Array",
                        "elementType": {
                            "type": "Interface",
                            "properties": [
                                {
                                    "id": 0,
                                    "name": "name",
                                    "type": {
                                        "type": "String"
                                    }
                                },
                                {
                                    "id": 1,
                                    "name": "amount",
                                    "type": {
                                        "type": "Number"
                                    }
                                }
                            ]
                        }
                    }
                }
            ]
        },
        "base/BaseResponse": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "__refresh",
                    "type": {
                        "type": "Interface",
                        "properties": [
                            {
                                "id": 0,
                                "name": "sso",
                                "type": {
                                    "type": "String"
                                },
                                "optional": true
                            },
                            {
                                "id": 1,
                                "name": "medals",
                                "type": {
                                    "type": "Number"
                                },
                                "optional": true
                            },
                            {
                                "id": 2,
                                "name": "points",
                                "type": {
                                    "type": "Number"
                                },
                                "optional": true
                            },
                            {
                                "id": 3,
                                "name": "energy",
                                "type": {
                                    "type": "Number"
                                },
                                "optional": true
                            }
                        ]
                    },
                    "optional": true
                }
            ]
        },
        "activity/PtlFinishQunzhanActivityRound/ReqFinishQunzhanActivityRound": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "base/BaseRequest"
                    }
                }
            ],
            "properties": [
                {
                    "id": 0,
                    "name": "qunzhanRoundHistoryId",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 1,
                    "name": "activityId",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        },
        "activity/PtlFinishQunzhanActivityRound/ResFinishQunzhanActivityRound": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "base/BaseResponse"
                    }
                }
            ],
            "properties": [
                {
                    "id": 1,
                    "name": "isWin",
                    "type": {
                        "type": "Boolean"
                    }
                },
                {
                    "id": 2,
                    "name": "remainedPlayTimes",
                    "type": {
                        "type": "Number"
                    }
                }
            ]
        },
        "activity/PtlGetActivityInfo/ReqGetActivityInfo": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "base/BaseRequest"
                    }
                }
            ],
            "properties": [
                {
                    "id": 0,
                    "name": "activityId",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        },
        "activity/PtlGetActivityInfo/ResGetActivityInfo": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "base/BaseResponse"
                    }
                }
            ],
            "properties": [
                {
                    "id": 0,
                    "name": "activityConfig",
                    "type": {
                        "type": "Reference",
                        "target": "models/ActivityConfig/ActivityConfig"
                    }
                },
                {
                    "id": 1,
                    "name": "self",
                    "type": {
                        "type": "Interface",
                        "properties": [
                            {
                                "id": 0,
                                "name": "remainedPlayTimes",
                                "type": {
                                    "type": "Number"
                                }
                            },
                            {
                                "id": 1,
                                "name": "winRoundId",
                                "type": {
                                    "type": "String"
                                },
                                "optional": true
                            },
                            {
                                "id": 2,
                                "name": "myAwardId",
                                "type": {
                                    "type": "String"
                                },
                                "optional": true
                            }
                        ]
                    }
                }
            ]
        },
        "models/ActivityConfig/ActivityConfig": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "_id",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 1,
                    "name": "isEnabled",
                    "type": {
                        "type": "Boolean"
                    }
                },
                {
                    "id": 2,
                    "name": "name",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 3,
                    "name": "homeBanner",
                    "type": {
                        "type": "String"
                    },
                    "optional": true
                },
                {
                    "id": 4,
                    "name": "titleImage",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 5,
                    "name": "descImage",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 6,
                    "name": "startTime",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 7,
                    "name": "endTime",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 8,
                    "name": "maxPlayTimesPerUser",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 9,
                    "name": "showByteStyle",
                    "type": {
                        "type": "Boolean"
                    }
                },
                {
                    "id": 10,
                    "name": "tacticUrl",
                    "type": {
                        "type": "String"
                    },
                    "optional": true
                },
                {
                    "id": 13,
                    "name": "qunzhan",
                    "type": {
                        "type": "Interface",
                        "properties": [
                            {
                                "id": 0,
                                "name": "awards",
                                "type": {
                                    "type": "Interface",
                                    "indexSignature": {
                                        "keyType": "Number",
                                        "type": {
                                            "type": "Number"
                                        }
                                    }
                                }
                            }
                        ]
                    },
                    "optional": true
                },
                {
                    "id": 11,
                    "name": "joinedUserNum",
                    "type": {
                        "type": "Number"
                    }
                }
            ]
        },
        "activity/PtlStartActivityRound/ReqStartActivityRound": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "base/BaseRequest"
                    }
                }
            ],
            "properties": [
                {
                    "id": 0,
                    "name": "_id",
                    "type": {
                        "type": "String"
                    },
                    "optional": true
                },
                {
                    "id": 1,
                    "name": "activityId",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        },
        "activity/PtlStartActivityRound/ResStartActivityRound": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "base/BaseResponse"
                    }
                }
            ],
            "properties": [
                {
                    "id": 0,
                    "name": "_id",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 1,
                    "name": "questions",
                    "type": {
                        "type": "Array",
                        "elementType": {
                            "type": "Reference",
                            "target": "models/QuizQuestion/QuizQuestion"
                        }
                    }
                },
                {
                    "id": 2,
                    "name": "opponent",
                    "type": {
                        "type": "IndexedAccess",
                        "index": "opponent",
                        "objectType": {
                            "type": "Reference",
                            "target": "models/QuizRound/QuizRound"
                        }
                    }
                }
            ]
        },
        "models/QuizQuestion/QuizQuestion": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "_id",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 1,
                    "name": "questionBankIndices",
                    "type": {
                        "type": "Array",
                        "elementType": {
                            "type": "Number"
                        }
                    }
                },
                {
                    "id": 2,
                    "name": "category",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 3,
                    "name": "question",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 4,
                    "name": "options",
                    "type": {
                        "type": "Array",
                        "elementType": {
                            "type": "String"
                        }
                    }
                },
                {
                    "id": 5,
                    "name": "rightAnswerIndex",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 6,
                    "name": "byteStyle",
                    "type": {
                        "type": "Interface",
                        "indexSignature": {
                            "keyType": "String",
                            "type": {
                                "type": "Number"
                            }
                        }
                    }
                },
                {
                    "id": 7,
                    "name": "provider",
                    "type": {
                        "type": "String"
                    },
                    "optional": true
                },
                {
                    "id": 8,
                    "name": "analysis",
                    "type": {
                        "type": "String"
                    },
                    "optional": true
                },
                {
                    "id": 9,
                    "name": "analysisUrl",
                    "type": {
                        "type": "String"
                    },
                    "optional": true
                }
            ]
        },
        "models/QuizRound/QuizRound": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "selfInfo",
                    "type": {
                        "type": "Intersection",
                        "members": [
                            {
                                "id": 0,
                                "type": {
                                    "type": "Reference",
                                    "target": "models/UserInfo/UserInfo"
                                }
                            },
                            {
                                "id": 1,
                                "type": {
                                    "type": "Interface",
                                    "properties": [
                                        {
                                            "id": 0,
                                            "name": "city",
                                            "type": {
                                                "type": "String"
                                            },
                                            "optional": true
                                        },
                                        {
                                            "id": 1,
                                            "name": "isDev",
                                            "type": {
                                                "type": "Boolean"
                                            },
                                            "optional": true
                                        }
                                    ]
                                }
                            }
                        ]
                    }
                },
                {
                    "id": 1,
                    "name": "self",
                    "type": {
                        "type": "Reference",
                        "target": "models/QuizRound/QuizRoundSelf"
                    },
                    "optional": true
                },
                {
                    "id": 2,
                    "name": "opponent",
                    "type": {
                        "type": "Interface",
                        "properties": [
                            {
                                "id": 0,
                                "name": "userInfo",
                                "type": {
                                    "type": "Reference",
                                    "target": "models/UserInfo/UserInfo"
                                }
                            },
                            {
                                "id": 1,
                                "name": "operations",
                                "type": {
                                    "type": "Array",
                                    "elementType": {
                                        "type": "Reference",
                                        "target": "models/QuizOperation/QuizOperation"
                                    }
                                }
                            },
                            {
                                "id": 2,
                                "name": "score",
                                "type": {
                                    "type": "Number"
                                }
                            },
                            {
                                "id": 3,
                                "name": "byteStyleScore",
                                "type": {
                                    "type": "Interface",
                                    "indexSignature": {
                                        "keyType": "String",
                                        "type": {
                                            "type": "Number"
                                        }
                                    }
                                }
                            },
                            {
                                "id": 4,
                                "name": "roundId",
                                "type": {
                                    "type": "String"
                                },
                                "optional": true
                            }
                        ]
                    }
                },
                {
                    "id": 3,
                    "name": "matchable",
                    "type": {
                        "type": "Boolean"
                    }
                },
                {
                    "id": 4,
                    "name": "matchedNum",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 5,
                    "name": "random",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 6,
                    "name": "createTime",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 7,
                    "name": "finishTime",
                    "type": {
                        "type": "Number"
                    },
                    "optional": true
                }
            ]
        },
        "models/UserInfo/UserInfo": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "uid",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 1,
                    "name": "nickname",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 2,
                    "name": "avatar",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 3,
                    "name": "gender",
                    "type": {
                        "type": "Reference",
                        "target": "models/UserInfo/UserGender"
                    }
                },
                {
                    "id": 4,
                    "name": "medals",
                    "type": {
                        "type": "Number"
                    }
                }
            ]
        },
        "models/UserInfo/UserGender": {
            "type": "Enum",
            "members": [
                {
                    "id": 0,
                    "value": 0
                },
                {
                    "id": 1,
                    "value": 1
                },
                {
                    "id": 2,
                    "value": 2
                }
            ]
        },
        "activity/PtlStartQunzhanActivityRound/ReqStartQunzhanActivityRound": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "base/BaseRequest"
                    }
                }
            ],
            "properties": [
                {
                    "id": 0,
                    "name": "activityId",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        },
        "activity/PtlStartQunzhanActivityRound/ResStartQunzhanActivityRound": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "base/BaseResponse"
                    }
                }
            ],
            "properties": [
                {
                    "id": 0,
                    "name": "remainedPlayTimes",
                    "type": {
                        "type": "Number"
                    }
                }
            ]
        },
        "award/PtlGetMyAwards/ReqGetMyAwards": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "base/BaseRequest"
                    }
                }
            ],
            "properties": [
                {
                    "id": 0,
                    "name": "page",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 1,
                    "name": "pageSize",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 2,
                    "name": "activityId",
                    "type": {
                        "type": "String"
                    },
                    "optional": true
                }
            ]
        },
        "award/PtlGetMyAwards/ResGetMyAwards": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "base/BaseResponse"
                    }
                }
            ],
            "properties": [
                {
                    "id": 0,
                    "name": "data",
                    "type": {
                        "type": "Array",
                        "elementType": {
                            "type": "Reference",
                            "target": "models/MyAward/MyAward"
                        }
                    }
                },
                {
                    "id": 1,
                    "name": "total",
                    "type": {
                        "type": "Number"
                    }
                }
            ]
        },
        "models/MyAward/MyAward": {
            "type": "Union",
            "members": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "models/MyAward/MyAwardReal"
                    }
                },
                {
                    "id": 1,
                    "type": {
                        "type": "Reference",
                        "target": "models/MyAward/MyAwardVirtual"
                    }
                },
                {
                    "id": 2,
                    "type": {
                        "type": "Reference",
                        "target": "models/MyAward/MyAwardLuckyBox"
                    }
                }
            ]
        },
        "models/MyAward/MyAwardReal": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "models/MyAward/BaseMyAward"
                    }
                }
            ],
            "properties": [
                {
                    "id": 0,
                    "name": "type",
                    "type": {
                        "type": "Literal",
                        "literal": "实物"
                    }
                },
                {
                    "id": 1,
                    "name": "address",
                    "type": {
                        "type": "Reference",
                        "target": "models/MyAward/RealAwardAddress"
                    },
                    "optional": true
                },
                {
                    "id": 2,
                    "name": "allowedDeliveryType",
                    "type": {
                        "type": "Array",
                        "elementType": {
                            "type": "Union",
                            "members": [
                                {
                                    "id": 0,
                                    "type": {
                                        "type": "Literal",
                                        "literal": "快递"
                                    }
                                },
                                {
                                    "id": 1,
                                    "type": {
                                        "type": "Literal",
                                        "literal": "工区自提"
                                    }
                                }
                            ]
                        }
                    }
                },
                {
                    "id": 3,
                    "name": "delivery",
                    "type": {
                        "type": "Interface",
                        "properties": [
                            {
                                "id": 0,
                                "name": "time",
                                "type": {
                                    "type": "Number"
                                }
                            },
                            {
                                "id": 1,
                                "name": "expressCompany",
                                "type": {
                                    "type": "String"
                                }
                            },
                            {
                                "id": 2,
                                "name": "expressNo",
                                "type": {
                                    "type": "String"
                                }
                            }
                        ]
                    },
                    "optional": true
                }
            ]
        },
        "models/MyAward/BaseMyAward": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "_id",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 1,
                    "name": "uid",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 2,
                    "name": "nickname",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 3,
                    "name": "jobNo",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 4,
                    "name": "name",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 5,
                    "name": "icon",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 6,
                    "name": "from",
                    "type": {
                        "type": "Union",
                        "members": [
                            {
                                "id": 0,
                                "type": {
                                    "type": "Reference",
                                    "target": "models/MyAward/MyAwardFromDaily"
                                }
                            },
                            {
                                "id": 1,
                                "type": {
                                    "type": "Reference",
                                    "target": "models/MyAward/MyAwardFromActivity"
                                }
                            },
                            {
                                "id": 2,
                                "type": {
                                    "type": "Reference",
                                    "target": "models/MyAward/MyAwardFromRank"
                                }
                            },
                            {
                                "id": 3,
                                "type": {
                                    "type": "Reference",
                                    "target": "models/MyAward/MyAwardFromCustom"
                                }
                            },
                            {
                                "id": 4,
                                "type": {
                                    "type": "Reference",
                                    "target": "models/MyAward/MyAwardFromQunzhan"
                                }
                            }
                        ]
                    }
                },
                {
                    "id": 7,
                    "name": "status",
                    "type": {
                        "type": "Union",
                        "members": [
                            {
                                "id": 0,
                                "type": {
                                    "type": "Literal",
                                    "literal": "待领取"
                                }
                            },
                            {
                                "id": 1,
                                "type": {
                                    "type": "Literal",
                                    "literal": "待发出"
                                }
                            },
                            {
                                "id": 2,
                                "type": {
                                    "type": "Literal",
                                    "literal": "已发出"
                                }
                            }
                        ]
                    }
                },
                {
                    "id": 8,
                    "name": "createTime",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 9,
                    "name": "meta",
                    "type": {
                        "type": "Any"
                    },
                    "optional": true
                }
            ]
        },
        "models/MyAward/MyAwardFromDaily": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "type",
                    "type": {
                        "type": "Literal",
                        "literal": "日常抽奖"
                    }
                },
                {
                    "id": 1,
                    "name": "desc",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        },
        "models/MyAward/MyAwardFromActivity": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "type",
                    "type": {
                        "type": "Literal",
                        "literal": "活动"
                    }
                },
                {
                    "id": 1,
                    "name": "activityId",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 2,
                    "name": "desc",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        },
        "models/MyAward/MyAwardFromRank": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "type",
                    "type": {
                        "type": "Union",
                        "members": [
                            {
                                "id": 0,
                                "type": {
                                    "type": "Literal",
                                    "literal": "周排名"
                                }
                            },
                            {
                                "id": 1,
                                "type": {
                                    "type": "Literal",
                                    "literal": "月排名"
                                }
                            }
                        ]
                    }
                },
                {
                    "id": 1,
                    "name": "desc",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 2,
                    "name": "period",
                    "type": {
                        "type": "Interface",
                        "properties": [
                            {
                                "id": 0,
                                "name": "startDate",
                                "type": {
                                    "type": "String"
                                }
                            },
                            {
                                "id": 1,
                                "name": "endDate",
                                "type": {
                                    "type": "String"
                                }
                            }
                        ]
                    }
                },
                {
                    "id": 3,
                    "name": "rank",
                    "type": {
                        "type": "Number",
                        "scalarType": "uint"
                    }
                }
            ]
        },
        "models/MyAward/MyAwardFromCustom": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "type",
                    "type": {
                        "type": "Literal",
                        "literal": "Custom"
                    }
                },
                {
                    "id": 1,
                    "name": "poolId",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 2,
                    "name": "desc",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 3,
                    "name": "keys",
                    "type": {
                        "type": "Array",
                        "elementType": {
                            "type": "String"
                        }
                    }
                }
            ]
        },
        "models/MyAward/MyAwardFromQunzhan": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "type",
                    "type": {
                        "type": "Literal",
                        "literal": "群战拼图"
                    }
                },
                {
                    "id": 1,
                    "name": "poolId",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 2,
                    "name": "desc",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        },
        "models/MyAward/RealAwardAddress": {
            "type": "Union",
            "members": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "models/MyAward/RealAwardAddressExpress"
                    }
                },
                {
                    "id": 1,
                    "type": {
                        "type": "Reference",
                        "target": "models/MyAward/RealAwardAddressZiti"
                    }
                }
            ]
        },
        "models/MyAward/RealAwardAddressExpress": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "models/MyAward/BaseRealAwardAddress"
                    }
                }
            ],
            "properties": [
                {
                    "id": 0,
                    "name": "type",
                    "type": {
                        "type": "Literal",
                        "literal": "快递"
                    }
                },
                {
                    "id": 1,
                    "name": "province",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 2,
                    "name": "city",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 3,
                    "name": "area",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 4,
                    "name": "addr",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        },
        "models/MyAward/BaseRealAwardAddress": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "time",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 1,
                    "name": "name",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 2,
                    "name": "tel",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        },
        "models/MyAward/RealAwardAddressZiti": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "models/MyAward/BaseRealAwardAddress"
                    }
                }
            ],
            "properties": [
                {
                    "id": 0,
                    "name": "type",
                    "type": {
                        "type": "Literal",
                        "literal": "工区自提"
                    }
                },
                {
                    "id": 1,
                    "name": "city",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 2,
                    "name": "area",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        },
        "models/MyAward/MyAwardVirtual": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "models/MyAward/BaseMyAward"
                    }
                }
            ],
            "properties": [
                {
                    "id": 0,
                    "name": "type",
                    "type": {
                        "type": "Literal",
                        "literal": "虚拟"
                    }
                },
                {
                    "id": 1,
                    "name": "delivery",
                    "type": {
                        "type": "Interface",
                        "properties": [
                            {
                                "id": 0,
                                "name": "time",
                                "type": {
                                    "type": "Number"
                                }
                            },
                            {
                                "id": 1,
                                "name": "content",
                                "type": {
                                    "type": "String"
                                }
                            }
                        ]
                    },
                    "optional": true
                }
            ]
        },
        "models/MyAward/MyAwardLuckyBox": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "models/MyAward/BaseMyAward"
                    }
                }
            ],
            "properties": [
                {
                    "id": 0,
                    "name": "type",
                    "type": {
                        "type": "Literal",
                        "literal": "LuckyBox"
                    }
                },
                {
                    "id": 1,
                    "name": "selectedPoolItemId",
                    "type": {
                        "type": "String"
                    },
                    "optional": true
                },
                {
                    "id": 2,
                    "name": "title",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 3,
                    "name": "desc",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        },
        "award/PtlGetToReceivedInfo/ReqGetToReceivedInfo": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "base/BaseRequest"
                    }
                }
            ]
        },
        "award/PtlGetToReceivedInfo/ResGetToReceivedInfo": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "base/BaseResponse"
                    }
                }
            ],
            "properties": [
                {
                    "id": 0,
                    "name": "luckyBoxIds",
                    "type": {
                        "type": "Array",
                        "elementType": {
                            "type": "String"
                        }
                    }
                },
                {
                    "id": 1,
                    "name": "myAwardIds",
                    "type": {
                        "type": "Array",
                        "elementType": {
                            "type": "String"
                        }
                    }
                }
            ]
        },
        "award/PtlGetWorkAreas/ReqGetWorkAreas": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "base/BaseRequest"
                    }
                }
            ]
        },
        "award/PtlGetWorkAreas/ResGetWorkAreas": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "base/BaseResponse"
                    }
                }
            ],
            "properties": [
                {
                    "id": 0,
                    "name": "workAreas",
                    "type": {
                        "type": "Array",
                        "elementType": {
                            "type": "Interface",
                            "properties": [
                                {
                                    "id": 0,
                                    "name": "city",
                                    "type": {
                                        "type": "String"
                                    }
                                },
                                {
                                    "id": 1,
                                    "name": "areas",
                                    "type": {
                                        "type": "Array",
                                        "elementType": {
                                            "type": "String"
                                        }
                                    }
                                }
                            ]
                        }
                    }
                }
            ]
        },
        "award/PtlOpenLuckyBox/ReqOpenLuckyBox": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "base/BaseRequest"
                    }
                }
            ],
            "properties": [
                {
                    "id": 0,
                    "name": "luckyBoxId",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        },
        "award/PtlOpenLuckyBox/ResOpenLuckyBox": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "base/BaseResponse"
                    }
                }
            ],
            "properties": [
                {
                    "id": 0,
                    "name": "title",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 1,
                    "name": "desc",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 2,
                    "name": "from",
                    "type": {
                        "type": "Reference",
                        "target": "award/PtlOpenLuckyBox/LuckyBoxFrom"
                    }
                },
                {
                    "id": 3,
                    "name": "poolItems",
                    "type": {
                        "type": "Array",
                        "elementType": {
                            "type": "Interface",
                            "properties": [
                                {
                                    "id": 0,
                                    "name": "_id",
                                    "type": {
                                        "type": "String"
                                    }
                                },
                                {
                                    "id": 1,
                                    "name": "name",
                                    "type": {
                                        "type": "String"
                                    }
                                },
                                {
                                    "id": 2,
                                    "name": "icon",
                                    "type": {
                                        "type": "String"
                                    }
                                },
                                {
                                    "id": 3,
                                    "name": "lockedMsg",
                                    "type": {
                                        "type": "String"
                                    },
                                    "optional": true
                                }
                            ]
                        }
                    }
                }
            ]
        },
        "award/PtlOpenLuckyBox/LuckyBoxFrom": {
            "type": "Union",
            "members": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "models/MyAward/MyAwardFromRank"
                    }
                },
                {
                    "id": 1,
                    "type": {
                        "type": "Reference",
                        "target": "models/MyAward/MyAwardFromCustom"
                    }
                }
            ]
        },
        "award/PtlSelectLuckyBoxAward/ReqSelectLuckyBoxAward": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "base/BaseRequest"
                    }
                }
            ],
            "properties": [
                {
                    "id": 0,
                    "name": "luckyBoxId",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 1,
                    "name": "poolItemId",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        },
        "award/PtlSelectLuckyBoxAward/ResSelectLuckyBoxAward": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "base/BaseResponse"
                    }
                }
            ],
            "properties": [
                {
                    "id": 0,
                    "name": "award",
                    "type": {
                        "type": "Reference",
                        "target": "models/MyAward/MyAward"
                    }
                }
            ]
        },
        "award/PtlSubmitAddr/ReqSubmitAddr": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "base/BaseRequest"
                    }
                }
            ],
            "properties": [
                {
                    "id": 0,
                    "name": "myAwardId",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 1,
                    "name": "address",
                    "type": {
                        "type": "Reference",
                        "target": "models/MyAward/RealAwardAddress"
                    }
                }
            ]
        },
        "award/PtlSubmitAddr/ResSubmitAddr": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "base/BaseResponse"
                    }
                }
            ],
            "properties": [
                {
                    "id": 0,
                    "name": "newMyAward",
                    "type": {
                        "type": "Reference",
                        "target": "models/MyAward/MyAward"
                    }
                }
            ]
        },
        "daily/PtlFinishRound/ReqFinishRound": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "base/BaseRequest"
                    }
                }
            ],
            "properties": [
                {
                    "id": 0,
                    "name": "_id",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 1,
                    "name": "self",
                    "type": {
                        "type": "Reference",
                        "target": "models/QuizRound/QuizRoundSelf"
                    }
                },
                {
                    "id": 2,
                    "name": "questionNum",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 3,
                    "name": "questionGroupId",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        },
        "daily/PtlFinishRound/ResFinishRound": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "base/BaseResponse"
                    }
                }
            ],
            "properties": [
                {
                    "id": 0,
                    "name": "pointsChange",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 1,
                    "name": "medalsChange",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 2,
                    "name": "byteStyleChange",
                    "type": {
                        "type": "Array",
                        "elementType": {
                            "type": "Interface",
                            "properties": [
                                {
                                    "id": 0,
                                    "name": "name",
                                    "type": {
                                        "type": "String"
                                    }
                                },
                                {
                                    "id": 1,
                                    "name": "amount",
                                    "type": {
                                        "type": "Number"
                                    }
                                }
                            ]
                        }
                    }
                }
            ]
        },
        "daily/PtlStartRound/ReqStartRound": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "base/BaseRequest"
                    }
                }
            ],
            "properties": [
                {
                    "id": 0,
                    "name": "type",
                    "type": {
                        "type": "Reference",
                        "target": "daily/PtlStartRound/DailyRoundType"
                    }
                }
            ]
        },
        "daily/PtlStartRound/DailyRoundType": {
            "type": "Union",
            "members": [
                {
                    "id": 0,
                    "type": {
                        "type": "Literal",
                        "literal": "practise"
                    }
                },
                {
                    "id": 1,
                    "type": {
                        "type": "Literal",
                        "literal": "match"
                    }
                }
            ]
        },
        "daily/PtlStartRound/ResStartRound": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "base/BaseResponse"
                    }
                }
            ],
            "properties": [
                {
                    "id": 0,
                    "name": "_id",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 1,
                    "name": "questions",
                    "type": {
                        "type": "Array",
                        "elementType": {
                            "type": "Reference",
                            "target": "models/QuizQuestion/QuizQuestion"
                        }
                    }
                },
                {
                    "id": 2,
                    "name": "opponent",
                    "type": {
                        "type": "IndexedAccess",
                        "index": "opponent",
                        "objectType": {
                            "type": "Reference",
                            "target": "models/QuizRound/QuizRound"
                        }
                    }
                },
                {
                    "id": 3,
                    "name": "questionGroupId",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        },
        "data/PtlGetPlayData/ReqGetPlayData": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "base/BaseRequest"
                    }
                }
            ]
        },
        "data/PtlGetPlayData/ResGetPlayData": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "base/BaseResponse"
                    }
                }
            ],
            "properties": [
                {
                    "id": 0,
                    "name": "data",
                    "type": {
                        "type": "Partial",
                        "target": {
                            "type": "Reference",
                            "target": "models/PlayData/PlayData"
                        }
                    }
                }
            ]
        },
        "models/PlayData/PlayData": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "energy",
                    "type": {
                        "type": "Number"
                    }
                }
            ]
        },
        "data/PtlSetPlayData/ReqSetPlayData": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "base/BaseRequest"
                    }
                }
            ],
            "properties": [
                {
                    "id": 0,
                    "name": "data",
                    "type": {
                        "type": "Reference",
                        "target": "models/PlayData/PlayData"
                    }
                }
            ]
        },
        "data/PtlSetPlayData/ResSetPlayData": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "base/BaseResponse"
                    }
                }
            ],
            "properties": [
                {
                    "id": 0,
                    "name": "updateTime",
                    "type": {
                        "type": "Number"
                    }
                }
            ]
        },
        "draw/PtlDraw/ReqDraw": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "base/BaseRequest"
                    }
                }
            ],
            "properties": [
                {
                    "id": 0,
                    "name": "ticket",
                    "type": {
                        "type": "Reference",
                        "target": "../models/AwardUtil/DrawTicket"
                    }
                }
            ]
        },
        "../models/AwardUtil/DrawTicket": {
            "type": "Union",
            "members": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "../models/AwardUtil/DrawTicketDaily"
                    }
                },
                {
                    "id": 1,
                    "type": {
                        "type": "Reference",
                        "target": "../models/AwardUtil/DrawTicketActivity"
                    }
                }
            ]
        },
        "../models/AwardUtil/DrawTicketDaily": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "type",
                    "type": {
                        "type": "Literal",
                        "literal": "daily"
                    }
                }
            ]
        },
        "../models/AwardUtil/DrawTicketActivity": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "type",
                    "type": {
                        "type": "Literal",
                        "literal": "activity"
                    }
                },
                {
                    "id": 1,
                    "name": "activityId",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 2,
                    "name": "roundId",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        },
        "draw/PtlDraw/ResDraw": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "base/BaseResponse"
                    }
                }
            ],
            "properties": [
                {
                    "id": 0,
                    "name": "award",
                    "type": {
                        "type": "Intersection",
                        "members": [
                            {
                                "id": 0,
                                "type": {
                                    "type": "Interface",
                                    "properties": [
                                        {
                                            "id": 0,
                                            "name": "_id",
                                            "type": {
                                                "type": "String"
                                            }
                                        },
                                        {
                                            "id": 1,
                                            "name": "name",
                                            "type": {
                                                "type": "String"
                                            }
                                        },
                                        {
                                            "id": 2,
                                            "name": "icon",
                                            "type": {
                                                "type": "String"
                                            }
                                        },
                                        {
                                            "id": 3,
                                            "name": "myAwardId",
                                            "type": {
                                                "type": "String"
                                            }
                                        }
                                    ]
                                }
                            },
                            {
                                "id": 1,
                                "type": {
                                    "type": "Union",
                                    "members": [
                                        {
                                            "id": 0,
                                            "type": {
                                                "type": "Interface",
                                                "properties": [
                                                    {
                                                        "id": 0,
                                                        "name": "type",
                                                        "type": {
                                                            "type": "Literal",
                                                            "literal": "实物"
                                                        }
                                                    },
                                                    {
                                                        "id": 1,
                                                        "name": "allowedDeliveryType",
                                                        "type": {
                                                            "type": "Array",
                                                            "elementType": {
                                                                "type": "Union",
                                                                "members": [
                                                                    {
                                                                        "id": 0,
                                                                        "type": {
                                                                            "type": "Literal",
                                                                            "literal": "快递"
                                                                        }
                                                                    },
                                                                    {
                                                                        "id": 1,
                                                                        "type": {
                                                                            "type": "Literal",
                                                                            "literal": "工区自提"
                                                                        }
                                                                    }
                                                                ]
                                                            }
                                                        }
                                                    }
                                                ]
                                            }
                                        },
                                        {
                                            "id": 1,
                                            "type": {
                                                "type": "Interface",
                                                "properties": [
                                                    {
                                                        "id": 0,
                                                        "name": "type",
                                                        "type": {
                                                            "type": "Union",
                                                            "members": [
                                                                {
                                                                    "id": 0,
                                                                    "type": {
                                                                        "type": "Literal",
                                                                        "literal": "虚拟"
                                                                    }
                                                                },
                                                                {
                                                                    "id": 1,
                                                                    "type": {
                                                                        "type": "Literal",
                                                                        "literal": "NoAward"
                                                                    }
                                                                }
                                                            ]
                                                        }
                                                    }
                                                ]
                                            }
                                        }
                                    ]
                                }
                            }
                        ]
                    }
                }
            ]
        },
        "draw/PtlGetDrawInfo/ReqGetDrawInfo": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "base/BaseRequest"
                    }
                }
            ],
            "properties": [
                {
                    "id": 0,
                    "name": "ticket",
                    "type": {
                        "type": "Reference",
                        "target": "../models/AwardUtil/DrawTicket"
                    }
                }
            ]
        },
        "draw/PtlGetDrawInfo/ResGetDrawInfo": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "base/BaseResponse"
                    }
                }
            ],
            "properties": [
                {
                    "id": 0,
                    "name": "awards",
                    "type": {
                        "type": "Array",
                        "elementType": {
                            "type": "Interface",
                            "properties": [
                                {
                                    "id": 0,
                                    "name": "_id",
                                    "type": {
                                        "type": "String"
                                    }
                                },
                                {
                                    "id": 1,
                                    "name": "type",
                                    "type": {
                                        "type": "Union",
                                        "members": [
                                            {
                                                "id": 0,
                                                "type": {
                                                    "type": "Literal",
                                                    "literal": "实物"
                                                }
                                            },
                                            {
                                                "id": 1,
                                                "type": {
                                                    "type": "Literal",
                                                    "literal": "虚拟"
                                                }
                                            },
                                            {
                                                "id": 2,
                                                "type": {
                                                    "type": "Literal",
                                                    "literal": "NoAward"
                                                }
                                            }
                                        ]
                                    }
                                },
                                {
                                    "id": 2,
                                    "name": "name",
                                    "type": {
                                        "type": "String"
                                    }
                                },
                                {
                                    "id": 3,
                                    "name": "icon",
                                    "type": {
                                        "type": "String"
                                    }
                                }
                            ]
                        }
                    }
                },
                {
                    "id": 1,
                    "name": "activityConfig",
                    "type": {
                        "type": "Reference",
                        "target": "models/ActivityConfig/ActivityConfig"
                    },
                    "optional": true
                }
            ]
        },
        "events/2021-10-24/PtlGetStatus/ReqGetStatus": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "base/BaseRequest"
                    }
                }
            ]
        },
        "events/2021-10-24/PtlGetStatus/ResGetStatus": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "base/BaseResponse"
                    }
                }
            ],
            "properties": [
                {
                    "id": 0,
                    "name": "remainedExpTimes",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 1,
                    "name": "formalResult",
                    "type": {
                        "type": "Interface",
                        "properties": [
                            {
                                "id": 0,
                                "name": "rightNum",
                                "type": {
                                    "type": "Number"
                                }
                            },
                            {
                                "id": 1,
                                "name": "addPoints",
                                "type": {
                                    "type": "Number"
                                }
                            }
                        ]
                    },
                    "optional": true
                }
            ]
        },
        "events/2021-10-24/PtlStartExp/ReqStartExp": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "base/BaseRequest"
                    }
                }
            ]
        },
        "events/2021-10-24/PtlStartExp/ResStartExp": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "base/BaseResponse"
                    }
                }
            ]
        },
        "home/PtlGetHomeInfo/ReqGetHomeInfo": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "base/BaseRequest"
                    }
                }
            ]
        },
        "home/PtlGetHomeInfo/ResGetHomeInfo": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "base/BaseResponse"
                    }
                }
            ],
            "properties": [
                {
                    "id": 0,
                    "name": "dots",
                    "type": {
                        "type": "Interface",
                        "properties": [
                            {
                                "id": 0,
                                "name": "ugc",
                                "type": {
                                    "type": "Boolean"
                                }
                            },
                            {
                                "id": 1,
                                "name": "award",
                                "type": {
                                    "type": "Number",
                                    "scalarType": "uint"
                                }
                            }
                        ]
                    }
                },
                {
                    "id": 1,
                    "name": "luckyBoxIds",
                    "type": {
                        "type": "Array",
                        "elementType": {
                            "type": "String"
                        }
                    }
                },
                {
                    "id": 2,
                    "name": "activity",
                    "type": {
                        "type": "Interface",
                        "properties": [
                            {
                                "id": 0,
                                "name": "activityId",
                                "type": {
                                    "type": "String"
                                }
                            },
                            {
                                "id": 1,
                                "name": "banner",
                                "type": {
                                    "type": "String"
                                }
                            }
                        ]
                    },
                    "optional": true
                }
            ]
        },
        "mistake/PtlGetMyMistakes/ReqGetMyMistakes": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "base/BaseRequest"
                    }
                }
            ],
            "properties": [
                {
                    "id": 0,
                    "name": "page",
                    "type": {
                        "type": "Number",
                        "scalarType": "uint"
                    }
                },
                {
                    "id": 1,
                    "name": "pageSize",
                    "type": {
                        "type": "Number",
                        "scalarType": "uint"
                    }
                }
            ]
        },
        "mistake/PtlGetMyMistakes/ResGetMyMistakes": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "base/BaseResponse"
                    }
                }
            ],
            "properties": [
                {
                    "id": 0,
                    "name": "data",
                    "type": {
                        "type": "Array",
                        "elementType": {
                            "type": "Interface",
                            "properties": [
                                {
                                    "id": 0,
                                    "name": "question",
                                    "type": {
                                        "type": "String"
                                    }
                                },
                                {
                                    "id": 1,
                                    "name": "options",
                                    "type": {
                                        "type": "Array",
                                        "elementType": {
                                            "type": "String"
                                        }
                                    }
                                },
                                {
                                    "id": 2,
                                    "name": "rightIndex",
                                    "type": {
                                        "type": "Number",
                                        "scalarType": "uint"
                                    }
                                },
                                {
                                    "id": 3,
                                    "name": "wrongIndex",
                                    "type": {
                                        "type": "Number",
                                        "scalarType": "uint"
                                    }
                                },
                                {
                                    "id": 4,
                                    "name": "analysis",
                                    "type": {
                                        "type": "String"
                                    },
                                    "optional": true
                                },
                                {
                                    "id": 5,
                                    "name": "analysisUrl",
                                    "type": {
                                        "type": "String"
                                    },
                                    "optional": true
                                }
                            ]
                        }
                    }
                },
                {
                    "id": 1,
                    "name": "total",
                    "type": {
                        "type": "Number",
                        "scalarType": "uint"
                    }
                }
            ]
        },
        "platform/PtlLoginDev/ReqLoginDev": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "base/BaseRequest"
                    }
                }
            ],
            "properties": [
                {
                    "id": 0,
                    "name": "loginKey",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 1,
                    "name": "from",
                    "type": {
                        "type": "String"
                    },
                    "optional": true
                },
                {
                    "id": 2,
                    "name": "fromUid",
                    "type": {
                        "type": "String"
                    },
                    "optional": true
                }
            ]
        },
        "platform/PtlLoginDev/ResLoginDev": {
            "type": "Reference",
            "target": "platform/ResLogin/ResLogin"
        },
        "platform/ResLogin/ResLogin": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "base/BaseResponse"
                    }
                }
            ],
            "properties": [
                {
                    "id": 0,
                    "name": "user",
                    "type": {
                        "type": "Reference",
                        "target": "models/CurrentUser/CurrentUser"
                    }
                },
                {
                    "id": 1,
                    "name": "playData",
                    "type": {
                        "type": "Partial",
                        "target": {
                            "type": "Reference",
                            "target": "models/PlayData/PlayData"
                        }
                    }
                },
                {
                    "id": 2,
                    "name": "isFirstLogin",
                    "type": {
                        "type": "Boolean"
                    }
                },
                {
                    "id": 3,
                    "name": "__refresh",
                    "type": {
                        "type": "Interface",
                        "properties": [
                            {
                                "id": 0,
                                "name": "sso",
                                "type": {
                                    "type": "String"
                                }
                            }
                        ]
                    }
                }
            ]
        },
        "models/CurrentUser/CurrentUser": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "_id",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 1,
                    "name": "nickname",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 2,
                    "name": "avatar",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 3,
                    "name": "avatarMiddle",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 4,
                    "name": "avatarBig",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 5,
                    "name": "gender",
                    "type": {
                        "type": "Reference",
                        "target": "models/UserInfo/UserGender"
                    }
                },
                {
                    "id": 6,
                    "name": "jobNo",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 7,
                    "name": "country",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 8,
                    "name": "province",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 9,
                    "name": "city",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 10,
                    "name": "from",
                    "type": {
                        "type": "String"
                    },
                    "optional": true
                },
                {
                    "id": 11,
                    "name": "fromUid",
                    "type": {
                        "type": "String"
                    },
                    "optional": true
                },
                {
                    "id": 12,
                    "name": "points",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 13,
                    "name": "medals",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 14,
                    "name": "byteStyle",
                    "type": {
                        "type": "Interface",
                        "indexSignature": {
                            "keyType": "String",
                            "type": {
                                "type": "Number"
                            }
                        }
                    }
                },
                {
                    "id": 15,
                    "name": "energy",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 16,
                    "name": "invitedNewUser",
                    "type": {
                        "type": "Number",
                        "scalarType": "uint"
                    },
                    "optional": true
                },
                {
                    "id": 17,
                    "name": "createTime",
                    "type": {
                        "type": "Number"
                    }
                }
            ]
        },
        "platform/PtlLoginFeishu/ReqLoginFeishu": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "base/BaseRequest"
                    }
                }
            ],
            "properties": [
                {
                    "id": 0,
                    "name": "code",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 1,
                    "name": "from",
                    "type": {
                        "type": "String"
                    },
                    "optional": true
                },
                {
                    "id": 2,
                    "name": "fromUid",
                    "type": {
                        "type": "String"
                    },
                    "optional": true
                }
            ]
        },
        "platform/PtlLoginFeishu/ResLoginFeishu": {
            "type": "Reference",
            "target": "platform/ResLogin/ResLogin"
        },
        "PtlGetGameConfig/ReqGetGameConfig": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "base/BaseRequest"
                    }
                }
            ],
            "properties": [
                {
                    "id": 0,
                    "name": "version",
                    "type": {
                        "type": "Number"
                    },
                    "optional": true
                }
            ]
        },
        "PtlGetGameConfig/ResGetGameConfig": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "base/BaseResponse"
                    }
                }
            ],
            "properties": [
                {
                    "id": 0,
                    "name": "version",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 1,
                    "name": "config",
                    "type": {
                        "type": "Reference",
                        "target": "models/GameConfig/GameConfig"
                    },
                    "optional": true
                }
            ]
        },
        "models/GameConfig/GameConfig": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "points",
                    "type": {
                        "type": "Interface",
                        "properties": [
                            {
                                "id": 0,
                                "name": "default",
                                "type": {
                                    "type": "Number",
                                    "scalarType": "uint"
                                }
                            },
                            {
                                "id": 1,
                                "name": "round",
                                "type": {
                                    "type": "Interface",
                                    "properties": [
                                        {
                                            "id": 0,
                                            "name": "activity",
                                            "type": {
                                                "type": "Interface",
                                                "properties": [
                                                    {
                                                        "id": 0,
                                                        "name": "win",
                                                        "type": {
                                                            "type": "Number",
                                                            "scalarType": "uint"
                                                        }
                                                    },
                                                    {
                                                        "id": 1,
                                                        "name": "lose",
                                                        "type": {
                                                            "type": "Number",
                                                            "scalarType": "uint"
                                                        }
                                                    },
                                                    {
                                                        "id": 2,
                                                        "name": "draw",
                                                        "type": {
                                                            "type": "Number",
                                                            "scalarType": "uint"
                                                        }
                                                    }
                                                ]
                                            }
                                        },
                                        {
                                            "id": 1,
                                            "name": "1v1",
                                            "type": {
                                                "type": "Interface",
                                                "properties": [
                                                    {
                                                        "id": 0,
                                                        "name": "win",
                                                        "type": {
                                                            "type": "Number",
                                                            "scalarType": "uint"
                                                        }
                                                    },
                                                    {
                                                        "id": 1,
                                                        "name": "lose",
                                                        "type": {
                                                            "type": "Number",
                                                            "scalarType": "uint"
                                                        }
                                                    },
                                                    {
                                                        "id": 2,
                                                        "name": "draw",
                                                        "type": {
                                                            "type": "Number",
                                                            "scalarType": "uint"
                                                        }
                                                    }
                                                ]
                                            }
                                        },
                                        {
                                            "id": 2,
                                            "name": "qunzhan",
                                            "type": {
                                                "type": "Interface",
                                                "properties": [
                                                    {
                                                        "id": 0,
                                                        "name": "win",
                                                        "type": {
                                                            "type": "Number",
                                                            "scalarType": "uint"
                                                        }
                                                    },
                                                    {
                                                        "id": 1,
                                                        "name": "lose",
                                                        "type": {
                                                            "type": "Number",
                                                            "scalarType": "uint"
                                                        }
                                                    }
                                                ]
                                            }
                                        }
                                    ]
                                }
                            },
                            {
                                "id": 2,
                                "name": "dailyDraw",
                                "type": {
                                    "type": "Number",
                                    "scalarType": "uint"
                                }
                            },
                            {
                                "id": 3,
                                "name": "ugcAward",
                                "type": {
                                    "type": "Number",
                                    "scalarType": "uint"
                                }
                            },
                            {
                                "id": 4,
                                "name": "buyEnergy",
                                "type": {
                                    "type": "Interface",
                                    "properties": [
                                        {
                                            "id": 0,
                                            "name": "points",
                                            "type": {
                                                "type": "Number",
                                                "scalarType": "uint"
                                            }
                                        },
                                        {
                                            "id": 1,
                                            "name": "energy",
                                            "type": {
                                                "type": "Number",
                                                "scalarType": "uint"
                                            }
                                        }
                                    ]
                                }
                            },
                            {
                                "id": 5,
                                "name": "freeEnergy",
                                "type": {
                                    "type": "Interface",
                                    "properties": [
                                        {
                                            "id": 0,
                                            "name": "hours",
                                            "type": {
                                                "type": "Array",
                                                "elementType": {
                                                    "type": "Number",
                                                    "scalarType": "uint"
                                                }
                                            }
                                        },
                                        {
                                            "id": 1,
                                            "name": "energy",
                                            "type": {
                                                "type": "Number",
                                                "scalarType": "uint"
                                            }
                                        }
                                    ]
                                }
                            },
                            {
                                "id": 6,
                                "name": "inviteNewUser",
                                "type": {
                                    "type": "Number",
                                    "scalarType": "uint"
                                }
                            }
                        ]
                    }
                },
                {
                    "id": 1,
                    "name": "medals",
                    "type": {
                        "type": "Interface",
                        "properties": [
                            {
                                "id": 0,
                                "name": "default",
                                "type": {
                                    "type": "Number",
                                    "scalarType": "uint"
                                }
                            }
                        ]
                    }
                },
                {
                    "id": 2,
                    "name": "levels",
                    "type": {
                        "type": "Array",
                        "elementType": {
                            "type": "Interface",
                            "properties": [
                                {
                                    "id": 0,
                                    "name": "id",
                                    "type": {
                                        "type": "String"
                                    }
                                },
                                {
                                    "id": 1,
                                    "name": "name",
                                    "type": {
                                        "type": "String"
                                    }
                                },
                                {
                                    "id": 2,
                                    "name": "minMedals",
                                    "type": {
                                        "type": "Number",
                                        "scalarType": "uint"
                                    }
                                },
                                {
                                    "id": 3,
                                    "name": "maxMedals",
                                    "type": {
                                        "type": "Number",
                                        "scalarType": "uint"
                                    }
                                }
                            ]
                        }
                    }
                },
                {
                    "id": 3,
                    "name": "round",
                    "type": {
                        "type": "Interface",
                        "properties": [
                            {
                                "id": 0,
                                "name": "questionScore",
                                "type": {
                                    "type": "Interface",
                                    "properties": [
                                        {
                                            "id": 0,
                                            "name": "right",
                                            "type": {
                                                "type": "Number",
                                                "scalarType": "uint"
                                            }
                                        },
                                        {
                                            "id": 1,
                                            "name": "speed",
                                            "type": {
                                                "type": "Number",
                                                "scalarType": "uint"
                                            }
                                        }
                                    ]
                                }
                            },
                            {
                                "id": 1,
                                "name": "roundTime",
                                "type": {
                                    "type": "Number",
                                    "scalarType": "uint"
                                }
                            },
                            {
                                "id": 2,
                                "name": "maxMatchedTimes",
                                "type": {
                                    "type": "Interface",
                                    "properties": [
                                        {
                                            "id": 0,
                                            "name": "activity",
                                            "type": {
                                                "type": "Number",
                                                "scalarType": "uint"
                                            }
                                        },
                                        {
                                            "id": 1,
                                            "name": "match",
                                            "type": {
                                                "type": "Number",
                                                "scalarType": "uint"
                                            }
                                        },
                                        {
                                            "id": 2,
                                            "name": "practise",
                                            "type": {
                                                "type": "Number",
                                                "scalarType": "uint"
                                            }
                                        }
                                    ]
                                }
                            },
                            {
                                "id": 3,
                                "name": "aiDifficulty",
                                "type": {
                                    "type": "Interface",
                                    "properties": [
                                        {
                                            "id": 0,
                                            "name": "activity",
                                            "type": {
                                                "type": "Number"
                                            }
                                        },
                                        {
                                            "id": 1,
                                            "name": "match",
                                            "type": {
                                                "type": "Number"
                                            }
                                        },
                                        {
                                            "id": 2,
                                            "name": "practise",
                                            "type": {
                                                "type": "Number"
                                            }
                                        }
                                    ]
                                }
                            }
                        ]
                    }
                },
                {
                    "id": 4,
                    "name": "activity",
                    "type": {
                        "type": "Interface"
                    }
                },
                {
                    "id": 5,
                    "name": "draw",
                    "type": {
                        "type": "Interface",
                        "properties": [
                            {
                                "id": 0,
                                "name": "maxDailyLimit",
                                "type": {
                                    "type": "Number",
                                    "scalarType": "uint"
                                }
                            }
                        ]
                    }
                },
                {
                    "id": 6,
                    "name": "limitEmployeeType",
                    "type": {
                        "type": "Array",
                        "elementType": {
                            "type": "String"
                        }
                    },
                    "optional": true
                },
                {
                    "id": 7,
                    "name": "rankAward",
                    "type": {
                        "type": "Interface",
                        "properties": [
                            {
                                "id": 0,
                                "name": "maxWeekRank",
                                "type": {
                                    "type": "Number",
                                    "scalarType": "uint"
                                }
                            },
                            {
                                "id": 1,
                                "name": "maxMonthRank",
                                "type": {
                                    "type": "Number",
                                    "scalarType": "uint"
                                }
                            }
                        ]
                    }
                },
                {
                    "id": 8,
                    "name": "texts",
                    "type": {
                        "type": "Interface",
                        "properties": [
                            {
                                "id": 0,
                                "name": "ugcRules",
                                "type": {
                                    "type": "String"
                                }
                            },
                            {
                                "id": 1,
                                "name": "dailyDrawRules",
                                "type": {
                                    "type": "String"
                                }
                            }
                        ]
                    }
                },
                {
                    "id": 9,
                    "name": "endAlert",
                    "type": {
                        "type": "Interface",
                        "properties": [
                            {
                                "id": 0,
                                "name": "entry",
                                "type": {
                                    "type": "Interface",
                                    "properties": [
                                        {
                                            "id": 0,
                                            "name": "endTime",
                                            "type": {
                                                "type": "Number",
                                                "scalarType": "uint"
                                            }
                                        },
                                        {
                                            "id": 1,
                                            "name": "title",
                                            "type": {
                                                "type": "String"
                                            }
                                        },
                                        {
                                            "id": 2,
                                            "name": "content",
                                            "type": {
                                                "type": "String"
                                            }
                                        },
                                        {
                                            "id": 3,
                                            "name": "btnText",
                                            "type": {
                                                "type": "String"
                                            }
                                        }
                                    ]
                                }
                            },
                            {
                                "id": 1,
                                "name": "daily",
                                "type": {
                                    "type": "Interface",
                                    "properties": [
                                        {
                                            "id": 0,
                                            "name": "endTime1v1",
                                            "type": {
                                                "type": "Number",
                                                "scalarType": "uint"
                                            }
                                        },
                                        {
                                            "id": 1,
                                            "name": "endTimeQunzhan",
                                            "type": {
                                                "type": "Number",
                                                "scalarType": "uint"
                                            }
                                        },
                                        {
                                            "id": 2,
                                            "name": "title",
                                            "type": {
                                                "type": "String"
                                            }
                                        },
                                        {
                                            "id": 3,
                                            "name": "content",
                                            "type": {
                                                "type": "String"
                                            }
                                        },
                                        {
                                            "id": 4,
                                            "name": "btnText",
                                            "type": {
                                                "type": "String"
                                            }
                                        }
                                    ]
                                }
                            },
                            {
                                "id": 2,
                                "name": "rankEnd",
                                "type": {
                                    "type": "Interface",
                                    "properties": [
                                        {
                                            "id": 0,
                                            "name": "endTime",
                                            "type": {
                                                "type": "Number",
                                                "scalarType": "uint"
                                            }
                                        },
                                        {
                                            "id": 1,
                                            "name": "weekText",
                                            "type": {
                                                "type": "String"
                                            }
                                        },
                                        {
                                            "id": 2,
                                            "name": "monthText",
                                            "type": {
                                                "type": "String"
                                            }
                                        }
                                    ]
                                },
                                "optional": true
                            }
                        ]
                    },
                    "optional": true
                }
            ]
        },
        "qunzhan/PtlGetQunzhanFirstRoundNum/ReqGetQunzhanFirstRoundNum": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "base/BaseRequest"
                    }
                }
            ]
        },
        "qunzhan/PtlGetQunzhanFirstRoundNum/ResGetQunzhanFirstRoundNum": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "base/BaseResponse"
                    }
                }
            ],
            "properties": [
                {
                    "id": 0,
                    "name": "firstRoundNum",
                    "type": {
                        "type": "Number",
                        "scalarType": "uint"
                    }
                }
            ]
        },
        "qunzhan/PtlGetQunzhanIndexInfo/ReqGetQunzhanIndexInfo": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "base/BaseRequest"
                    }
                }
            ]
        },
        "qunzhan/PtlGetQunzhanIndexInfo/ResGetQunzhanIndexInfo": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "base/BaseResponse"
                    }
                }
            ],
            "properties": [
                {
                    "id": 0,
                    "name": "list",
                    "type": {
                        "type": "Array",
                        "elementType": {
                            "type": "Interface",
                            "properties": [
                                {
                                    "id": 0,
                                    "name": "richText",
                                    "type": {
                                        "type": "String"
                                    }
                                },
                                {
                                    "id": 1,
                                    "name": "time",
                                    "type": {
                                        "type": "Date"
                                    }
                                }
                            ]
                        }
                    }
                },
                {
                    "id": 1,
                    "name": "onlineUserNum",
                    "type": {
                        "type": "Number",
                        "scalarType": "uint"
                    }
                },
                {
                    "id": 2,
                    "name": "roomNum",
                    "type": {
                        "type": "Number",
                        "scalarType": "uint"
                    }
                }
            ]
        },
        "qunzhan/PtlGetQunzhanPictureAward/ReqGetQunzhanPictureAward": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "base/BaseRequest"
                    }
                }
            ],
            "properties": [
                {
                    "id": 0,
                    "name": "pictureId",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        },
        "qunzhan/PtlGetQunzhanPictureAward/ResGetQunzhanPictureAward": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "luckyBoxId",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        },
        "qunzhan/PtlGetQunzhanPictureConfigs/ReqGetQunzhanPictureConfigs": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "base/BaseRequest"
                    }
                }
            ]
        },
        "qunzhan/PtlGetQunzhanPictureConfigs/ResGetQunzhanPictureConfigs": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "base/BaseResponse"
                    }
                }
            ],
            "properties": [
                {
                    "id": 0,
                    "name": "confs",
                    "type": {
                        "type": "Array",
                        "elementType": {
                            "type": "Intersection",
                            "members": [
                                {
                                    "id": 0,
                                    "type": {
                                        "type": "Reference",
                                        "target": "models/QunzhanPictureConfig/QunzhanPictureConfig"
                                    }
                                },
                                {
                                    "id": 1,
                                    "type": {
                                        "type": "Interface",
                                        "properties": [
                                            {
                                                "id": 0,
                                                "name": "awards",
                                                "type": {
                                                    "type": "Array",
                                                    "elementType": {
                                                        "type": "Interface",
                                                        "properties": [
                                                            {
                                                                "id": 0,
                                                                "name": "name",
                                                                "type": {
                                                                    "type": "String"
                                                                }
                                                            },
                                                            {
                                                                "id": 1,
                                                                "name": "icon",
                                                                "type": {
                                                                    "type": "String"
                                                                }
                                                            }
                                                        ]
                                                    }
                                                }
                                            }
                                        ]
                                    }
                                }
                            ]
                        }
                    }
                }
            ]
        },
        "models/QunzhanPictureConfig/QunzhanPictureConfig": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "_id",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 1,
                    "name": "name",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 2,
                    "name": "url",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 3,
                    "name": "col",
                    "type": {
                        "type": "Number",
                        "scalarType": "uint"
                    }
                },
                {
                    "id": 4,
                    "name": "row",
                    "type": {
                        "type": "Number",
                        "scalarType": "uint"
                    }
                }
            ]
        },
        "qunzhan/PtlGetQunzhanRoomInfo/ReqGetQunzhanRoomInfo": {
            "type": "Intersection",
            "members": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "base/BaseRequest"
                    }
                },
                {
                    "id": 1,
                    "type": {
                        "type": "Union",
                        "members": [
                            {
                                "id": 0,
                                "type": {
                                    "type": "Interface",
                                    "properties": [
                                        {
                                            "id": 0,
                                            "name": "roomId",
                                            "type": {
                                                "type": "String"
                                            }
                                        }
                                    ]
                                }
                            },
                            {
                                "id": 1,
                                "type": {
                                    "type": "Interface",
                                    "properties": [
                                        {
                                            "id": 0,
                                            "name": "code",
                                            "type": {
                                                "type": "String"
                                            }
                                        }
                                    ]
                                }
                            }
                        ]
                    }
                }
            ]
        },
        "qunzhan/PtlGetQunzhanRoomInfo/ResGetQunzhanRoomInfo": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "base/BaseResponse"
                    }
                }
            ],
            "properties": [
                {
                    "id": 0,
                    "name": "room",
                    "type": {
                        "type": "Reference",
                        "target": "models/QunzhanRoom/QunzhanRoom"
                    },
                    "optional": true
                }
            ]
        },
        "models/QunzhanRoom/QunzhanRoom": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "_id",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 1,
                    "name": "serverUrl",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 2,
                    "name": "state",
                    "type": {
                        "type": "Reference",
                        "target": "models/QunzhanRoom/QunzhanRoomState"
                    }
                },
                {
                    "id": 3,
                    "name": "isPublic",
                    "type": {
                        "type": "Boolean"
                    }
                },
                {
                    "id": 4,
                    "name": "isActive",
                    "type": {
                        "type": "Boolean"
                    }
                },
                {
                    "id": 12,
                    "name": "firstRoundNum",
                    "type": {
                        "type": "Number",
                        "scalarType": "uint"
                    },
                    "optional": true
                },
                {
                    "id": 13,
                    "name": "activityId",
                    "type": {
                        "type": "String"
                    },
                    "optional": true
                },
                {
                    "id": 5,
                    "name": "users",
                    "type": {
                        "type": "Array",
                        "elementType": {
                            "type": "Reference",
                            "target": "models/QunzhanRoom/QunzhanRoomUser"
                        }
                    }
                },
                {
                    "id": 6,
                    "name": "roomStat",
                    "type": {
                        "type": "Array",
                        "elementType": {
                            "type": "Interface",
                            "properties": [
                                {
                                    "id": 0,
                                    "name": "uid",
                                    "type": {
                                        "type": "String"
                                    }
                                },
                                {
                                    "id": 1,
                                    "name": "nickname",
                                    "type": {
                                        "type": "String"
                                    }
                                },
                                {
                                    "id": 2,
                                    "name": "avatar",
                                    "type": {
                                        "type": "String"
                                    }
                                },
                                {
                                    "id": 3,
                                    "name": "winRounds",
                                    "type": {
                                        "type": "Number",
                                        "scalarType": "uint"
                                    }
                                }
                            ]
                        }
                    }
                },
                {
                    "id": 7,
                    "name": "code",
                    "type": {
                        "type": "String"
                    },
                    "optional": true
                },
                {
                    "id": 8,
                    "name": "createTime",
                    "type": {
                        "type": "Number",
                        "scalarType": "uint"
                    }
                },
                {
                    "id": 9,
                    "name": "lastActiveTime",
                    "type": {
                        "type": "Number",
                        "scalarType": "uint"
                    }
                },
                {
                    "id": 10,
                    "name": "startMatchTime",
                    "type": {
                        "type": "Number",
                        "scalarType": "uint"
                    },
                    "optional": true
                },
                {
                    "id": 11,
                    "name": "startGameTime",
                    "type": {
                        "type": "Number",
                        "scalarType": "uint"
                    },
                    "optional": true
                }
            ]
        },
        "models/QunzhanRoom/QunzhanRoomState": {
            "type": "Enum",
            "members": [
                {
                    "id": 0,
                    "value": "Waiting"
                },
                {
                    "id": 1,
                    "value": "Matching"
                },
                {
                    "id": 2,
                    "value": "Gaming"
                }
            ]
        },
        "models/QunzhanRoom/QunzhanRoomUser": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "uid",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 1,
                    "name": "nickname",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 2,
                    "name": "avatar",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 3,
                    "name": "skinId",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 4,
                    "name": "joinBy",
                    "type": {
                        "type": "Union",
                        "members": [
                            {
                                "id": 0,
                                "type": {
                                    "type": "Literal",
                                    "literal": "随机匹配"
                                }
                            },
                            {
                                "id": 1,
                                "type": {
                                    "type": "Literal",
                                    "literal": "邀请同事"
                                }
                            },
                            {
                                "id": 2,
                                "type": {
                                    "type": "Literal",
                                    "literal": "面对面开黑"
                                }
                            }
                        ]
                    }
                },
                {
                    "id": 5,
                    "name": "isAI",
                    "type": {
                        "type": "Boolean"
                    },
                    "optional": true
                },
                {
                    "id": 6,
                    "name": "activity",
                    "type": {
                        "type": "Interface",
                        "properties": [
                            {
                                "id": 0,
                                "name": "activityId",
                                "type": {
                                    "type": "String"
                                }
                            },
                            {
                                "id": 1,
                                "name": "isFormal",
                                "type": {
                                    "type": "Boolean"
                                }
                            }
                        ]
                    },
                    "optional": true
                }
            ]
        },
        "qunzhan/PtlGetQunzhanUser/ReqGetQunzhanUser": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "base/BaseRequest"
                    }
                }
            ]
        },
        "qunzhan/PtlGetQunzhanUser/ResGetQunzhanUser": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "base/BaseResponse"
                    }
                }
            ],
            "properties": [
                {
                    "id": 0,
                    "name": "qunzhanUser",
                    "type": {
                        "type": "Reference",
                        "target": "models/QunzhanUser/QunzhanUser"
                    }
                },
                {
                    "id": 1,
                    "name": "isFirstTime",
                    "type": {
                        "type": "Boolean"
                    },
                    "optional": true
                }
            ]
        },
        "models/QunzhanUser/QunzhanUser": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "_id",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 1,
                    "name": "currentSkinId",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 2,
                    "name": "pictures",
                    "type": {
                        "type": "Interface",
                        "indexSignature": {
                            "keyType": "String",
                            "type": {
                                "type": "Interface",
                                "indexSignature": {
                                    "keyType": "Number",
                                    "type": {
                                        "type": "Number",
                                        "scalarType": "uint"
                                    }
                                }
                            }
                        }
                    }
                },
                {
                    "id": 3,
                    "name": "currentPictureId",
                    "type": {
                        "type": "String"
                    },
                    "optional": true
                },
                {
                    "id": 4,
                    "name": "awardedPictureIds",
                    "type": {
                        "type": "Array",
                        "elementType": {
                            "type": "String"
                        }
                    }
                }
            ]
        },
        "qunzhan/PtlSelectQunzhanSkin/ReqSelectQunzhanSkin": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "base/BaseRequest"
                    }
                }
            ],
            "properties": [
                {
                    "id": 0,
                    "name": "skinId",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        },
        "qunzhan/PtlSelectQunzhanSkin/ResSelectQunzhanSkin": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "base/BaseResponse"
                    }
                }
            ]
        },
        "qunzhan/PtlSetCurrentQunzhanPicture/ReqSetCurrentQunzhanPicture": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "base/BaseRequest"
                    }
                }
            ],
            "properties": [
                {
                    "id": 0,
                    "name": "picId",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        },
        "qunzhan/PtlSetCurrentQunzhanPicture/ResSetCurrentQunzhanPicture": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "base/BaseResponse"
                    }
                }
            ]
        },
        "rank/PtlGetRankList/ReqGetRankList": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "base/BaseRequest"
                    }
                }
            ],
            "properties": [
                {
                    "id": 0,
                    "name": "rankId",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 1,
                    "name": "score",
                    "type": {
                        "type": "Number"
                    },
                    "optional": true
                },
                {
                    "id": 2,
                    "name": "topCount",
                    "type": {
                        "type": "Number",
                        "scalarType": "uint"
                    }
                },
                {
                    "id": 3,
                    "name": "nearCount",
                    "type": {
                        "type": "Number",
                        "scalarType": "uint"
                    }
                }
            ]
        },
        "rank/PtlGetRankList/ResGetRankList": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "base/BaseResponse"
                    }
                }
            ],
            "properties": [
                {
                    "id": 0,
                    "name": "list",
                    "type": {
                        "type": "Array",
                        "elementType": {
                            "type": "Reference",
                            "target": "rank/PtlGetRankList/RankListItem"
                        }
                    }
                },
                {
                    "id": 1,
                    "name": "province",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 2,
                    "name": "self",
                    "type": {
                        "type": "Interface",
                        "properties": [
                            {
                                "id": 0,
                                "name": "rank",
                                "type": {
                                    "type": "Number",
                                    "scalarType": "uint"
                                }
                            },
                            {
                                "id": 1,
                                "name": "score",
                                "type": {
                                    "type": "Number"
                                }
                            }
                        ]
                    },
                    "optional": true
                }
            ]
        },
        "rank/PtlGetRankList/RankListItem": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "nickName",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 1,
                    "name": "avatar",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 2,
                    "name": "score",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 3,
                    "name": "rank",
                    "type": {
                        "type": "Number",
                        "scalarType": "uint"
                    }
                },
                {
                    "id": 4,
                    "name": "province",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 5,
                    "name": "city",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        },
        "rank/PtlUpdateRank/ReqUpdateRank": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "base/BaseRequest"
                    }
                }
            ],
            "properties": [
                {
                    "id": 0,
                    "name": "rankId",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 1,
                    "name": "score",
                    "type": {
                        "type": "Number"
                    }
                }
            ]
        },
        "rank/PtlUpdateRank/ResUpdateRank": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "base/BaseResponse"
                    }
                }
            ]
        },
        "stat/PtlStatAction/ReqStatAction": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "base/BaseRequest"
                    }
                }
            ],
            "properties": [
                {
                    "id": 0,
                    "name": "action",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 1,
                    "name": "isTodayFirst",
                    "type": {
                        "type": "Boolean"
                    },
                    "optional": true
                }
            ]
        },
        "stat/PtlStatAction/ResStatAction": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "base/BaseResponse"
                    }
                }
            ]
        },
        "ugc/PtlAddUgcQuestion/ReqAddUgcQuestion": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "base/BaseRequest"
                    }
                }
            ],
            "properties": [
                {
                    "id": 0,
                    "name": "question",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 1,
                    "name": "rightAnswer",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 2,
                    "name": "wrongAnswers",
                    "type": {
                        "type": "Array",
                        "elementType": {
                            "type": "String"
                        }
                    }
                },
                {
                    "id": 3,
                    "name": "byteStyle",
                    "type": {
                        "type": "Interface",
                        "indexSignature": {
                            "keyType": "String",
                            "type": {
                                "type": "Number"
                            }
                        }
                    }
                }
            ]
        },
        "ugc/PtlAddUgcQuestion/ResAddUgcQuestion": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "base/BaseResponse"
                    }
                }
            ]
        },
        "ugc/PtlGetUgcAwards/ReqGetUgcAwards": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "base/BaseRequest"
                    }
                }
            ]
        },
        "ugc/PtlGetUgcAwards/ResGetUgcAwards": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "base/BaseResponse"
                    }
                }
            ],
            "properties": [
                {
                    "id": 0,
                    "name": "pointsChange",
                    "type": {
                        "type": "Number",
                        "scalarType": "uint"
                    }
                }
            ]
        },
        "ugc/PtlGetUgcQuestions/ReqGetUgcQuestions": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "base/BaseRequest"
                    }
                }
            ],
            "properties": [
                {
                    "id": 0,
                    "name": "page",
                    "type": {
                        "type": "Number",
                        "scalarType": "uint"
                    }
                },
                {
                    "id": 1,
                    "name": "pageSize",
                    "type": {
                        "type": "Number",
                        "scalarType": "uint"
                    }
                }
            ]
        },
        "ugc/PtlGetUgcQuestions/ResGetUgcQuestions": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "base/BaseResponse"
                    }
                }
            ],
            "properties": [
                {
                    "id": 0,
                    "name": "data",
                    "type": {
                        "type": "Array",
                        "elementType": {
                            "type": "Interface",
                            "properties": [
                                {
                                    "id": 0,
                                    "name": "question",
                                    "type": {
                                        "type": "String"
                                    }
                                },
                                {
                                    "id": 1,
                                    "name": "rightAnswer",
                                    "type": {
                                        "type": "String"
                                    }
                                },
                                {
                                    "id": 2,
                                    "name": "wrongAnswers",
                                    "type": {
                                        "type": "Array",
                                        "elementType": {
                                            "type": "String"
                                        }
                                    }
                                },
                                {
                                    "id": 3,
                                    "name": "createTime",
                                    "type": {
                                        "type": "Number"
                                    }
                                },
                                {
                                    "id": 4,
                                    "name": "status",
                                    "type": {
                                        "type": "Union",
                                        "members": [
                                            {
                                                "id": 0,
                                                "type": {
                                                    "type": "Literal",
                                                    "literal": "审核中"
                                                }
                                            },
                                            {
                                                "id": 1,
                                                "type": {
                                                    "type": "Literal",
                                                    "literal": "不通过"
                                                }
                                            },
                                            {
                                                "id": 2,
                                                "type": {
                                                    "type": "Literal",
                                                    "literal": "已通过"
                                                }
                                            }
                                        ]
                                    }
                                },
                                {
                                    "id": 5,
                                    "name": "rejectReason",
                                    "type": {
                                        "type": "String"
                                    },
                                    "optional": true
                                }
                            ]
                        }
                    }
                },
                {
                    "id": 1,
                    "name": "total",
                    "type": {
                        "type": "Number",
                        "scalarType": "uint"
                    }
                }
            ]
        },
        "user/PtlBuyEnergy/ReqBuyEnergy": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "base/BaseRequest"
                    }
                }
            ]
        },
        "user/PtlBuyEnergy/ResBuyEnergy": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "base/BaseResponse"
                    }
                }
            ]
        },
        "user/PtlConsumePoints/ReqConsumePoints": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "base/BaseRequest"
                    }
                }
            ],
            "properties": [
                {
                    "id": 0,
                    "name": "points",
                    "type": {
                        "type": "Number",
                        "scalarType": "uint"
                    }
                },
                {
                    "id": 1,
                    "name": "reason",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        },
        "user/PtlConsumePoints/ResConsumePoints": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "base/BaseResponse"
                    }
                }
            ]
        },
        "user/PtlGetCurrentUser/ReqGetCurrentUser": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "base/BaseRequest"
                    }
                }
            ],
            "properties": [
                {
                    "id": 0,
                    "name": "from",
                    "type": {
                        "type": "String"
                    },
                    "optional": true
                },
                {
                    "id": 1,
                    "name": "fromUid",
                    "type": {
                        "type": "String"
                    },
                    "optional": true
                }
            ]
        },
        "user/PtlGetCurrentUser/ResGetCurrentUser": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "base/BaseResponse"
                    }
                }
            ],
            "properties": [
                {
                    "id": 0,
                    "name": "user",
                    "type": {
                        "type": "Reference",
                        "target": "models/CurrentUser/CurrentUser"
                    }
                }
            ]
        },
        "user/PtlGetDailyEnergy/ReqGetDailyEnergy": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "base/BaseRequest"
                    }
                }
            ]
        },
        "user/PtlGetDailyEnergy/ResGetDailyEnergy": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "base/BaseResponse"
                    }
                }
            ],
            "properties": [
                {
                    "id": 0,
                    "name": "gotFreeEnergy",
                    "type": {
                        "type": "Number",
                        "scalarType": "uint"
                    }
                },
                {
                    "id": 1,
                    "name": "nextGetTime",
                    "type": {
                        "type": "Number"
                    }
                }
            ]
        },
        "user/PtlGetEnergy/ReqGetEnergy": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "base/BaseRequest"
                    }
                }
            ],
            "properties": [
                {
                    "id": 0,
                    "name": "amount",
                    "type": {
                        "type": "Number",
                        "scalarType": "uint"
                    }
                },
                {
                    "id": 1,
                    "name": "reason",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        },
        "user/PtlGetEnergy/ResGetEnergy": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "base/BaseResponse"
                    }
                }
            ]
        },
        "user/PtlGetMine/ReqGetMine": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "base/BaseRequest"
                    }
                }
            ]
        },
        "user/PtlGetMine/ResGetMine": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "base/BaseResponse"
                    }
                }
            ],
            "properties": [
                {
                    "id": 0,
                    "name": "career",
                    "type": {
                        "type": "Interface",
                        "properties": [
                            {
                                "id": 0,
                                "name": "medals",
                                "type": {
                                    "type": "Number",
                                    "scalarType": "uint"
                                }
                            },
                            {
                                "id": 1,
                                "name": "medals1v1",
                                "type": {
                                    "type": "Number",
                                    "scalarType": "uint"
                                }
                            },
                            {
                                "id": 2,
                                "name": "medalsQunzhan",
                                "type": {
                                    "type": "Number",
                                    "scalarType": "uint"
                                }
                            },
                            {
                                "id": 3,
                                "name": "rank",
                                "type": {
                                    "type": "Number",
                                    "scalarType": "uint"
                                },
                                "optional": true
                            },
                            {
                                "id": 4,
                                "name": "rank1v1",
                                "type": {
                                    "type": "Number",
                                    "scalarType": "uint"
                                },
                                "optional": true
                            },
                            {
                                "id": 5,
                                "name": "rankQunzhan",
                                "type": {
                                    "type": "Number",
                                    "scalarType": "uint"
                                },
                                "optional": true
                            }
                        ]
                    }
                },
                {
                    "id": 1,
                    "name": "byteStyles",
                    "type": {
                        "type": "Array",
                        "elementType": {
                            "type": "Interface",
                            "properties": [
                                {
                                    "id": 0,
                                    "name": "name",
                                    "type": {
                                        "type": "String"
                                    }
                                },
                                {
                                    "id": 1,
                                    "name": "num",
                                    "type": {
                                        "type": "Number",
                                        "scalarType": "uint"
                                    }
                                }
                            ]
                        }
                    }
                },
                {
                    "id": 2,
                    "name": "qunzhanUser",
                    "type": {
                        "type": "Reference",
                        "target": "models/QunzhanUser/QunzhanUser"
                    }
                },
                {
                    "id": 3,
                    "name": "thisWeek",
                    "type": {
                        "type": "Interface",
                        "properties": [
                            {
                                "id": 0,
                                "name": "medals",
                                "type": {
                                    "type": "Number",
                                    "scalarType": "int"
                                }
                            },
                            {
                                "id": 1,
                                "name": "medals1v1",
                                "type": {
                                    "type": "Number",
                                    "scalarType": "int"
                                }
                            },
                            {
                                "id": 2,
                                "name": "medalsQunzhan",
                                "type": {
                                    "type": "Number",
                                    "scalarType": "int"
                                }
                            },
                            {
                                "id": 3,
                                "name": "rank",
                                "type": {
                                    "type": "Number",
                                    "scalarType": "uint"
                                },
                                "optional": true
                            },
                            {
                                "id": 4,
                                "name": "rank1v1",
                                "type": {
                                    "type": "Number",
                                    "scalarType": "uint"
                                },
                                "optional": true
                            },
                            {
                                "id": 5,
                                "name": "rankQunzhan",
                                "type": {
                                    "type": "Number",
                                    "scalarType": "uint"
                                },
                                "optional": true
                            }
                        ]
                    }
                },
                {
                    "id": 4,
                    "name": "thisMonth",
                    "type": {
                        "type": "Interface",
                        "properties": [
                            {
                                "id": 0,
                                "name": "medals",
                                "type": {
                                    "type": "Number",
                                    "scalarType": "int"
                                }
                            },
                            {
                                "id": 1,
                                "name": "medals1v1",
                                "type": {
                                    "type": "Number",
                                    "scalarType": "int"
                                }
                            },
                            {
                                "id": 2,
                                "name": "medalsQunzhan",
                                "type": {
                                    "type": "Number",
                                    "scalarType": "int"
                                }
                            },
                            {
                                "id": 3,
                                "name": "rank",
                                "type": {
                                    "type": "Number",
                                    "scalarType": "uint"
                                },
                                "optional": true
                            },
                            {
                                "id": 4,
                                "name": "rank1v1",
                                "type": {
                                    "type": "Number",
                                    "scalarType": "uint"
                                },
                                "optional": true
                            },
                            {
                                "id": 5,
                                "name": "rankQunzhan",
                                "type": {
                                    "type": "Number",
                                    "scalarType": "uint"
                                },
                                "optional": true
                            }
                        ]
                    }
                },
                {
                    "id": 5,
                    "name": "ugc",
                    "type": {
                        "type": "Interface",
                        "properties": [
                            {
                                "id": 0,
                                "name": "created",
                                "type": {
                                    "type": "Number",
                                    "scalarType": "uint"
                                }
                            },
                            {
                                "id": 1,
                                "name": "approved",
                                "type": {
                                    "type": "Number",
                                    "scalarType": "uint"
                                }
                            }
                        ]
                    }
                },
                {
                    "id": 6,
                    "name": "history1v1",
                    "type": {
                        "type": "Array",
                        "elementType": {
                            "type": "Interface",
                            "properties": [
                                {
                                    "id": 0,
                                    "name": "result",
                                    "type": {
                                        "type": "Union",
                                        "members": [
                                            {
                                                "id": 0,
                                                "type": {
                                                    "type": "Literal",
                                                    "literal": "win"
                                                }
                                            },
                                            {
                                                "id": 1,
                                                "type": {
                                                    "type": "Literal",
                                                    "literal": "draw"
                                                }
                                            },
                                            {
                                                "id": 2,
                                                "type": {
                                                    "type": "Literal",
                                                    "literal": "lose"
                                                }
                                            }
                                        ]
                                    }
                                },
                                {
                                    "id": 1,
                                    "name": "selfScore",
                                    "type": {
                                        "type": "Number",
                                        "scalarType": "uint"
                                    }
                                },
                                {
                                    "id": 2,
                                    "name": "oppScore",
                                    "type": {
                                        "type": "Number",
                                        "scalarType": "uint"
                                    }
                                },
                                {
                                    "id": 3,
                                    "name": "opponentInfo",
                                    "type": {
                                        "type": "Reference",
                                        "target": "models/UserInfo/UserInfo"
                                    }
                                }
                            ]
                        }
                    }
                },
                {
                    "id": 7,
                    "name": "historyQunzhan",
                    "type": {
                        "type": "Array",
                        "elementType": {
                            "type": "Interface",
                            "properties": [
                                {
                                    "id": 0,
                                    "name": "skinId",
                                    "type": {
                                        "type": "String"
                                    }
                                },
                                {
                                    "id": 1,
                                    "name": "joinBy",
                                    "type": {
                                        "type": "Reference",
                                        "target": "../roomProtocols/room/PtlJoinRoom/JoinBy"
                                    }
                                },
                                {
                                    "id": 2,
                                    "name": "isWin",
                                    "type": {
                                        "type": "Boolean"
                                    }
                                },
                                {
                                    "id": 3,
                                    "name": "endTime",
                                    "type": {
                                        "type": "Date"
                                    }
                                }
                            ]
                        }
                    }
                }
            ]
        },
        "../roomProtocols/room/PtlJoinRoom/JoinBy": {
            "type": "Union",
            "members": [
                {
                    "id": 0,
                    "type": {
                        "type": "Literal",
                        "literal": "随机匹配"
                    }
                },
                {
                    "id": 1,
                    "type": {
                        "type": "Literal",
                        "literal": "邀请同事"
                    }
                },
                {
                    "id": 2,
                    "type": {
                        "type": "Literal",
                        "literal": "面对面开黑"
                    }
                }
            ]
        },
        "user/PtlGetPointsHistory/ReqGetPointsHistory": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "base/BaseRequest"
                    }
                }
            ],
            "properties": [
                {
                    "id": 0,
                    "name": "page",
                    "type": {
                        "type": "Number",
                        "scalarType": "uint"
                    }
                },
                {
                    "id": 1,
                    "name": "pageSize",
                    "type": {
                        "type": "Number",
                        "scalarType": "uint"
                    }
                }
            ]
        },
        "user/PtlGetPointsHistory/ResGetPointsHistory": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "base/BaseResponse"
                    }
                }
            ],
            "properties": [
                {
                    "id": 0,
                    "name": "list",
                    "type": {
                        "type": "Array",
                        "elementType": {
                            "type": "Interface",
                            "properties": [
                                {
                                    "id": 0,
                                    "name": "createTime",
                                    "type": {
                                        "type": "Number"
                                    }
                                },
                                {
                                    "id": 1,
                                    "name": "change",
                                    "type": {
                                        "type": "Number"
                                    }
                                },
                                {
                                    "id": 2,
                                    "name": "reason",
                                    "type": {
                                        "type": "String"
                                    }
                                },
                                {
                                    "id": 3,
                                    "name": "after",
                                    "type": {
                                        "type": "Number"
                                    }
                                }
                            ]
                        }
                    }
                }
            ]
        },
        "user/PtlGetTodayRoundNum/ReqGetTodayRoundNum": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "base/BaseRequest"
                    }
                }
            ]
        },
        "user/PtlGetTodayRoundNum/ResGetTodayRoundNum": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "base/BaseResponse"
                    }
                }
            ],
            "properties": [
                {
                    "id": 0,
                    "name": "1v1",
                    "type": {
                        "type": "Number",
                        "scalarType": "uint"
                    }
                },
                {
                    "id": 1,
                    "name": "qunzhan",
                    "type": {
                        "type": "Number",
                        "scalarType": "uint"
                    }
                },
                {
                    "id": 2,
                    "name": "total",
                    "type": {
                        "type": "Number",
                        "scalarType": "uint"
                    }
                },
                {
                    "id": 3,
                    "name": "date",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 4,
                    "name": "exceedTodayMax",
                    "type": {
                        "type": "Boolean"
                    }
                }
            ]
        },
        "user/PtlGetUserInfo/ReqGetUserInfo": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "base/BaseRequest"
                    }
                }
            ],
            "properties": [
                {
                    "id": 0,
                    "name": "uid",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        },
        "user/PtlGetUserInfo/ResGetUserInfo": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "base/BaseResponse"
                    }
                }
            ],
            "properties": [
                {
                    "id": 0,
                    "name": "uid",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 1,
                    "name": "nickname",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 2,
                    "name": "avatar",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 3,
                    "name": "gender",
                    "type": {
                        "type": "Reference",
                        "target": "models/UserInfo/UserGender"
                    }
                }
            ]
        },
        "user/PtlRedeemStorePoints/ReqRedeemStorePoints": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "base/BaseRequest"
                    }
                }
            ],
            "properties": [
                {
                    "id": 0,
                    "name": "amount",
                    "type": {
                        "type": "Number",
                        "scalarType": "uint"
                    }
                }
            ]
        },
        "user/PtlRedeemStorePoints/ResRedeemStorePoints": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "base/BaseResponse"
                    }
                }
            ]
        },
        "user/PtlSign/ReqSign": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "base/BaseRequest"
                    }
                }
            ],
            "properties": [
                {
                    "id": 0,
                    "name": "url",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        },
        "user/PtlSign/ResSign": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "base/BaseResponse"
                    }
                }
            ],
            "properties": [
                {
                    "id": 0,
                    "name": "appId",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 1,
                    "name": "nonceStr",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 2,
                    "name": "timestamp",
                    "type": {
                        "type": "Number",
                        "scalarType": "uint"
                    }
                },
                {
                    "id": 3,
                    "name": "signature",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        },
        "user/PtlUpdateUser/ReqUpdateUser": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "base/BaseRequest"
                    }
                }
            ],
            "properties": [
                {
                    "id": 0,
                    "name": "nickname",
                    "type": {
                        "type": "String"
                    },
                    "optional": true
                },
                {
                    "id": 1,
                    "name": "avatar",
                    "type": {
                        "type": "String"
                    },
                    "optional": true
                }
            ]
        },
        "user/PtlUpdateUser/ResUpdateUser": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "base/BaseResponse"
                    }
                }
            ],
            "properties": [
                {
                    "id": 0,
                    "name": "user",
                    "type": {
                        "type": "Reference",
                        "target": "models/CurrentUser/CurrentUser"
                    }
                }
            ]
        },
        "user/PtlUpload/ReqUpload": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "base/BaseRequest"
                    }
                }
            ],
            "properties": [
                {
                    "id": 0,
                    "name": "data",
                    "type": {
                        "type": "Union",
                        "members": [
                            {
                                "id": 0,
                                "type": {
                                    "type": "Buffer"
                                }
                            },
                            {
                                "id": 1,
                                "type": {
                                    "type": "Buffer",
                                    "arrayType": "Uint8Array"
                                }
                            }
                        ]
                    }
                },
                {
                    "id": 1,
                    "name": "ext",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        },
        "user/PtlUpload/ResUpload": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "base/BaseResponse"
                    }
                }
            ],
            "properties": [
                {
                    "id": 0,
                    "name": "url",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        },
        "user/PtlUseEnergy/ReqUseEnergy": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "base/BaseRequest"
                    }
                }
            ],
            "properties": [
                {
                    "id": 0,
                    "name": "useAmount",
                    "type": {
                        "type": "Number",
                        "scalarType": "uint"
                    }
                },
                {
                    "id": 1,
                    "name": "reason",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        },
        "user/PtlUseEnergy/ResUseEnergy": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "base/BaseResponse"
                    }
                }
            ],
            "properties": [
                {
                    "id": 0,
                    "name": "newEnergy",
                    "type": {
                        "type": "Number",
                        "scalarType": "uint"
                    }
                }
            ]
        }
    }
};