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

  getCourseInfo(courseId: any): Observable<any> {
    const api = '/course/getCourseInfo';
    const httpParams = new HttpParams()
      .set("courseId", courseId);
    return this._http.get(api, {
      params: httpParams
    });
  }

  setBaseInfo(config: any): Observable<any> {
    const api = '/course/setBaseInfo';
    const httpParams = new HttpParams()
      .set("categoryId", config.categoryId)
      .set("courseId", config.courseId)
      .set("serializeMode", config.serializeMode)
      .set("subtitle", config.subtitle)
      .set("tags", config.tags)
      .set("title", config.title)
    return this._http.put(api, {}, {
      params: httpParams
    })
  }

  getAllTags() {
    const api = '/info/tags';
    return this._http.get(api);
  }

}
