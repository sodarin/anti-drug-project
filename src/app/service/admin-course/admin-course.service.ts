import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminCourseService {

  constructor(
    private _http: HttpClient
  ) { }

  getCourseList(targetPage: number, pageSize: number): Observable<any> {
    return this._http.post(`/course/xxxx`, {
      pageNum: targetPage,
      pageSize: pageSize
    })
  }

  getRecommenderCourseList(targetPage: number, pageSize: number): Observable<any> {
    return this._http.post(`/course/xxx`, {
      pageNum: targetPage,
      pageSize: pageSize
    })
  }

  getStatisticsList(targetPage: number, pageSize: number): Observable<any> {
    return this._http.post(`/course/xxx`, {
      pageNum: targetPage,
      pageSize: pageSize
    })
  }

  getTaskListByCourseId(courseId): Observable<any> {
    return this._http.get(`/course/courseId`)
  }
}
