import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientCourseVideoService {

  constructor(private http: HttpClient) { }
  // 获得任务列表
  getTaskList(courseID: string): Observable<any> {
    const api = '/course/plan/task';
    const httpParams = new HttpParams().set('courseID', courseID);
    return this.http.get(api, {params: httpParams});
  }
  // 向服务器发送笔记
  postNote(userId: string, courseSetId: string, courseId: string, taskId: string, content: string): Observable<any> {
    const api = '/course/plan/createCourseNote';
    // tslint:disable-next-line: max-line-length
    return this.http.post(api, {
      userId: userId,
      courseSetId: courseSetId,
      courseId: courseId,
      taskId: taskId,
      content: content
    });
  }
  // 向服务器发送问题
  postQuestion(userId: string, courseSetId: string, courseId: string, taskId: string, title: string, content: string): Observable<any> {
    const api = '/course/plan/createCourseQuestion';
    return this.http.post(api, {
      userId: userId,
      courseSetId: courseSetId,
      courseId: courseId,
      taskId: taskId,
      title: title,
      content: content
    });
  }
}
