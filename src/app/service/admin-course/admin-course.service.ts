import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {BehaviorSubject, Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminCourseService {

  changeStatus: Subject<number> = new BehaviorSubject<number>(1);

  constructor(
    private _http: HttpClient
  ) { }

  createNewCourse(title: string, type: string, userId: string): Observable<any> {
    return this._http.post(`/course/createCourse?title=${title}&type=${type}&userId=${userId}`, {

    })
  }

  getCourseList(targetPage: number, pageSize: number, filterOptions: any): Observable<any> {
    if (filterOptions.courseClassification == '' && filterOptions.courseStatus == '' && filterOptions.title == '' && filterOptions.creator == '') {
      return this._http.get(`/course/getBackGroundCourseInfo?pageNum=${targetPage}&pageSize=${pageSize}&type=${filterOptions.courseType}`)
    } else {
      return this._http.get(`/course/getBackGroundCourseInfo?pageNum=${targetPage}&pageSize=${pageSize}&categoryId=${filterOptions.courseClassification}&creatorName=${filterOptions.creator}&status=${filterOptions.courseStatus}&title=${filterOptions.title}&type=${filterOptions.courseType}`)
    }
  }

  getRecommendedList(targetPage: number, pageSize: number, filterOptions: any): Observable<any> {
    if (filterOptions.courseClassification == '' && filterOptions.creator == '' && filterOptions.title == '') {
      return this._http.get(`/course/getRecommendCourseInfo?pageNum=${targetPage}&pageSize=${pageSize}`)
    } else {
      return this._http.get(`/course/getRecommendCourseInfo?pageNum=${targetPage}&pageSize=${pageSize}&categoryId=${filterOptions.courseClassification}&creatorName=${filterOptions.creator}&title=${filterOptions.title}`)
    }
  }

  setRecommendCourse(courseId: string, recommendOrder: number): Observable<any> {
    const params = new HttpParams()
      .set('courseId', `${courseId}`)
      .set('recommendOrder', `${recommendOrder}`);
    return this._http.put(`/course/setRecommendOrder?courseId=${courseId}&recommendOrder=${recommendOrder}`, {})
  }

  cancelRecommendCourse(courseId: string): Observable<any> {
    return this._http.put(`/course/setUnRecommend?courseId=${courseId}`, {})
  }

  closeCourse(courseId: string): Observable<any> {
    return this._http.put(`/course/closeCourse?courseId=${courseId}`, {})
  }

  deleteCourse(courseId: string): Observable<any> {
    return this._http.put(`/course/deleteCourse?courseId=${courseId}`, {})
  }

  copyCourse(courseId: string, userId: string, title: string): Observable<any> {
    return this._http.put(`/course/copyCourse?courseId=${courseId}&userId=${userId}&newTitle=${title}`, {})
  }

  publishCourse(courseId: string): Observable<any> {
    return this._http.put(`/course/publishCourse?courseId=${courseId}`, {})
  }
}
