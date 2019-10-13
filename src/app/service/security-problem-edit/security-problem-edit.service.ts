import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SecurityProblemEditService {

  constructor(private _http: HttpClient) { }

  updateSecurityProblem(config: any): Observable<any> {
    let api = "user/xxx";
    return this._http.put(api, config);
  }
}
