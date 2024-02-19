import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private baseUrl = 'http://localhost:8080/api/v1/auth';
  role!: string;

  constructor(private http: HttpClient) { }

  public register(lastname: string, firstname: string, email: string, password: string) {
    this.role = "ADMIN";
    return this.http.post(`${this.baseUrl}/register`, { lastname, firstname, email, password, role: this.role });
  }
}

