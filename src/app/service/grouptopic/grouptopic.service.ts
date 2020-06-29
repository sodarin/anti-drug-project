import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GrouptopicService {

  constructor(private _http: HttpClient) { }
  createGroupThread(content:string,title:string,groupId:string,userId:string){
    return this._http.post(`/groupGate/createGroupThread`, {
      content: content,
      title: title,
      userId:userId,
      groupId:groupId
    })
  }
}
