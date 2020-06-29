import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GroupcreateService {

  constructor(private _http: HttpClient) { }
  //创建新的小组
  addNewGroup(content:string,title:string,userId:string): Observable<any> {
    return this._http.post(`/groupGate/addNewGroup`, {
      about: content,
      title: title,
      ownerid:userId
    })
  }
}
