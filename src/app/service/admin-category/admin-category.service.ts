import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminCategoryService {

  constructor(
    private _http: HttpClient
  ) { }

  getCourseCategory(): Observable<any> {
    return this._http.get(`/course/getAllCategories?type=1`)
  }

  getClassCategory(): Observable<any> {
    return this._http.get(`/course/getAllCategories?type=2`)
  }

  editCategory(code: string, description: string, id: string, name: string): Observable<any> {
    return this._http.put(`/course/editCategory?code=${code}&description=${description}&id=${id}&name=${name}`, {})
  }

  deleteCategory(id: string): Observable<any> {
    return this._http.delete(`/course/deleteCategory?id=${id}`)
  }

  addRootCategory(code: string, description: string, name: string, type: string): Observable<any> {
    return this._http.post(`/course/addRootCategory?code=${code}&description=${description}&name=${name}&type=${type}`, {})
  }

  addChildCategory(code: string, description: string, name: string, parentId: string, type: string): Observable<any> {
    return this._http.post(`/course/addSubCategory?code=${code}&description=${description}&name=${name}&parentId=${parentId}&type=${type}`, {})
  }
}
