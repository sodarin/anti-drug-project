import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GroupnowService {

  constructor(private _http: HttpClient) { }

  getHotList(): Observable<any> {
    return this._http.get(`/groupGate/showAllHotGroup`)

  }
}
