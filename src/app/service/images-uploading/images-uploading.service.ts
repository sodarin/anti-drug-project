import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ImagesUploadingService {


  constructor(private _http: HttpClient) { }
  getBackground(images:string){
    return this._http.post(`/group/getIndexGroup`, {
      images:images
    })
  }

  getIcon(imageicon:string){
    return this._http.post(`/group/getIndexGroup`, {
     imageicon:imageicon
    })
  }
}
