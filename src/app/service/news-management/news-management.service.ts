import { Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class NewsManagementService {

  constructor(private _http: HttpClient) { }

  getNewsList(targetPage: number, pageSize: number): Observable<any> {
    return this._http.post(`/news/getIndexNews`, {
      pageSize: pageSize,
      pageNum: targetPage,
    })
  }
  filterNewsList(targetPage: number, pageSize: number, filterOptions: any): Observable<any> {
    return this._http.post(`/news/getIndexNews`, {
      pageSize: pageSize,
      pageNum: targetPage,
      searchPrograma: filterOptions.selectedProgramaValue,
      searchParameter: filterOptions.searchParameter,
      searchAttribute:  filterOptions.searchAttribute,
      searchState: filterOptions.searchState,
    })
  }

  getNewsDetail(id: string): Observable<any> {
    return this._http.get(``)
  }

}

