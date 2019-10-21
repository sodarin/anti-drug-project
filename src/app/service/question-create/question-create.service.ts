import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionCreateService {

  constructor(private _http: HttpClient) { }


  createQuestion(config: any): Observable<any> {
    const api = "/course/createQuestion";
    return this._http.post(api, config);
  }
}
