import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GroupTopicManagementTableService {

  constructor(private _http: HttpClient) { }
  getTopicTableList(targetPage: number, pageSize: number, filterOptions: any): Observable<any> {
    if (filterOptions.state == '' && filterOptions.groupName == '' && filterOptions.leader == '') {
      return this._http.get(`/groupBack/getIndexGroup?pageNum=${targetPage}&pageSize=${pageSize}`)
    } else {
      return this._http.get(`/groupBack/getIndexGroup?pageNum=${targetPage}&pageSize=${pageSize}&groupStatus=${filterOptions.state}&groupOwnerName=${filterOptions.leader}&groupTitle=${filterOptions.groupName}`)
    }
  }

  createNewGroup(title: string, about: string, id: string): Observable<any> {
    return this._http.post(`/groupGate/addNewGroup`, {
      title: title,
      about: about,
      ownerid: id
    })
  }

  closeGroup(id: string): Observable<any> {
    return this._http.put(`/groupBack/closeGroup?id=${id}`, {})
  }

  openGroup(id: string): Observable<any> {
    return this._http.put(`/groupBack/openGroup?id=${id}`, {})
  }
}
