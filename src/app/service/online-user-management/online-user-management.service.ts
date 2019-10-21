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

  getOnlineUserList(targetPage: number, pageSize: number, filterOptions: string): Observable<any> {
    if (filterOptions == '') {
      return this._http.get(`/login/getOnlineUser?pageNum=${targetPage}&pageSize=${pageSize}`)
    } else {
      return this._http.get(`/login/getOnlineUser?pageNum=${targetPage}&pageSize=${pageSize}&username=${filterOptions}`)
    }

  }
}
