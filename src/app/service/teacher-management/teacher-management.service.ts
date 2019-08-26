import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TeacherManagementService {

  constructor(private _http: HttpClient) { }

  getUserList(targetPage: number, pageSize: number, filterOption: [] = null): Observable<any> {
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


}
