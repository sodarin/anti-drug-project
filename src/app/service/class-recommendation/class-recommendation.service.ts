import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ClassRecommendationService {

  constructor(private _http: HttpClient) {
  }

  getMessageList(targetPage: number, pageSize: number): Observable<any> {
    return this._http.post(``, {
      pageSize: pageSize,
      pageNum: targetPage,
    })
  }

}
