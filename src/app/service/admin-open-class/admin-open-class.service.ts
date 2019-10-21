import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminOpenClassService {

  changeStatus: Subject<number> = new BehaviorSubject<number>(1);

  constructor(
    private _http: HttpClient
  ) { }

  getOpenClassList(pageSize: number, targetPage: number, filterOption: any): Observable<any> {
    if (filterOption.courseClassification == '' && filterOption.courseStatus == '' && filterOption.title == '' && filterOption.creator == '') {
      return this._http.get(`/course/getBackGroundOpenCourseInfo?pageNum=${targetPage}&pageSize=${pageSize}`)
    } else {
      return this._http.get(`/course/getBackGroundOpenCourseInfo?pageNum=${targetPage}&pageSize=${pageSize}&title=${filterOption.title}&creatorName=${filterOption.creator}&categoryId=${filterOption.courseClassification}&status=${filterOption.courseStatus}`)
    }

  }

  getRecommendOpenClassList(pageSize: number, targetPage: number, filterOption: any): Observable<any> {
    if (filterOption.courseClassification == '' && filterOption.title == '' && filterOption.creator == '')  {
      return this._http.get(`/course/getRecommendOpenCourseInfo?pageNum=${targetPage}&pageSize=${pageSize}`);
    } else {
      return this._http.get(`/course/getRecommendOpenCourseInfo?pageNum=${targetPage}&pageSize=${pageSize}&title=${filterOption.title}&creatorName=${filterOption.creator}&categoryId=${filterOption.courseClassification}`)
    }
  }

  setOpenCourseRecommend(courseId: string, recommendOrder: string): Observable<any> {
    return this._http.put(`/course/setOpenCourseRecommendOrder?courseId=${courseId}&recommendOrder=${recommendOrder}`, {})
  }

  cancelOpenCourseRecommend(courseId: string): Observable<any> {
    return this._http.put(`/course/setOpenCourseUnRecommend?courseId=${courseId}`, {})
  }

  publishOpenCourse(courseId: string): Observable<any> {
    return this._http.put(`/course/publishOpenCourse?courseId=${courseId}`, {})
  }

  deleteOpenCourse(courseId: string): Observable<any> {
    return this._http.put(`/course/deleteOpenCourse?courseId=${courseId}`, {})
  }

  closeOpenCourse(courseId: string): Observable<any> {
    return this._http.put(`/course/closeOpenCourse?courseId=${courseId}`, {})
  }

}
