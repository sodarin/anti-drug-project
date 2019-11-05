import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class VerificationService {

  constructor(private _http: HttpClient) { }


  setUserApproval(config: any): Observable<any> {
    const api = "/user/setUserApproval";
    return this._http.put(api, config);
  }
}
