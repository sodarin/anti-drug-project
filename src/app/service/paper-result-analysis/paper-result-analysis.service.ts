import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaperResultAnalysisService {

  constructor(private _http: HttpClient) {}
  getCourseTask(courseId: number,courseTaskId:number): Observable<any>{
    return this._http.get(`/classroom/management/getCourseTask?courseId=${courseId}&courseTaskId=${courseTaskId}`)
  }
}
