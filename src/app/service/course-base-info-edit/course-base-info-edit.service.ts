import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CourseBaseInfoEditService {

  constructor(private _http: HttpClient) { }

  getAllCategories(): Observable<any> {
    const api = '/course/getAllCategories';
    const httpParams = new HttpParams()
      .set("pageNum", "1")
      .set("pageSize", "1000")
    return this._http.get(api, {
      params: httpParams
    });
  }

}
