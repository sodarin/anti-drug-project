import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UploadFileService {

  constructor(private _http: HttpClient) { }


  uploadNormalFiles(config: any): Observable<any> {
    const api = '/material/uploadNormal';
    let files = config.file
    return this._http.post(api, config);
  }
}
