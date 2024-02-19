import { Time } from "@angular/common";
import {RankingComp} from "./RankingComp";

export interface CompetitionReq {
    code: string,
    date: Date,
    startTime: Date,
    endTime: Date,
    numberOfParticipants: number,
    location: string,
    amount: number,



}



