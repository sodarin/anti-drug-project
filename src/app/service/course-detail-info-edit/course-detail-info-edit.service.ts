import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseDetailInfoEditService {

  constructor(private _http: HttpClient) { }

  setDetailInfo(config: any): Observable<any> {
    const api = '/course/setDetailInfo';
    return this._http.put(api, config);
  }
}
