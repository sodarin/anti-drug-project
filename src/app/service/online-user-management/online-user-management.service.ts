import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OnlineUserManagementService {

  constructor(
    private _http: HttpClient
  ) { }

  getOnlineUserList(targetPage: number, pageSize: number, filterOption: [] = null): Observable<any> {
    return this._http.post(`/user/xxx`, {
      pageSize: pageSize,
      pageNum: targetPage
    })
  }
}
