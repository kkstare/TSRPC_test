import { PlayData } from "../models/PlayData";
import { BaseResponse } from '../base';
import { CurrentUser } from "../models/CurrentUser";

export interface ResLogin extends BaseResponse {
    user: CurrentUser,
    playData: Partial<PlayData>,
    isFirstLogin: boolean,
    __refresh: {
        sso: string
    }
}