import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GroupEditService {

  constructor(private _http: HttpClient) { }
  setGroupInfo(title:string,content:string,groupId:string): Observable<any>{
    return this._http.put(`/groupGate/setGroupInfo`, {
      about:content,
      title:title,
      groupId:groupId

    })
  }
  changeStatus: Subject<number> = new BehaviorSubject<number>(1);
  //话题中发表回复
  publishReply(content:string,threadId:string){

  }
}
