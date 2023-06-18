import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiEndPoint: string = '/user';
  apiLoginEndPoint: string = '/user/login';
  apiByIdEndPoint: string = 'user/by-id';
  baseUrl: string = environment.baseUrl;

  constructor(private httpClient: HttpClient) {}

  addUser(user: any): Observable<any> {
    return this.httpClient.post<any>(
      this.baseUrl.concat(this.apiEndPoint),
      user
    );
  }

  getUser(user: any): Observable<any> {
    return this.httpClient.get<any>(this.baseUrl.concat(this.apiEndPoint));
  }

  login(login: any): Observable<any> {
    debugger
    return this.httpClient.post<any>(
      this.baseUrl.concat(this.apiLoginEndPoint),
      login
    );
  }

  getUserById(id: any): Observable<any> {
    return this.httpClient.get<any>(
      this.baseUrl.concat(this.apiByIdEndPoint).concat('/' + id)
    );
  }
}
