import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  constructor(private http:HttpClient){}

  getCourse(id:string){
    const uri = `http://localhost:3000/course2/${id}`;
    return this.http.get(uri);
  }
  getCourses(page:number,sortType:string,categoryId:string){
    const params = new HttpParams()
      .set('categoryId',categoryId)
      .set('pageNum',page.toString())
      .set('pageSize','16')
      .set('sortType',sortType)
    //.set('tags','')
    //const uri = `http://localhost:3000/course/${page}`;
    const uri = `/course/summary/list`;
    return this.http.get(uri,{params});//.pipe(map(data => data.courses));
  }

  getCoursesNum():number{
    return 21;
  }
}
