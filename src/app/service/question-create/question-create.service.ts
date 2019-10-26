import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionCreateService {

  constructor(private _http: HttpClient) { }


  createQuestion(config: any): Observable<any> {
    const api = "/course/createQuestion";
    return this._http.post(api, config);
  }

  //选项的转化
  strToUnicode(value: string): string {
    if (value) {

      let unicodeTmp = [];
      for (let i = 0; i < value.length; i++) {
        unicodeTmp.push('\\u' + value.charCodeAt(0).toString(16));
      }
      return unicodeTmp.join('');
    } else {
      return '';
    }
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
    return value == '' ? '' : `<p>${value}</p>\\r\\n`;
  }

  getMeta(value: string): string {
    return this.makeWarpedByTagP(this.strToUnicode(this.extractBetweenTagP(value)));
  }

  //获取控件的uuid
  getId() {
    return Number(Math.random().toString().substr(3, 18) + Date.now()).toString(36);
  }
}
