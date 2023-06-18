import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuthenticate: boolean = false;
  apiUrlEndPoint: string = 'user/login';
  logoutEndpoint: string = 'user/logout';
  baseUrl: string = environment.baseUrl;
  constructor(private httpClient: HttpClient) {}

  isLoggedIn(){
    return !! localStorage.getItem('userId');
  }

  login(login: any): Observable<any> {
    return this.httpClient.post<any>(
      this.baseUrl.concat(this.apiUrlEndPoint),
      login
    );
  }

  logout(logoutRequest: any): Observable<any> {
    console.log('auth service called');
    return this.httpClient.post<any>(
      this.baseUrl.concat(this.logoutEndpoint),
      logoutRequest
    );
  }
}
