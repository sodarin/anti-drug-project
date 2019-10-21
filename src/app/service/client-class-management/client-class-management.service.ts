import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientClassManagementService {

  constructor(
    private _http: HttpClient
  ) { }

  getClassroomDetail(id: string): Observable<any> {
    return this._http.get(`/classroom/explore/${id}`)
  }

  getIntroduction(id: string): Observable<any> {
    return this._http.get(`/classroom/classIntroduction?classroomId=${id}`)
  }

  getClassroomReview(id: string, pageIndex: number, pageSize: number): Observable<any> {
    return this._http.get(`/classroom/getClassroomReview?classroomId=${id}&pageNum=${pageIndex}&pageSize=${pageSize}`)
  }
}
