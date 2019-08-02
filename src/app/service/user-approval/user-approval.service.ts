import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserApprovalService {

  constructor(
    private _http: HttpClient
  ) { }

  getApprovingList(targetPage: number, pageSize: number, filterOptions: any): Observable<any> {
    return this._http.post(`/user/getUserApproval`, {
      pageNum: targetPage,
      pageSize: pageSize,
      status: filterOptions.status
    })
  }

  filterApprovingList(targetPage: number, pageSize: number, filterOptions: any): Observable<any> {
    return this._http.post(`/user/getUserApproval`, {
      pageNum: targetPage,
      pageSize: pageSize,
      searchTimeType: filterOptions.searchTimeType,
      starTime: filterOptions.starTime,
      endTime: filterOptions.endTime,
      searchType: filterOptions.searchType,
      searchParameter: filterOptions.searchParameter
    })
  }
}
