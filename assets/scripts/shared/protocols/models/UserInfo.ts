export interface UserInfo {
    uid: string,
    nickname: string,
    avatar: string,
    gender: UserGender,
    medals: number
}

export enum UserGender {
    Unknown,
    Male,
    Female
}