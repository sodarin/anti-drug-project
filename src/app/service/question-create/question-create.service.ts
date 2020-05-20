import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionCreateService {

  constructor(private _http: HttpClient) { }

  getCourseQuestionList(courseId: any, pageNum: number = 1, pageSize: number = 10, keyWord: any = '', type: string = ''): Observable<any> {
    const api = '/course/getCourseQuestionList?';
    let httpParams = new HttpParams()
      .set('courseId', courseId)
      .set('keyWord', keyWord)
      .set('pageNum', `${pageNum}`)
      .set('pageSize', `${pageSize}`)
      .set('type', type)

    return this._http.get(api, { params: httpParams });
  }
  getQuestionInfo(questionId: number): Observable<any> {
    const api = `/course/getQuestionInfo?questionId=${questionId}`
    return this._http.get(api);
  }
  createQuestion(config: any): Observable<any> {
    const api = "/course/createQuestion";
    return this._http.post(api, config);
  }

  editQuestion(config: any): Observable<any> {
    const api = "/course/editQuestion";
    return this._http.put(api, config)
  }

  deleteQuestion(questionId: number) {
    const api = `/course/deleteQuestion?questionId=${questionId}`
    return this._http.delete(api);
  }

  deleteQuestionList(questionIds: any) {
    let api = `/course/deleteQuestionList?questionIds=${questionIds}`;
    return this._http.delete(api)
  }

  //选项的转化
  strToUnicode(data: string = '汉字'):string {
    if (data === '') return '';
    let str = '';
    for (let i = 0; i < data.length; i++) {
      str += "\\u" + parseInt(data[i].charCodeAt(0).toString(), 10).toString(16);
    }
    return str;
  }

  //匹配p标签中的信息
  extractBetweenTagP(value: string): string {
    if (value) {
      const pattern = /<p>((\w|\W)*?)<\/p>/;
      return value.match(pattern) == null ? '' : value.match(pattern)[1];
    } else {
      return '';
    }
  }

  //内容两端添加上p标签
  makeWarpedByTagP(value: string): string {
    return value == '' ? '' : `<p>${value}<\/p>\r\n`;
  }

  getMeta(value: string): string {
    return this.makeWarpedByTagP(this.strToUnicode(this.extractBetweenTagP(value)));
  }

  //获取控件的uuid
  getId() {
    return Number(Math.random().toString().substr(3, 18) + Date.now()).toString(36);
  }
}
