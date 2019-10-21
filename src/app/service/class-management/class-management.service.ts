import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClassManagementService {
  changeStatus: Subject<number> = new BehaviorSubject<number>(1);

  constructor(private _http: HttpClient) {
  }

  getClassroomList(targetPage: number, pageSize: number, filterOptions: any): Observable<any> {
    if (filterOptions.className == '') {
      return this._http.get(`/classroom/explore?pageNum=${targetPage}&pageSize=${pageSize}`)
    } else {
      return this._http.get(`/classroom/explore?pageNum=${targetPage}&pageSize=${pageSize}&classroomName=${filterOptions.className}`)
    }

  }


  closeClassroom(id: string): Observable<any> {
    return this._http.post(`/classroom/background/close/${id}`, {})
  }

  setRecommendation(id: string, recSeq: string): Observable<any> {
    return this._http.post(`/classroom/background/setRecommend/${id}?recommendSeq=${recSeq}`, {})
  }

  cancelRecommendation(id: string): Observable<any> {
    return this._http.post(`/classroom/background/cancelRecommend/${id}`, {})
  }

  getRecommendationList(pageSize: number, pageIndex: number): Observable<any> {
    return this._http.post(`/classroom/background/getRecommendClassroom`, {
      pageNum: pageIndex,
      pageSize: pageSize
    })
  }

  publishClassroom(id: string): Observable<any> {
    return this._http.post(`/classroom/background/openClassroom/${id}`, {})
  }

  createNewClass(title: string): Observable<any> {
    return this._http.post(`/classroom/background/create`, {
      title: title
    })
  }
}
