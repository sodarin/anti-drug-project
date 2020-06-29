import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GroupmemberService {

  constructor(private _http: HttpClient) { }

  //撤销副组长
  cancelViceOwner(idList=[],groupId:string): Observable<any>{
    let obj = [];
    idList.forEach(item => {
      obj.push({userID: item, groupID: groupId})
    });
    return this._http.post(`/groupGate/cancelViceOwner`, {
      groupOwnerOperations: obj
    })
  }
  //踢出组员
  cancelMember(idList=[],groupId:string): Observable<any>{
    let obj = [];
    idList.forEach(item => {
      obj.push({userID: item, groupID: groupId})
    });
    return this._http.post(`/groupGate/cancelGroupMember`, {
      groupOwnerOperations: obj
    })
  }
  //设置副组长
  setlViceOwner(idList:any[],groupId:string): Observable<any>{
    let obj = [];
    idList.forEach(item => {
      obj.push({userID: item, groupID: groupId})
    });
    return this._http.post(`/groupGate/setViceOwner`, {
      groupOwnerOperations: obj
    })
  }
}
