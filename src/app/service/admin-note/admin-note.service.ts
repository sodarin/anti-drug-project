import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminNoteService {

  constructor(
    private _http: HttpClient
  ) { }

  getNoteList(targetPage: number, pageSize: number, filterOptions: any): Observable<any> {
    if (filterOptions.searchParameter == '' && filterOptions.keyword == '') {
      return this._http.get(`/course/getAllNotes?pageNum=${targetPage}&pageSize=${pageSize}`)
    } else {
      return this._http.get(`/course/getAllNotes?pageNum=${targetPage}&pageSize=${pageSize}&searchType=${filterOptions.topic}&authorName=${filterOptions.searchParameter}&keyWord=${filterOptions.keyword}`)
    }

  }

  deleteNote(id: string): Observable<any> {
    return this._http.delete(`/course/deleteNote?id=${id}`)
  }

  deleteNoteList(list: any): Observable<any> {
    return this._http.delete(`/course/deleteNoteList?deleteList=${list}`)
  }
}
