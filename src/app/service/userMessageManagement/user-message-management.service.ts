import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient, HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserMessageManagementService {

  constructor(private _http: HttpClient) { }
  getMessageList(targetPage: number, pageSize: number, filterOptions: any): Observable<any> {
    if (filterOptions.starTime == 0 && filterOptions.endTime == 0 && filterOptions.sendName == '' && filterOptions.KEY == '') {
      return this._http.post(`/user/getAllMessages`, {
        pageSize: pageSize,
        pageNum: targetPage,
      })
    } else {
      return this._http.post(`/user/getAllMessages`, {
        pageSize: pageSize,
        pageNum: targetPage,
        fromNickName: filterOptions.sendName,
        content: filterOptions.KEY,
        starTime: filterOptions.starTime,
        endTime: filterOptions.endTime,

      })
    }
  }

  deleteMessage(idList): Observable<any> {
    const params = new HttpParams()
      .set('idList', `${idList}`);
    return this._http.delete(`/user/delMessages`, {params: params})
  }

}
