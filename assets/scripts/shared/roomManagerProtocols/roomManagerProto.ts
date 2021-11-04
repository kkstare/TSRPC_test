import { ServiceProto } from 'tsrpc-proto';
import { ReqEnterRoom, ResEnterRoom } from './PtlEnterRoom';
import { ReqStartMatch, ResStartMatch } from './PtlStartMatch';

export interface ServiceType {
    api: {
        "EnterRoom": {
            req: ReqEnterRoom,
            res: ResEnterRoom
        },
        "StartMatch": {
            req: ReqStartMatch,
            res: ResStartMatch
        }
    },
    msg: {

    }
}

export const serviceProto: ServiceProto<ServiceType> = {
    "version": 4,
    "services": [
        {
            "id": 0,
            "name": "EnterRoom",
            "type": "api",
            "conf": {}
        },
        {
            "id": 1,
            "name": "StartMatch",
            "type": "api",
            "conf": {}
        }
    ],
    "types": {
        "PtlEnterRoom/ReqEnterRoom": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "base_rm/BaseRequest"
                    }
                }
            ],
            "properties": [
                {
                    "id": 0,
                    "name": "options",
                    "type": {
                        "type": "Reference",
                        "target": "PtlEnterRoom/EnterRoomOptions"
                    }
                }
            ]
        },
        "base_rm/BaseRequest": {
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
        },
        "PtlEnterRoom/EnterRoomOptions": {
            "type": "Union",
            "members": [
                {
                    "id": 4,
                    "type": {
                        "type": "Interface",
                        "properties": [
                            {
                                "id": 0,
                                "name": "type",
                                "type": {
                                    "type": "Literal",
                                    "literal": "邀请同事"
                                }
                            },
                            {
                                "id": 1,
                                "name": "code",
                                "type": {
                                    "type": "Literal"
                                },
                                "optional": true
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
                                    "type": "Literal",
                                    "literal": "面对面开黑"
                                }
                            },
                            {
                                "id": 1,
                                "name": "code",
                                "type": {
                                    "type": "String"
                                }
                            }
                        ]
                    }
                }
            ]
        },
        "PtlEnterRoom/ResEnterRoom": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "base_rm/BaseResponse"
                    }
                }
            ],
            "properties": [
                {
                    "id": 0,
                    "name": "serverUrl",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 1,
                    "name": "roomId",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        },
        "base_rm/BaseResponse": {
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
        "PtlStartMatch/ReqStartMatch": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "base_rm/BaseRequest"
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
                    },
                    "optional": true
                },
                {
                    "id": 1,
                    "name": "activityId",
                    "type": {
                        "type": "String"
                    },
                    "optional": true
                }
            ]
        },
        "PtlStartMatch/ResStartMatch": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "base_rm/BaseResponse"
                    }
                }
            ],
            "properties": [
                {
                    "id": 0,
                    "name": "serverUrl",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 1,
                    "name": "roomId",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        }
    }
};