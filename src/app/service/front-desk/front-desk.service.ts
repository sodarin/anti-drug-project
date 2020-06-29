import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FrontDeskService {

  constructor(private _http: HttpClient) { }
  getMessages(isRead: string,pageIndex: number,pageSize: number,userId:number): Observable<any>{
    return this._http.get(`/user/getMessage?isRead=${isRead}&pageNum=${pageIndex}&pageSize=${pageSize}&userId=${userId}`)
  }
  readMessages(messageId:number):Observable<any>{
    return this._http.put(`/user/readMessage?messageId=${messageId}`,{})
  }
  getNotifications(isread: string , pageIndex: number, pageSize: number, userId: number): Observable<any> {
    return this._http.get(`/user/getNotification?isRead=${isread}&pageNum=${pageIndex}&pageSize=${pageSize}&userId=${userId}`);
  };
  readNotification(notificationId:number): Observable<any> {
    return  this._http.put(`/user/readNotification?notificationId=${notificationId}`, {});
  }
}
