import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {HttpClient, HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private _http: HttpClient) { }

  getNewsList(targetPage: number, pageSize: number): Observable<any> {
    return this._http.post(`/news/getIndexNews`, {
      pageSize: pageSize,
      pageNum: targetPage,
    });
  }
  getNewsDetail(id: string): Observable<any> {
    return this._http.get(``)
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

}

