import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TagManagementService {

  constructor(private _http: HttpClient) { }

  getTagList(targetPage: number, pageSize: number): Observable<any> {
    return this._http.post(`/tag/getIndexTag`, {
      pageSize: pageSize,
      pageNum: targetPage,
    })
  }
  filterTagList(targetPage: number, pageSize: number, filterOptions: any): Observable<any> {
    return this._http.post(`/tag/getIndexTag`, {
      pageSize: pageSize,
      pageNum: targetPage,
      searchType: filterOptions.searchType,
      searchParameter: filterOptions.searchParameter,
      searchTimeType: filterOptions.searchTimeType,
      starTime: filterOptions.starTime,
      endTime: filterOptions.endTime,
      role: filterOptions.role
    })
  }

  getTagDetailById(tagId: string): Observable<any> {
    return this._http.get(`/tag/getTagDetail?tagId=${tagId}`)
  }

  updateTagDetail(
    tagId: string, name: string
  ): Observable<any> {
    return this._http.put(`/tag/updateTagDetail`, {
      id: tagId,
      name: name
    })
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

  // updatePassword(password: string, TagId: string): Observable<any> {
  //   return this._http.put(`/tag/updatePassword`, {
  //     password: password,
  //     TagId: TagId
  //   })
  // }

  createNewTag(tagName: string): Observable<any> {
    return this._http.post(`/tag/xxx`, {
      name: tagName,
    })
  }

  updateLockedStatus(TagId: string, lockedStatus: number): Observable<any> {
    return this._http.put(`/tag/lockedTag`, {
      id: TagId,
      locked: lockedStatus
    })
  }

  uploadFile(file: any): Observable<any> {
    const headerOptions ={
      headers: new HttpHeaders({
        'enctype': 'multipart/form-data'
      })
    };
    return this._http.post(`/tag/uploadAvatar`, {
      file: file
    }, headerOptions)
  }
}
