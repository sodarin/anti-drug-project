import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginLogService {

  constructor(
    private _http: HttpClient
  ) { }

  getLoginLogList(pageIndex: number, pageSize: number, filterOptions: any): Observable<any> {
    if (filterOptions.startTime == 0 && filterOptions.keyword == '') {
      return this._http.get(`/login/getLoginLog?pageSize=${pageSize}&pageNum=${pageIndex}`)
    } else {
      return this._http.get(`/login/getLoginLog?pageSize=${pageSize}&pageNum=${pageIndex}&keyword=${filterOptions.keyword}`)
    }
  }
}
