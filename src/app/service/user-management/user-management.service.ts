import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserManagementService {

  constructor(private _http: HttpClient) { }

  getUserList(targetPage: number, pageSize: number, filterOption: []): Observable<any> {
    return this._http.post(`/api/getIndexUser`, {
      pageSize: pageSize,
      pageNum: targetPage,
    })
  }
}
