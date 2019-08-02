import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProgramaManagementService {

  constructor(private _http: HttpClient) { }

  getProgramaList(targetPage: number, pageSize: number): Observable<any> {
    return this._http.post(`/news/getIndexPrograma`, {
      pageSize: pageSize,
      pageNum: targetPage,
    })
  }
}
