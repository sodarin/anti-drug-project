import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GroupManagementService {

  constructor(private http: HttpClient) { }

  getGroupList(userId:string): Observable<any> {
    const httpParam = new HttpParams().set('userID',`${userId}`);
    return this.http.get(`/groupGate/showMyGroup`, {
      params: httpParam
    })
  }
}
