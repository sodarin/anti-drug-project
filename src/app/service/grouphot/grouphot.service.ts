import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GrouphotService {

  constructor(private _http: HttpClient) { }

  //获取最近话题
  showRecentGroup(threadId:string): Observable<any> {
    return this._http.get(`/groupGate/showSpecificGroupThread?threadID=${threadId}`)
  }
  //获取now页面话题
  showRecentGroupNow(groupThreadNum:number): Observable<any> {
    return this._http.get(`/groupGate/showRecentGroupThread?groupThreadNum=${groupThreadNum}`)
  }
}
