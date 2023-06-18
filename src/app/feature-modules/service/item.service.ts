import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(
    private httpClient : HttpClient
  ) { }

  // getItemsDetailsByItemId(itemId : any) {
  //   throw new Error('Method not implemented');
  // }

  apiUrlEndPoint: string = '';
  baseUrl: string= environment.baseUrl + '/items';

  listAllItems(): Observable<any>{
    return this.httpClient.get<any>(this.baseUrl);
  }

  onAddItems(items: any): Observable<any> {
    return this.httpClient.post(
      this.baseUrl.concat(this.apiUrlEndPoint),items
    );
  }

  onDeleteItemsById(id: Number): Observable<any> {
    return this.httpClient.delete(this.baseUrl + '/' + `${id}`);
  }

  getItemsDetailsByItemId(id: number):Observable<any> {
    return this.httpClient.get(this.baseUrl + '/' + `${id}`);
  }

  editItemsDetailsByItemId(id: number | undefined, items: any):Observable<any> {
    return this.httpClient.put(this.baseUrl + '/' + `${id}`, items);
  }


}
