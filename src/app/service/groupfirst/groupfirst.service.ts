import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GroupfirstService {

  constructor(private _http: HttpClient) { }

  getTopicList(targetPage: number, pageSize: number): Observable<any> {
    return this._http.post(`/group/getIndexGroup`, {
      pageSize: pageSize,
      pageNum: targetPage,
    })
  }
  /*
  filterTopic(targetPage: number, pageSize: number, filterOptions: any): Observable<any> {
    return this._http.post(`/group/getIndexGroup`, {
      pageSize: pageSize,
      pageNum: targetPage,
      state: filterOptions.state,
      searchParameter: filterOptions.searchParameter,
      attribute: filterOptions.attribute
    })
  }*/

}
