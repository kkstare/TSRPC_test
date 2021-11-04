import { ActivityConfig } from "./ActivityConfig";

/** 管理后台用 */
export interface AdminActivityConfig extends ActivityConfig {
    // 参与权限
    authority: {
        // 允许所有人参与
        all: boolean,

        // 以下条件是且的关系
        // 允许的雇员类型
        filterEmployeeTypes?: string[],
        // 允许的工号
        filterJobNos?: string[]
    }
}