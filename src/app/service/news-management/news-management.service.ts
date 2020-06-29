import { Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class NewsManagementService {

  constructor(private _http: HttpClient) { }

  getCategoryList(): Observable<any> {
    return this._http.get(`/info/categories`)
  }

  getNewsList(targetPage: number, pageSize: number, filterOptions: any): Observable<any> {
    return this._http.post(`/info/infoback/articlelist?pageNum=${targetPage}&pageSize=${pageSize}`, {
      articleCategoryId: filterOptions.searchPrograma,
      attribute: filterOptions.searchAttribute,
      keywords: filterOptions.searchParameter,
      status: filterOptions.searchState
    })


  }

  getNewsDetail(id: string): Observable<any> {
    return this._http.get(`/info/articlebyid?id=${id}`)
  }

  updateNews(id: string, programa: string, body: string, featured: string, promoted: string, stick: string, title: string, tagIds: []): Observable<any> {
    return this._http.put(`/info/infoback/updatearticle`, {
      id: id,
      body: body,
      categoryid: programa,
      featured: featured,
      promoted: promoted,
      sticky: stick,
      title: title,
      tagIds: tagIds
    })
  }

  createNewNews(programa: string, body: string, featured: string, promoted: string, stick: string, title: string, tagIds: []): Observable<any> {
    return this._http.post(`/info/infoback/insertarticle`, {
      body: body,
      categoryid: programa,
      featured: featured,
      promoted: promoted,
      sticky: stick,
      title: title,
      tagIds: tagIds
    })
  }

  updateFeatured(id: string, featured: number): Observable<any> {
    return this._http.put(`/info/infoback/updatearticle`, {
      id: id,
      featured: featured,
    })
  }

  updateSticky(id: string, sticky: number): Observable<any> {
    return this._http.put(`/info/infoback/updatearticle`, {
      id: id,
      sticky: sticky,
    })
  }

  updatePromoted(id: string, promoted: number): Observable<any> {
    return this._http.put(`/info/infoback/updatearticle`, {
      id: id,
      promoted: promoted
    })
  }

  postNews(id: string): Observable<any> {
    return this._http.put(`/info/infoback/updatearticle`, {
      status: 'published',
      id: id
    })
  }

  recycleNews(id: string): Observable<any> {
    return this._http.put(`/info/infoback/updatearticle`, {
      status: 'trash',
      id: id
    })
  }

  cancelPostNews(id: string): Observable<any> {
    return this._http.put(`/info/infoback/updatearticle`, {
      id: id,
      status: 'unpublished'
    })
  }


  deleteAritcles(list: any): Observable<any> {
    return this._http.delete(`/info/infoback/delarticles?idList=${list}`)
  }

  deleteCategory(id: string): Observable<any> {
    return this._http.delete(`/info/infoback/deleteCategory?CategoryId=${id}`)
  }

  insertCategory(name: string, code: string, parentid: string): Observable<any> {
    return this._http.post(`/info/infoback/insertCategory`, {
      name: name,
      code: code,
      parentid: parentid
    })
  }

  updateCategory(id: string, name: string, code: string, parentid: string): Observable<any> {
    return this._http.put(`/info/infoback/updateCategory`, {
      id: id,
      name: name,
      code: code,
      parentid: parentid
    })
  }
}

