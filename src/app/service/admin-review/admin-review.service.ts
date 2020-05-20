import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminReviewService {

  constructor(
    private _http: HttpClient
  ) { }

  getCourseReviews(targetPage: number, pageSize: number, filterOptions: any): Observable<any> {
    if (filterOptions.rating == '' && filterOptions.author == '' && filterOptions.course == '' && filterOptions.keyword == '') {
      return this._http.get(`/course/getAllCourseReviews?pageNum=${targetPage}&pageSize=${pageSize}`)
    } else {
      return this._http.get(`/course/getAllCourseReviews?pageNum=${targetPage}&pageSize=${pageSize}&courseTitle=${filterOptions.course}&keyWord=${filterOptions.keyword}&rating=${filterOptions.rating}&authorName=${filterOptions.author}`)
    }
  }

  deleteCourseReview(id: string): Observable<any> {
    return this._http.delete(`/course/deleteCourseReview?id=${id}`)
  }

  deleteCourseReviewList(list: any): Observable<any> {
    return this._http.delete(`/course/deleteCourseReviewList?deleteList=${list}`)
  }

  getClassReviews(targetPage: number, pageSize: number, filterOptions: any): Observable<any> {
    if (filterOptions.rating == '' && filterOptions.author == '' && filterOptions.course == '' && filterOptions.keyword == '') {
      return this._http.get(`/classroom/background/getBackGroundReview?pageNum=${targetPage}&pageSize=${pageSize}`)
    } else {
      return this._http.get(`/classroom/background/getBackGroundReview?pageNum=${targetPage}&pageSize=${pageSize}&classroomTitle=${filterOptions.course}&content=${filterOptions.keyword}&rating=${filterOptions.rating}&nickName=${filterOptions.author}`)
    }
  }


  deleteClassReviewList(list: any): Observable<any> {
    return this._http.delete(`/classroom/background/delBackGroundReview?reviewIdList=${list}`)
  }
}
