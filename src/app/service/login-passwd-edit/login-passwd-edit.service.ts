import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginPasswdEditService {

  constructor(private _http: HttpClient) { }


  updateUserPassword(user: any): Observable<any> {
    let api = "user/updateUserPassword"
    return this._http.put(api, user);
  }

}
