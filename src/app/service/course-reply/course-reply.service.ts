import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CourseReplyService {

  constructor(private _http: HttpClient) { }
  getReplyList(targetPage: number, pageSize: number): Observable<any> {
    return this._http.post(`/group/getIndexGroup`, {
      pageSize: pageSize,
      pageNum: targetPage,
    })
  }
  filterReplyList(targetPage: number, pageSize: number, filterOptions: any): Observable<any> {
    return this._http.post(`/group/getIndexGroup`, {
      pageSize: pageSize,
      pageNum: targetPage,
      topic: filterOptions.topic,
      searchParameter: filterOptions.searchParameter,
    })
  }
}
