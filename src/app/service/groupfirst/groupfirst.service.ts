import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GroupfirstService {

  constructor(private _http: HttpClient) { }
//获取回复的列表
  showReply(special:boolean,selectValue:string,groupId:string,pageNum=0,pageSize=0):Observable<any>{
    return this._http.post(`/groupGate/showGroupThread`, {
      isReward:special,
      screeningApproach:selectValue,
      groupID:groupId,
      pageNum:pageNum,
      pageSize:pageSize
    })

  }
}
