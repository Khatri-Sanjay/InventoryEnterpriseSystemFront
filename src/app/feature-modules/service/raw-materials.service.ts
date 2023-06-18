import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RawMaterialsService {

  constructor(
    private httpClient: HttpClient
  ) { }

  apiUrlEndPoint: string = '';
  baseUrl: string= environment.baseUrl + '/rawMaterials';

  listAllRawMaterials(): Observable<any>{
    return this.httpClient.get<any>(this.baseUrl);
  }

  onAddRawMaterials(rawMaterials: any): Observable<any> {
    return this.httpClient.post(
      this.baseUrl.concat(this.apiUrlEndPoint),rawMaterials
    );
  }

  onDeleteRawMaterialsById(id: Number): Observable<any> {
    return this.httpClient.delete(this.baseUrl + '/' + `${id}`);
  }

  getRawMaterialsDetailsById(id: number):Observable<any> {
    return this.httpClient.get(this.baseUrl + '/' + `${id}`);
  }

  editRawMaterialsDetailsById(id: number | undefined, rawMaterials: any):Observable<any> {
    return this.httpClient.put(this.baseUrl + '/' + `${id}`, rawMaterials);
  }
}
