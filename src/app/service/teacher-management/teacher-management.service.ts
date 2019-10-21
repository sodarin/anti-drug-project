import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, Subject} from 'rxjs';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TeacherManagementService {

  changeStatus: Subject<number> = new BehaviorSubject<number>(1);

  constructor(private _http: HttpClient) { }

  getUserList(targetPage: number, pageSize: number, filterOption: any, promoted = 0): Observable<any> {
    if (filterOption == '') {
      return this._http.get(`/user/getAllTeachers?pageNum=${targetPage}&pageSize=${pageSize}&promoted=${promoted}`)
    } else {
      const httpParam = new HttpParams()
        .set('pageNum', `${targetPage}`)
        .set('pageSize', `${pageSize}`)
        .set('promoted', `${promoted}`)
        .set('nickName', `${filterOption}`);
      return this._http.get(`/user/getAllTeachers`, {
        params: httpParam
      })
    }


  }

  getUserDetailById(userId: string): Observable<any> {
    return this._http.get(`/user/getUserDetail?userId=${userId}`)
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
