import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserMessageManagementService {

  constructor(private _http: HttpClient) { }
  getMessageList(targetPage: number, pageSize: number): Observable<any> {
    return this._http.post(``, {
      pageSize: pageSize,
      pageNum: targetPage,
    })
  }
  filterUserList(targetPage: number, pageSize: number, filterOptions: any): Observable<any> {
    return this._http.post(``, {
      pageSize: pageSize,
      pageNum: targetPage,
      sendName: filterOptions.inputSendName,
      KEY: filterOptions.inputKey,
      searchTimeType: filterOptions.searchTimeType,
      starTime: filterOptions.starTime,
      endTime: filterOptions.endTime,

    })
  }

}
