import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GroupTopicManagementService {

  constructor(private _http: HttpClient) { }
  getTopicList(targetPage: number, pageSize: number, filterOptions: any): Observable<any> {
    if (filterOptions.state == '' && filterOptions.groupName == '' && filterOptions.keyword == '' && filterOptions.creator == '' && filterOptions.attribute == '') {
      return this._http.get(`/groupBack/showBackGroundAllThread?pageSize=${pageSize}&pageNum=${targetPage}`)
    } else {
      return this._http.get(`/groupBack/showBackGroundAllThread?
      pageSize=${pageSize}&pageNum=${targetPage}&attribute=${filterOptions.attribute}&groupName=${filterOptions.groupName}&pageNum=${targetPage}&pageSize=${pageSize}
      &status=${filterOptions.state}&threadName=${filterOptions.keyword}&userName=${filterOptions.creator}`)
    }
  }

  closeThread(id: string): Observable<any> {
    return this._http.put(`/groupBack/closeGroupThread?threadID=${id}`, {})
  }

  deleteThread(id: string): Observable<any> {
    return this._http.delete(`/groupBack/deleteGroupThread?threadID=${id}`)
  }

  deleteInBatch(list: any): Observable<any> {
    return this._http.delete(`/groupBack/deleteGroupThreadList?threadIds=${list}`)
  }

  openThread(id: string): Observable<any> {
    return this._http.put(`/groupBack/openGroupThread?threadID=${id}`, {})
  }

  setElite(id: string): Observable<any> {
    return this._http.put(`/groupBack/setEliteThread?threadID=${id}`, {})
  }

  setNotElite(id: string): Observable<any> {
    return this._http.put(`/groupBack/setNotEliteThread?threadID=${id}`, {})
  }

  setNotStick(id: string): Observable<any> {
    return this._http.put(`/groupBack/setNotStickThread?threadID=${id}`, {})
  }

  setStick(id: string): Observable<any> {
    return this._http.put(`/groupBack/setStickThread?threadID=${id}`, {})
  }
}
