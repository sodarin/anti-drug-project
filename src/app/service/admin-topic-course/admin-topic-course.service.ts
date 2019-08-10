import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AdminTopicCourseService {

  constructor(private _http: HttpClient) { }
  getPostList(targetPage: number, pageSize: number): Observable<any> {
    return this._http.post(`/news/getIndexPost`, {
      pageSize: pageSize,
      pageNum: targetPage,
    })
  }
  filterPostList(targetPage: number, pageSize: number, filterOptions: any): Observable<any> {
    return this._http.post(`/news/getIndexPost`, {
      pageSize: pageSize,
      pageNum: targetPage,
      postType: filterOptions.postType,
      attribute: filterOptions.attribute,
      title:  filterOptions.title,
    })
  }
}
