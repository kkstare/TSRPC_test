import { ServiceProto } from 'tsrpc-proto';
import { MsgUserOp } from './game/client/MsgUserOp';
import { MsgUserReady } from './game/client/MsgUserReady';
import { ReqGetRoomRank, ResGetRoomRank } from './game/PtlGetRoomRank';
import { MsgGameOver } from './game/server/MsgGameOver';
import { MsgNextQuestion } from './game/server/MsgNextQuestion';
import { MsgOpFrame } from './game/server/MsgOpFrame';
import { MsgOpResult } from './game/server/MsgOpResult';
import { MsgRoundEnd } from './game/server/MsgRoundEnd';
import { MsgRoundStart } from './game/server/MsgRoundStart';
import { MsgServerHeartBeat } from './game/server/MsgServerHeartBeat';
import { MsgChat } from './room/MsgChat';
import { MsgInitRoomInfo } from './room/MsgInitRoomInfo';
import { MsgRoomUserExit } from './room/MsgRoomUserExit';
import { MsgRoomUserJoin } from './room/MsgRoomUserJoin';
import { MsgStartGame } from './room/MsgStartGame';
import { MsgStartMatch } from './room/MsgStartMatch';
import { MsgUpdateRoomState } from './room/MsgUpdateRoomState';
import { ReqJoinRoom, ResJoinRoom } from './room/PtlJoinRoom';
import { ReqSendChat, ResSendChat } from './room/PtlSendChat';

export interface ServiceType {
    api: {
        "game/GetRoomRank": {
            req: ReqGetRoomRank,
            res: ResGetRoomRank
        },
        "room/JoinRoom": {
            req: ReqJoinRoom,
            res: ResJoinRoom
        },
        "room/SendChat": {
            req: ReqSendChat,
            res: ResSendChat
        }
    },
    msg: {
        "game/client/UserOp": MsgUserOp,
        "game/client/UserReady": MsgUserReady,
        "game/server/GameOver": MsgGameOver,
        "game/server/NextQuestion": MsgNextQuestion,
        "game/server/OpFrame": MsgOpFrame,
        "game/server/OpResult": MsgOpResult,
        "game/server/RoundEnd": MsgRoundEnd,
        "game/server/RoundStart": MsgRoundStart,
        "game/server/ServerHeartBeat": MsgServerHeartBeat,
        "room/Chat": MsgChat,
        "room/InitRoomInfo": MsgInitRoomInfo,
        "room/RoomUserExit": MsgRoomUserExit,
        "room/RoomUserJoin": MsgRoomUserJoin,
        "room/StartGame": MsgStartGame,
        "room/StartMatch": MsgStartMatch,
        "room/UpdateRoomState": MsgUpdateRoomState
    }
}

