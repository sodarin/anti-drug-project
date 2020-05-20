import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FollowManagementService {

  constructor(private http: HttpClient) { }

  followUser(fromid:string,toid:string):Observable<any> {

    return this.http.put(`/user/followedUser`,{
      fans:{
        "fromId":fromid,
        "toId":toid
      }
    })
  }

  defollow(fromid:string,toid:string):Observable<any> {

    return this.http.put(`/user/delFollowedUser`,{
      fans:{
        "fromId":fromid,
        "toId":toid
      }
    })
  }

  isFollowed(fromid:string,toid:string):Observable<any> {
    const httpParam = new HttpParams()
      .set('fellowId',`${toid}`)
      .set('userId',`${fromid}`);
    return this.http.get('/user/isFollowed',{
      params: httpParam
    })
  }

  getMyFocus(targetPage: number, pageSize: number, userId: string): Observable<any> {
    const httpParam = new HttpParams()
      .set('pageNum', `${targetPage}`)
      .set('pageSize', `${pageSize}`)
      .set('userId',`${userId}`);
    return this.http.get(`/user/getAttention`, {
      params: httpParam
    })
  }

  getMyFellows(targetPage: number, pageSize: number, userId: string): Observable<any> {
    const httpParam = new HttpParams()
      .set('pageNum', `${targetPage}`)
      .set('pageSize', `${pageSize}`)
      .set('userId',`${userId}`);
    return this.http.get(`/user/getFellow`, {
      params: httpParam
    })
  }
}
