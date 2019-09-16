import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TeacherManagementService {

  constructor(private _http: HttpClient) { }

  getUserList(targetPage: number, pageSize: number, filterOption: [] = null): Observable<any> {
    const httpParam = new HttpParams()
      .set('pageNum', `${targetPage}`)
      .set('pageSize', `${pageSize}`);
    return this._http.get(`/user/getAllTeachers`, {
      params: httpParam
    })
  }

  getUserDetailById(userId: string): Observable<any> {
    return this._http.get(`/user/getUserDetail?userId=${userId}`)
  }

  teacherFilter(targetPage: number, pageSize: number,nickName: string): Observable<any> {
    const httpParam = new HttpParams()
      .set('pageNum', `${targetPage}`)
      .set('pageSize', `${pageSize}`)
      .set('nickName', `${nickName}`);
    return this._http.get(`/user/getAllTeachers`, {
      params: httpParam
    })
  }

  changePromoted(userId: string): Observable<any>{
    return this._http.put("/user/updatePromoted",
      {
        "promoted": 0,
        "userId": userId
      })
  }

  changePromotedSeq(userId: string,promotedSeq: number): Observable<any> {
    return this._http.put("/user/updatePromotedSeq",
      {
        "promoted": 1,
        "promotedSeq": promotedSeq,
        "userId": userId
      })
  }



}
