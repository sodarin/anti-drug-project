import { Injectable } from '@angular/core';
import {HttpClient,HttpParams} from "@angular/common/http";
import {BehaviorSubject, Observable, Subject} from "rxjs";
import {getIifeBody} from "@angular/compiler-cli/ngcc/src/host/esm5_host";

@Injectable({
  providedIn: 'root'
})
export class PrivateChatService {
  changeStatus: Subject<number> = new BehaviorSubject<number>(1);
  constructor(private _http: HttpClient) {
  }
  getMessages(isRead: string,pageIndex: number,pageSize: number,userId:number): Observable<any>{
    return this._http.get(`/user/getMessage?isRead=${isRead}&pageNum=${pageIndex}&pageSize=${pageSize}&userId=${userId}`)
}
  readMessages(messageId: number): Observable<any>{
    return this._http.put(`/user/readMessage?messageId=${messageId}`,{})
  }
  sendMessage(content: string,fromId: number,toNickName: string,toId: number,isRead:string): Observable<any>{
    return this._http.put(`/user/sendMessage`,{
      content: content,
      fromId: fromId,
      toNickName: toNickName,
      toId:toId,
      isRead: isRead,
    })
  }
}
