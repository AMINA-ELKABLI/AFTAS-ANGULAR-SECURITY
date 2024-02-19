import { RankingComp } from "./RankingComp";

export interface CompetitionResp {
        id: number,
        code: string,
        location: string,
        date: string,
        startTime: string,
        endTime: string,
        amount: number,
        numberOfParticipants: number,
        rankings: RankingComp[],

}


