import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TagService {
  constructor(private http: HttpClient) { }

  // getTags(page:string,orderkey:string,select:string):any{
  //     const params = new HttpParams()
  //     .set('orderBy',orderkey)
  //     .set('Select',select)
  //     const uri = `http://localhost:3000/course/${page}`;
  //     return this.http.get<courselist>(uri,{params}).pipe(map(data => data.courses));
  // }

  getTags_course() {
    const params = new HttpParams()
      .set('pageNum','1')
      .set('pageSize','10')
    const uri = `/course/getAllCategories`;
    return this.http.get(uri,{params});//.pipe(map(data => data.courses));
  }

  getTags_class() {
    return this.http.get(`/classroom/getClassroomCategory`);
  }

}
