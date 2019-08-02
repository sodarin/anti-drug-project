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

  updateUserDetail(
    userId: string, trueName: string, gender: string, idcard: string, mobile: string, company: string, job: string, iam: string, signature: string, site: string,
    weibo: string, weixin: string, qq: string, about: string
  ): Observable<any> {
    return this._http.post(`/user/updateUserDetail`, {
      id: userId,
      truename: trueName,
      gender: gender,
      idcard: idcard,
      mobile: mobile,
      company: company,
      job: job,
      iam: iam,
      signature: signature,
      site: site,
      weibo: weibo,
      weixin: weixin,
      qq: qq,
      about: about
    })
  }

  uploadFile(file: any): Observable<any> {
    const headerOptions ={
      headers: new HttpHeaders({
        'enctype': 'multipart/form-data'
      })
    };
    return this._http.post(`/user/uploadAvatar`, {
      file: file
    }, headerOptions)
  }

}
