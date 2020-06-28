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
    return this._http.post(`/info/articles`, {
      pageSize: pageSize,
      pageNum: targetPage,
    });
  }
  getNewsDetail(id: string): Observable<any> {
    return this._http.get(`/info/articlebyid`)
  }
  filterNewsList(targetPage: number, pageSize: number, filterOptions: any): Observable<any> {
    return this._http.post(`/info/articles`, {
      pageSize: pageSize,
      pageNum: targetPage,
      searchPrograma: filterOptions.selectedProgramaValue,
    })
  }

  getTags(): Observable<any> {
    return this._http.get(`/info/tags`)
  }

  getPromotedlist(): Observable<any> {
    return this._http.get(`/info/promotedlist`)
  }

  getFeaturedlist(): Observable<any> {
    return this._http.get(`/info/featuredlist`)
  }

  getArticles(): Observable<any> {
    return this._http.get(`/info/articles`)
  }
  getArticlebyid(id:string): Observable<any> {
    return this._http.get(`/info/articlebyid?id=${id}`)
  }
  getArtTag(id:string): Observable<any> {
    return this._http.get(`/info/artTag?id=${id}`)
  }
  getArticlelist(selectedProgramaValue:number): Observable<any> {
    return this._http.post(`/info/infoback/articlelist`,
      {articleCategoryId:selectedProgramaValue,
        attribute: 0,
        keywords: "",
        status: "published"
      }
    )
  }
  setArticleLike(setArticleLike :any): Observable<any> {
    return this._http.post(`/info/infoback/setArticleLike`,
      {
        "articleId": setArticleLike.articleId,
        "isDelete": setArticleLike.isDelete,
        "userId": setArticleLike.userId
      }
    )
  }
  getCategoryname(id:string): Observable<any> {
    return this._http.get(`/info/categoryname?id=${id}`)
  }
  getTagname(id:string): Observable<any> {
    return this._http.get(`/info/infoback/getTagName?id=${id}`)
  }

  getArticleLike(articleId:string,userId:number): Observable<any> {
    return this._http.get(`/info/infoback/isArticleLike?articleId=${articleId}&userId=${userId}`)
  }

  getCommentListByArticleId(pageIndex: number, pageSize: number, articleId: string): Observable<any> {
    return this._http.get(`/comment/articleComments?objId=${articleId}&pageNum=${pageIndex}&pageSize=${pageSize}`)
  }

  insertComment(comment: any, objecttype: string): Observable<any> {
    return this._http.post(`/comment/insertComment`, {
      content: comment.content,
      objectid: comment.objectid,
      userid: comment.userId,
      objecttype: objecttype
    })
  }

  deleteComment(id: string): Observable<any> {
    return this._http.delete(`/comment/deleteComment?id=${id}`)
  }

}

