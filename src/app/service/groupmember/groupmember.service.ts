import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class GroupmemberService {

  constructor(private _http: HttpClient) { }

  getHead(img:string,imgs:[]){
    return this._http.post(`/group/getIndexGroup`, {
      img:img,
      imgs:imgs
    })
  }
}