export const serviceProto: ServiceProto<ServiceType> = {
    "version": 5,
    "services": [
        {
            "id": 0,
            "name": "game/client/UserOp",
            "type": "msg"
        },
        {
            "id": 1,
            "name": "game/client/UserReady",
            "type": "msg"
        },
        {
            "id": 2,
            "name": "game/GetRoomRank",
            "type": "api",
            "conf": {}
        },
        {
            "id": 3,
            "name": "game/server/GameOver",
            "type": "msg"
        },
        {
            "id": 4,
            "name": "game/server/NextQuestion",
            "type": "msg"
        },
        {
            "id": 5,
            "name": "game/server/OpFrame",
            "type": "msg"
        },
        {
            "id": 6,
            "name": "game/server/OpResult",
            "type": "msg"
        },
        {
            "id": 7,
            "name": "game/server/RoundEnd",
            "type": "msg"
        },
        {
            "id": 8,
            "name": "game/server/RoundStart",
            "type": "msg"
        },
        {
            "id": 18,
            "name": "game/server/ServerHeartBeat",
            "type": "msg"
        },
        {
            "id": 9,
            "name": "room/Chat",
            "type": "msg"
        },
        {
            "id": 10,
            "name": "room/InitRoomInfo",
            "type": "msg"
        },
        {
            "id": 11,
            "name": "room/RoomUserExit",
            "type": "msg"
        },
        {
            "id": 12,
            "name": "room/RoomUserJoin",
            "type": "msg"
        },
        {
            "id": 13,
            "name": "room/StartGame",
            "type": "msg"
        },
        {
            "id": 14,
            "name": "room/StartMatch",
            "type": "msg"
        },
        {
            "id": 15,
            "name": "room/UpdateRoomState",
            "type": "msg"
        },
        {
            "id": 16,
            "name": "room/JoinRoom",
            "type": "api",
            "conf": {}
        },
        {
            "id": 17,
            "name": "room/SendChat",
            "type": "api",
            "conf": {}
        }
    ],
    "types": {
        "game/client/MsgUserOp/MsgUserOp": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "questionIndex",
                    "type": {
                        "type": "Number",
                        "scalarType": "uint"
                    }
                },
                {
                    "id": 1,
                    "name": "answer",
                    "type": {
                        "type": "Number",
                        "scalarType": "uint"
                    }
                }
            ]
        },
        "game/client/MsgUserReady/MsgUserReady": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "roundId",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        },
        "game/PtlGetRoomRank/ReqGetRoomRank": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "base_room/BaseRequest"
                    }
                }
            ]
        },
        "base_room/BaseRequest": {
            "type": "Interface"
        },
        "game/PtlGetRoomRank/ResGetRoomRank": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "base_room/BaseResponse"
                    }
                }
            ],
            "properties": [
                {
                    "id": 0,
                    "name": "ranks",
                    "type": {
                        "type": "Array",
                        "elementType": {
                            "type": "Reference",
                            "target": "game/server/MsgRoundEnd/GameRankItem"
                        }
                    }
                }
            ]
        },
        "base_room/BaseResponse": {
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
                                "name": "medals",
                                "type": {
                                    "type": "Number"
                                },
                                "optional": true
                            },
                            {
                                "id": 1,
                                "name": "points",
                                "type": {
                                    "type": "Number"
                                },
                                "optional": true
                            },
                            {
                                "id": 2,
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
        "game/server/MsgRoundEnd/GameRankItem": {
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
                    "name": "score",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 4,
                    "name": "rank",
                    "type": {
                        "type": "Number",
                        "scalarType": "uint"
                    }
                },
                {
                    "id": 5,
                    "name": "isExited",
                    "type": {
                        "type": "Boolean"
                    },
                    "optional": true
                }
            ]
        },
        "game/server/MsgGameOver/MsgGameOver": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "rightNum",
                    "type": {
                        "type": "Number",
                        "scalarType": "uint"
                    }
                },
                {
                    "id": 1,
                    "name": "totalQuestion",
                    "type": {
                        "type": "Number",
                        "scalarType": "uint"
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
                    "name": "dropedPicPieces",
                    "type": {
                        "type": "Array",
                        "elementType": {
                            "type": "Reference",
                            "target": "game/server/MsgGameOver/QunzhanPicturePiece"
                        }
                    }
                },
                {
                    "id": 4,
                    "name": "medals",
                    "type": {
                        "type": "Interface",
                        "properties": [
                            {
                                "id": 0,
                                "name": "change",
                                "type": {
                                    "type": "Number",
                                    "scalarType": "int"
                                }
                            },
                            {
                                "id": 1,
                                "name": "after",
                                "type": {
                                    "type": "Number",
                                    "scalarType": "uint"
                                }
                            },
                            {
                                "id": 2,
                                "name": "qunzhanChange",
                                "type": {
                                    "type": "Number",
                                    "scalarType": "int"
                                }
                            },
                            {
                                "id": 3,
                                "name": "qunzhanAfter",
                                "type": {
                                    "type": "Number",
                                    "scalarType": "uint"
                                }
                            }
                        ]
                    },
                    "optional": true
                },
                {
                    "id": 5,
                    "name": "points",
                    "type": {
                        "type": "Interface",
                        "properties": [
                            {
                                "id": 0,
                                "name": "change",
                                "type": {
                                    "type": "Number",
                                    "scalarType": "int"
                                }
                            },
                            {
                                "id": 1,
                                "name": "after",
                                "type": {
                                    "type": "Number",
                                    "scalarType": "uint"
                                }
                            }
                        ]
                    }
                }
            ]
        },
        "game/server/MsgGameOver/QunzhanPicturePiece": {
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
                },
                {
                    "id": 5,
                    "name": "index",
                    "type": {
                        "type": "Number",
                        "scalarType": "uint"
                    }
                }
            ]
        },
        "game/server/MsgNextQuestion/MsgNextQuestion": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "questionIndex",
                    "type": {
                        "type": "Number",
                        "scalarType": "uint"
                    }
                },
                {
                    "id": 1,
                    "name": "totalQuestion",
                    "type": {
                        "type": "Number",
                        "scalarType": "uint"
                    }
                },
                {
                    "id": 2,
                    "name": "question",
                    "type": {
                        "type": "Reference",
                        "target": "../protocols/models/QuizQuestion/QuizQuestion"
                    }
                },
                {
                    "id": 3,
                    "name": "totalTime",
                    "type": {
                        "type": "Number",
                        "scalarType": "uint"
                    }
                }
            ]
        },
        "../protocols/models/QuizQuestion/QuizQuestion": {
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
        "game/server/MsgOpFrame/MsgOpFrame": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "questionIndex",
                    "type": {
                        "type": "Number",
                        "scalarType": "uint"
                    }
                },
                {
                    "id": 1,
                    "name": "userStateChanges",
                    "type": {
                        "type": "Interface",
                        "indexSignature": {
                            "keyType": "String",
                            "type": {
                                "type": "Interface",
                                "properties": [
                                    {
                                        "id": 0,
                                        "name": "answer",
                                        "type": {
                                            "type": "Number",
                                            "scalarType": "uint"
                                        }
                                    },
                                    {
                                        "id": 1,
                                        "name": "actionIndex",
                                        "type": {
                                            "type": "Number",
                                            "scalarType": "uint"
                                        }
                                    }
                                ]
                            }
                        }
                    }
                },
                {
                    "id": 2,
                    "name": "index",
                    "type": {
                        "type": "Number",
                        "scalarType": "uint"
                    }
                }
            ]
        },
        "game/server/MsgOpResult/MsgOpResult": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "questionIndex",
                    "type": {
                        "type": "Number",
                        "scalarType": "uint"
                    }
                },
                {
                    "id": 1,
                    "name": "userStates",
                    "type": {
                        "type": "Interface",
                        "indexSignature": {
                            "keyType": "String",
                            "type": {
                                "type": "Interface",
                                "properties": [
                                    {
                                        "id": 0,
                                        "name": "answer",
                                        "type": {
                                            "type": "Number",
                                            "scalarType": "uint"
                                        }
                                    },
                                    {
                                        "id": 1,
                                        "name": "actionIndex",
                                        "type": {
                                            "type": "Number",
                                            "scalarType": "uint"
                                        }
                                    }
                                ]
                            }
                        }
                    }
                },
                {
                    "id": 2,
                    "name": "rightAnswer",
                    "type": {
                        "type": "Number",
                        "scalarType": "uint"
                    }
                },
                {
                    "id": 3,
                    "name": "rands",
                    "type": {
                        "type": "Array",
                        "elementType": {
                            "type": "Number"
                        }
                    }
                },
                {
                    "id": 5,
                    "name": "index",
                    "type": {
                        "type": "Number",
                        "scalarType": "uint"
                    }
                }
            ]
        },
        "game/server/MsgRoundEnd/MsgRoundEnd": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "roundRanks",
                    "type": {
                        "type": "Array",
                        "elementType": {
                            "type": "Reference",
                            "target": "game/server/MsgRoundEnd/GameRankItem"
                        }
                    }
                },
                {
                    "id": 1,
                    "name": "roomRanks",
                    "type": {
                        "type": "Array",
                        "elementType": {
                            "type": "Reference",
                            "target": "game/server/MsgRoundEnd/GameRankItem"
                        }
                    },
                    "optional": true
                }
            ]
        },
        "game/server/MsgRoundStart/MsgRoundStart": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "roungId",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 1,
                    "name": "users",
                    "type": {
                        "type": "Array",
                        "elementType": {
                            "type": "Reference",
                            "target": "../protocols/models/QunzhanRoom/QunzhanRoomUser"
                        }
                    }
                },
                {
                    "id": 2,
                    "name": "totalQuestion",
                    "type": {
                        "type": "Number",
                        "scalarType": "uint"
                    }
                }
            ]
        },
        "../protocols/models/QunzhanRoom/QunzhanRoomUser": {
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
        "game/server/MsgServerHeartBeat/MsgServerHeartBeat": {
            "type": "Interface"
        },
        "room/MsgChat/MsgChat": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "messages",
                    "type": {
                        "type": "Array",
                        "elementType": {
                            "type": "Interface",
                            "properties": [
                                {
                                    "id": 0,
                                    "name": "sn",
                                    "type": {
                                        "type": "Number",
                                        "scalarType": "uint"
                                    }
                                },
                                {
                                    "id": 1,
                                    "name": "user",
                                    "type": {
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
                                            }
                                        ]
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
                                    "name": "time",
                                    "type": {
                                        "type": "Number",
                                        "scalarType": "uint"
                                    }
                                }
                            ]
                        }
                    }
                }
            ]
        },
        "room/MsgInitRoomInfo/MsgInitRoomInfo": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "state",
                    "type": {
                        "type": "Reference",
                        "target": "../protocols/models/QunzhanRoom/QunzhanRoomState"
                    }
                },
                {
                    "id": 1,
                    "name": "users",
                    "type": {
                        "type": "Array",
                        "elementType": {
                            "type": "Reference",
                            "target": "../protocols/models/QunzhanRoom/QunzhanRoomUser"
                        }
                    }
                }
            ]
        },
        "../protocols/models/QunzhanRoom/QunzhanRoomState": {
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
        "room/MsgRoomUserExit/MsgRoomUserExit": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "roomId",
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
                }
            ]
        },
        "room/MsgRoomUserJoin/MsgRoomUserJoin": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "roomId",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 1,
                    "name": "user",
                    "type": {
                        "type": "Reference",
                        "target": "../protocols/models/QunzhanRoom/QunzhanRoomUser"
                    }
                }
            ]
        },
        "room/MsgStartGame/MsgStartGame": {
            "type": "Interface"
        },
        "room/MsgStartMatch/MsgStartMatch": {
            "type": "Interface"
        },
        "room/MsgUpdateRoomState/MsgUpdateRoomState": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "state",
                    "type": {
                        "type": "Reference",
                        "target": "../protocols/models/QunzhanRoom/QunzhanRoomState"
                    }
                }
            ]
        },
        "room/PtlJoinRoom/ReqJoinRoom": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "base_room/BaseRequest"
                    }
                }
            ],
            "properties": [
                {
                    "id": 0,
                    "name": "roomId",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 1,
                    "name": "joinBy",
                    "type": {
                        "type": "Reference",
                        "target": "room/PtlJoinRoom/JoinBy"
                    }
                },
                {
                    "id": 2,
                    "name": "sso",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 3,
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
        "room/PtlJoinRoom/JoinBy": {
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
        "room/PtlJoinRoom/ResJoinRoom": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "base_room/BaseResponse"
                    }
                }
            ]
        },
        "room/PtlSendChat/ReqSendChat": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "base_room/BaseRequest"
                    }
                }
            ],
            "properties": [
                {
                    "id": 0,
                    "name": "content",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        },
        "room/PtlSendChat/ResSendChat": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "base_room/BaseResponse"
                    }
                }
            ]
        }
    }
};