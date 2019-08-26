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

  getUserStatisticTable(targetPage: number, pageSize: number): Observable<any> {
    return this._http.post(`/user/getIndexUser`, {
      pageSize: pageSize,
      pageNum: targetPage,
    })
  }
  getUserDetailById(userId: string): Observable<any> {
    return this._http.post(`/user/getUserDetail`, {
      userId: userId
    })
  }
  exportData(): Observable<any> {
    return this._http.get(`/user/xxx`, {responseType: 'blob'});
  }

}
