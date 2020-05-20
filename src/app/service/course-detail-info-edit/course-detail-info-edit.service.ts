import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CourseDetailInfoEditService {

  constructor(private _http: HttpClient) { }

  setDetailInfo(config: any): Observable<any> {
    const api = '/course/setDetailInfo';
    const httpParams = new HttpParams()
      .set("courseId", config.courseId)
      .set("audiences", config.audiences)
      .set("goals", config.goals)
      .set("summary", config.summary)
    return this._http.put(api, {}, {
      params: httpParams
    });
  }
}
