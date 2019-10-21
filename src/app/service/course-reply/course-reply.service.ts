import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, Subject} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CourseReplyService {

  changeStatus: Subject<number> = new BehaviorSubject<number>(1);

  constructor(private _http: HttpClient) { }
  getReplyList(targetPage: number, pageSize: number, filterOptions: any): Observable<any> {
    if (filterOptions.searchParameter == '' && filterOptions.keyword == '') {
      return this._http.get(`/course/getAllQuestions?pageSize=${pageSize}&pageNum=${targetPage}`)
    } else {
      return this._http.get(`/course/getAllQuestions?pageSize=${pageSize}&pageNum=${targetPage}&authorName=${filterOptions.searchParameter}&keyWord=${filterOptions.keyword}&searchType=${filterOptions.topic}`)
    }

  }

  deleteQuestion(id: string): Observable<any> {
    return this._http.delete(`/course/deleteQuestion?id=${id}`)
  }

  deleteQuestionList(list: any): Observable<any> {
    return this._http.delete(`/course/deleteQuestionList?deleteList=${list}`)
  }

  remindTeacher(id: string): Observable<any> {
    return this._http.get(`/course/remindTeacherOfQuestion?id=${id}`)
  }

  getNotReplyList(targetPage: number, pageSize: number, filterOptions: any): Observable<any> {
    if (filterOptions.searchParameter == '' && filterOptions.keyword == '') {
      return this._http.get(`/course/getNoPostQuestions?pageSize=${pageSize}&pageNum=${targetPage}`)
    } else {
      return this._http.get(`/course/getNoPostQuestions?pageSize=${pageSize}&pageNum=${targetPage}&authorName=${filterOptions.searchParameter}&keyWord=${filterOptions.keyword}&searchType=${filterOptions.topic}`)
    }
  }
}
