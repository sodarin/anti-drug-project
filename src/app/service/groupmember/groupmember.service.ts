import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GroupmemberService {

  constructor(private _http: HttpClient) { }

  //撤销副组长
  cancelViceOwner(idList=[],userId:string): Observable<any>{
    return this._http.post(`/groupGate/cancelViceOwner`, {
      groupID:idList,
      userID:userId
    })
  }
  //踢出组员
  cancelMember(idList=[],userId:string): Observable<any>{
    return this._http.post(`/groupGate/cancelGroupMember`, {
      groupID:idList,
      userID:userId
    })
  }
  //设置副组长
  setlViceOwner(idList=[],userId:string): Observable<any>{
    return this._http.post(`/groupGate/setViceOwner`, {
      groupID:idList,
      userID:userId
    })
  }
}
