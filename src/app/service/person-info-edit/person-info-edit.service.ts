import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonInfoEditService {

  constructor(private _http: HttpClient) { }

  updateUserDetail(user: any): Observable<any> {
    let api = "/user/updateUserDetail";
    return this._http.put(api, user);
  }

  getPersonDetail(userId: number): Observable<any> {
    let api = "/user/getPersonDetail";
    const httpParams = new HttpParams()
      .set("userId", `${userId}`)
    return this._http.get(api, {
      params: httpParams
    })
  }
}
