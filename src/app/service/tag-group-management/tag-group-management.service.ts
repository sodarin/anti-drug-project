import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TagGroupManagementService {

  constructor(private _http: HttpClient) { }

  getTagGroupList(): Observable<any> {
    return this._http.get(`/info/infoback/getTagGroup`)
  }


  updateTagGroupDetail(
    tagId: string, name: string
  ): Observable<any> {
    return this._http.put(`/tagGroup/updateTagGroupDetail`, {
      id: tagId,
      name: name
    })
  }

  getAllTagRoles(): Observable<any> {
    return this._http.get(`/tagGroup/getAllRoles`);
  }

  updateTagRoles(roles: string, tagId: string): Observable<any> {
    return this._http.put(`/tagGroup/updateTagGroupRole`, {
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

  createNewTagGroup(tagGroupName: string): Observable<any> {
    return this._http.post(`/tagGroup/xxx`, {
      name: tagGroupName,
    })
  }

  updateLockedStatus(TagGroupId: string, lockedStatus: number): Observable<any> {
    return this._http.put(`/tagGroup/lockedTagGroup`, {
      id: TagGroupId,
      locked: lockedStatus
    })
  }

  uploadFile(file: any): Observable<any> {
    const headerOptions ={
      headers: new HttpHeaders({
        'enctype': 'multipart/form-data'
      })
    };
    return this._http.post(`/tagGroup/uploadAvatar`, {
      file: file
    }, headerOptions)
  }
}
