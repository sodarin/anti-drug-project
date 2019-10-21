import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserStatisticsService {

  constructor(
    private _http: HttpClient
  ) { }

  getUserStatisticTable(targetPage: number, pageSize: number, filterOptions): Observable<any> {
    if (filterOptions.starTime == 0 && filterOptions.searchParameter == '') {
      return this._http.get(`/user/getUserDataStatisticsList?pageSize=${pageSize}&pageNum=${targetPage}`)
    } else {
      return this._http.get(`/user/searchUserDataStatistics?nickName=${filterOptions.searchParameter}&pageSize=${pageSize}&pageNum=${targetPage}`)
    }

  }
  exportData(): Observable<any> {
    return this._http.get(`/user/xxx`, {responseType: 'blob'});
  }

}
