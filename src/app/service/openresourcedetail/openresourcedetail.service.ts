import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OpenresourcedetailService {

  constructor(private _http: HttpClient) { }

  getOpenCourseDetailInfor(id: string): Observable<any> {
    return this._http.post(`/course/open/Info?openCourseID=${id}`, {})
  }

  getTeacherInfor(id:string): Observable<any>{
    return this._http.get(`/user/getPersonalDetail?userId=${id}`)
  }
}
