import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class GroupmainlistService {

  constructor(private _http: HttpClient) { }
  searchList(search:string): Observable<any>{
    return this._http.get(`/groupGate/searchGroup?pattern=${search}`)
  }

  //获取新晋小组
  getNewGroup(groupNumber:number): Observable<any> {
    return this._http.get(`/groupGate/showNewGroup?groupNumber=${groupNumber}`)
  }
//获取我加入的小组
  getJoinGroup(userId:string ): Observable<any> {
    return this._http.get(`/groupGate/showMyGroup?userID=${userId}`)
  }
  //搜索小组
  searchGroup(groupId:string):Observable<any>{
    return this._http.get(`/groupGate/searchThread?`)
  }

  //获取话题作者
  getThreadOwner(threadId:string):Observable<any>{
    return this._http.get(`/groupGate/showGroupThreadOwner?groupThreadId=${threadId}`)
  }

  //编辑话题
  updateThread(content:string,threadId:string,title:string):Observable<any>{
    return this._http.post(`/groupGate/updateThreadInfo`,{
      content:content,
      threadId:threadId,
      title:title
    })

  }
  //查看我回复的话题
  showMyPost(userId:string):Observable<any>{
    return this._http.get(`/groupGate/showMyGroupThreadPost?userID=${userId}`)
  }

  //回复话题
  addThreadPost(content:string,fromId:string):Observable<any>{
    return this._http.post(`/groupGate/addNewPost`,{
      conten:content,
      fromUserId:fromId
    })
  }

  //置顶
  setStickThread(threadId:string):Observable<any>{
    return this._http.put(`/groupBack/setStickThread?threadID=${threadId}`,{

    })
  }
  //取消置顶
  setNotStickThread(threadId:string):Observable<any>{
    return this._http.put(`/groupBack/setNotStickThread?threadID=${threadId}`,{
    })
  }
  //加精
  setEliteThread(threadId:string):Observable<any>{
    return this._http.put(`/groupBack/setEliteThread?threadID=${threadId}`,{

    })
  }
  //取消加精
  setNotEliteThread(threadId:string):Observable<any>{
    return this._http.put(`/groupBack/setNotEliteThread?threadID=${threadId}`,{

    })
  }
  //按照顺序查看、查看全部等
  showThreadPost(threadId:string):Observable<any>{
    return this._http.get(`/groupGate/ showThreadPost?threadID=${threadId}`)
  }
}
