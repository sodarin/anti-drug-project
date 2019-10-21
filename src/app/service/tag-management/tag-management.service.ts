import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TagManagementService {

  constructor(private _http: HttpClient) { }

  getTagList(): Observable<any> {
    return this._http.get(`/info/tags`)
  }

  updateTagDetail(tagId: string, name: string): Observable<any> {
    return this._http.put(`/info/infoback/updateTag?id=${tagId}&name=${name}`, {})
  }

  deleteTag(id: string): Observable<any> {
    return this._http.delete(`/info/infoback/deleteTag?id=${id}`)
  }


  createNewTag(tagName: string): Observable<any> {
    return this._http.post(`/info/infoback/insertTag?name=${tagName}`, {})
  }


  getAllTagRoles(): Observable<any> {
    return this._http.get(`/tag/getAllRoles`);
  }

  updateTagRoles(roles: string, tagId: string): Observable<any> {
    return this._http.put(`/tag/updateTagRole`, {
      newRole: roles,
      id: tagId
    })
  }
}
