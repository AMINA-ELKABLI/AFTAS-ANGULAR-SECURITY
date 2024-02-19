import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {jwtDecode} from "jwt-decode";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
 public isAuthenticated : boolean = false;
  roles :any;
  email : any;
  accessToken! : string;



  private baseUrl = 'http://localhost:8080/api/v1/auth';

  constructor(private http : HttpClient) { }


   public login(email : string, password : string){
    //let params= new HttpParams().set("email", email).set("password", password);
    return this.http.post(`${this.baseUrl}/authenticate` , {email , password})
      .pipe( map( () => { this.isAuthenticated = true ; console.log(this.isAuthenticated) }
      ) );
  }


  loadProfile(data: any) {
    this.isAuthenticated=true;
    this.accessToken =data['access-token'];
    let decodedJwt :any = jwtDecode(this.accessToken);
    this.email = decodedJwt.sub;
    this.roles = decodedJwt.roles;

  }
}
