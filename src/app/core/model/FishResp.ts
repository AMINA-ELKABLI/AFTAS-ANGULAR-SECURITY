import { LevelResp } from "./LevelResp";

export interface FishResp {
        id:number,
       num:number,
       name: string,
       average_weight: number,
       level: LevelResp,
}
