import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseManagementBackHalfService {

  addingStatus: Subject<number> = new BehaviorSubject<number>(1);

  constructor(
    private _http: HttpClient
  ) { }

  // 教学计划设置
  getPlanTaskNew(id:string): Observable<any>{
    return this._http.get(`/course/getTaskList?courseId=${id}`)
  }

  getTeachingPlan(id: string): Observable<any> {
    return this._http.get(`/teachingPlan/getTeachingPlanList?courseSetId=${id}`)
  }

  updatePlanStatus(id: string, status: string): Observable<any> {
    return this._http.put(`/teachingPlan/updateTeachingPlan`, {
      courseId: id,
      status: status
    })
  }

  addTeachingPlan(contentBody: any): Observable<any> {
    return this._http.post(`/teachingPlan/addTeachingPlan`, {
      courseSetId: contentBody.courseSetId,
      creator: contentBody.creator,
      expiryMode: contentBody.expiryMode,
      title: contentBody.courseSetTitle,
      learnMode: contentBody.learnMode,
      expiryDays: contentBody.expiryDays,
      expiryEndDate: contentBody.expiryEndDate,
      expiryStartDate: contentBody.expiryStartDate
    })
  }

  copyTeachingPlan(id: string, contentBody: any): Observable<any> {
    return this._http.post(`/teachingPlan/copyTeachingPlan?fromCourseId=${id}`, {
      courseSetId: contentBody.courseSetId,
      creator: contentBody.creator,
      expiryMode: contentBody.expiryMode,
      title: contentBody.courseSetTitle,
      learnMode: contentBody.learnMode,
      expiryDays: contentBody.expiryDays,
      expiryEndDate: contentBody.expiryEndDate,
      expiryStartDate: contentBody.expiryStartDate
    })
  }

  deletePlan(courseId: string): Observable<any> {
    return this._http.delete(`/teachingPlan/deleteTeachingPlan?courseId=${courseId}`)
  }

  // 试卷批阅
  getCoursePaperMarking(courseId: string): Observable<any> {
    return this._http.get(`/course/getTestCheckList?courseId=${courseId}`);
  }

  getPaperResultList(courseId: string, testId: string, status: string): Observable<any> {
    return this._http.get(`/course/getTestPaperResult?courseId=${courseId}&testId=${testId}&status=${status}`)
  }

  searchPaperResult(courseId: string, testId: string, name: string, status: string): Observable<any> {
    return this._http.get(`/course/getTestPaperResult?courseId=${courseId}&testId=${testId}&userName=${name}&status=${status}`)
  }

  // 教师管理
  addTeacherIntoCourse(id: string, courseId: string, teacherId: string): Observable<any> {
    return this._http.post(`/teachingPlan/addTeacher?courseId=${courseId}&courseSetId=${id}&userId=${teacherId}`, {})
  }

  getTeacherList(courseId: string): Observable<any> {
    return this._http.get(`/teachingPlan/getTeachingPlanTeachers?courseId=${courseId}`)
  }

  searchTeacherWhenAdding(courseId: string, userName: string): Observable<any> {
    return this._http.get(`/teachingPlan/getAddableTeachers?courseId=${courseId}&userName=${userName}`)
  }

  sortTeacherSeq(courseId: string, teacherIds: any): Observable<any> {
    return this._http.put(`/teachingPlan/sortTeacher?courseId=${courseId}&teacherIds=${teacherIds}`, {})
  }

  deleteTeacher(courseId: string, userId: string): Observable<any> {
    return this._http.delete(`/teachingPlan/deleteCourseMember?courseId=${courseId}&userId=${userId}`)
  }

  // 学员管理
  getTeachingPlanStudent(courseId: string, pageSize: number, targetPage: number, userName: string): Observable<any> {
    return this._http.get(`/teachingPlan/getTeachingPlanStudents?courseId=${courseId}&pageNum=${targetPage}&pageSize=${pageSize}&userName=${userName}`)
  }

  searchAddableStudent(courseId: string, userName: string): Observable<any> {
    return this._http.get(`/teachingPlan/getAddableStudents?courseId=${courseId}&userName=${userName}`)
  }

  addStudent(courseId: string, courseSetId: string, studentId: string): Observable<any> {
    return this._http.post(`/teachingPlan/addStudent?courseId=${courseId}&courseSetId=${courseSetId}&studentId=${studentId}`, {

    })
  }

  deleteStudent(courseId: string, userId: string): Observable<any> {
    return this._http.delete(`/teachingPlan/deleteCourseMember?courseId=${courseId}&userId=${userId}`)
  }

  setStudentRemark(courseId: string, remark: string, userId: string): Observable<any> {
    return this._http.put(`/teachingPlan/setStudentRemark?courseId=${courseId}&remark=${remark}&userId=${userId}`, {})
  }

  // 计划设置
  getPlanBasicInfo(id: string): Observable<any> {
    return this._http.get(`/teachingPlan/getTeachingPlanInfo?courseId=${id}`)
  }

  setPlanBasicInfo(id: string, audience: string, enableFinish: number, goals: string, summary: string, title: string): Observable<any> {
    return this._http.put(`/teachingPlan/setTeachingPlanInfo`, {
      audiences: audience,
      courseId: id,
      enableFinish: enableFinish,
      goals: goals,
      summary: summary,
      title: title
    })
  }

  //添加任务
  addPlanTask_Text(): Observable<any> {
    return this._http.post(`/course/createSubTask_Text`, {
      // activityText_createduserid: contentBody.courseSetId,
      // activityText_finishtype: contentBody.creator,
      // activity_fromcourseid: contentBody.expiryMode,
      // activity_fromcoursesetid: contentBody.courseSetTitle,
      // activity_title: contentBody.learnMode,
      // courseTask_courseid: contentBody.expiryDays,
      // courseTask_createduserid: contentBody.expiryEndDate,
      // courseTask_fromcoursesetid: contentBody.expiryStartDate,
      // courseTask_isoptional:0,
      // courseTask_mode:0,
      // courseTask_title:0,
      // courseTask_status:0,
    })
  }
}
