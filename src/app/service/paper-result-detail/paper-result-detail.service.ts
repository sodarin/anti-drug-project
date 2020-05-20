import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PaperResultDetailService {

  constructor(private _http: HttpClient) { }

  getTestPaperDetail(testPaperId: string  , userId: string): Observable<any> {
      return this._http.get(`/user/getTestPaperDetail?&testPaperId=${testPaperId}&userId=${userId}`);
  };
}
