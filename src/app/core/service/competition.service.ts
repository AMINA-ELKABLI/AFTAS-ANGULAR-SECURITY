import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { query } from '@angular/animations';

@Injectable({
  providedIn: 'root'
})
export class CompetitionService {

  constructor(private http:HttpClient) {

  }
  public getcount():Observable<any>{
    return this.http.get<any>("http://localhost:8080/api/competitions/count");
  }
  public getTodayCompetition():Observable<any>{
    return this.http.get<any>("http://localhost:8080/api/competitions/today");
  }
  public getCompetitions():Observable<any>{
    return this.http.get<any>("http://localhost:8080/api/competitions");
  }
  public getCompetition(code:string):Observable<any>{
    return this.http.get<any>("http://localhost:8080/api/competitions/"+code);
  }
  public getCompetitionsPaginatedSearch(page:number=0,size:number=15,search:string):Observable<any>{
    let query:string = '';
    if(search!=''){
      query='?page='+page+'&size='+size+'&search='+search;
    }
    else{
      query='?page='+page+'&size='+size;
    }
    return this.http.get<any>("http://localhost:8080/api/competitions"+query);
  }
  public addCompetition(competition:any):Observable<any>{
    return this.http.post<any>("http://localhost:8080/api/competitions",competition);
  }
  public addMemberToCompetition(competitionId:string,memberId:number):Observable<any>{
    let ranking  =
      {
        memberNum:memberId ,
        competitionCode: competitionId
     };
    return this.http.post<any>("http://localhost:8080/api/rankings",ranking);
  }
  public addHuntingToCompetition(ranking:any):Observable<any>{
    return this.http.post<any>("http://localhost:8080/api/huntings",ranking);
  }
}
