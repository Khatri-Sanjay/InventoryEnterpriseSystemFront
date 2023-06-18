import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PredictionService {

  constructor(
    private httpClient: HttpClient
  ) { }

  apiUrlEndPoint: string = '';
  baseUrl: string= environment.baseUrl + '/prediction';

  listAllPrediction(): Observable<any>{
    return this.httpClient.get<any>(this.baseUrl);
  }

  onAddPrediction(prediction: any): Observable<any> {
    return this.httpClient.post(
      this.baseUrl.concat(this.apiUrlEndPoint),prediction
    );
  }

  onDeletePredictionById(id: Number): Observable<any> {
    return this.httpClient.delete(this.baseUrl + '/' + `${id}`);
  }

  getPredictionDetailsByItemId(id: number):Observable<any> {
    return this.httpClient.get(this.baseUrl + '/' + `${id}`);
  }

  editPredictionDetailsByItemId(id: number | undefined, items: any):Observable<any> {
    return this.httpClient.put(this.baseUrl + '/' + `${id}`, items);
  }
}
