import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientClassManagementService {

  changeStatus: Subject<number> = new BehaviorSubject<number>(1);

  addingStatus: Subject<number> = new BehaviorSubject<number>(1);

  constructor(
    private _http: HttpClient
  ) { }

  // 班级主页
  getClassroomDetail(id: string): Observable<any> {
    return this._http.get(`/classroom/explore/${id}`)
  }

  getIntroduction(id: string): Observable<any> {
    return this._http.get(`/classroom/classIntroduction?classroomId=${id}`)
  }

  getClassroomReview(id: string, pageIndex: number, pageSize: number): Observable<any> {
    return this._http.get(`/classroom/getClassroomReview?classroomId=${id}&pageNum=${pageIndex}&pageSize=${pageSize}`)
  }

  // 设置班级基本信息
  setClassInfo(id: string, title: string, intro: string, tags: any, isShow: any, expireType: string, categoryId: string, usefulLife: string, userId: string): Observable<any> {
    return this._http.put(`/classroom/management/set_info`, {
      title: title,
      id: id,
      about: intro,
      tagId: tags,
      hide: isShow? '1': '0',
      expirymode: expireType,
      categoryId: categoryId,
      expiryvalue: usefulLife,
      userId: userId
    })
  }

  // 班主任设置
  getHeadTeacher(id: string): Observable<any> {
    return this._http.get(`/classroom/management/getClassroomHeadTeacher?classroomId=${id}`)
  }

  getTeacherList(pageSize: number, pageIndex: number, name?: string): Observable<any> {
    return this._http.get(`/user/getTeachers?nickName=${name}&pageNum=0&pageSize=0`)
  }

  setHeadTeacher(id: string, teacherId: string, oldTeacherId: string): Observable<any> {
    return this._http.put(`/classroom/management/set_hteacher/${id}?newTeacherId=${teacherId}&oldTeacherId=${oldTeacherId}`, {})
  }

  // 教师设置
  getClassTeachers(id: string): Observable<any> {
    return this._http.get(`/classroom/management/get_teachers/${id}?classroomId=${id}`)
  }

  // 助教设置
  searchStudent(id: string, nickName: string): Observable<any> {
    return this._http.get(`/classroom/management/get_students/${id}?nickName=${nickName}&pageNum=0&pageSize=0`)
  }

  getAssistant(id: string): Observable<any> {
    return this._http.get(`/classroom/management/getAssistant?classroomId=${id}&pageNum=0&pageSize=0`)
  }

  setAssistant(classroomId: string, userId: string): Observable<any> {
    let userList = [];
    userList.push(userId);
    return this._http.post(`/classroom/management/setAssistant`, {
      classroomId: classroomId,
      userIdList: userList
    })
  }

  deleteAssistant(classroomId: string, userId: string): Observable<any> {
    return this._http.delete(`/classroom/management/delAssistant?classroomId=${classroomId}&classroomId=${classroomId}&userId=${userId}`)
  }

  // 课程设置
  getClassCourseList(id: string): Observable<any> {
    return this._http.get(`/classroom/management/get_courses/${id}`)
  }

  deleteCourse(id: string, courseId: string): Observable<any> {
    return this._http.put(`/classroom/management/delete_courses`, {
      classroomid: id,
      classroomCourseId: courseId
    })
  }

  getCoursesNotInClass(id: string, pageSize: number, pageNum: number): Observable<any> {
    return this._http.get(`/classroom/management/get_add_courses/${id}?pageNum=${pageNum}&pageSize=${pageSize}`)
  }

  addCourseIntoClass(id: string, courseIdList: any, userId: string): Observable<any> {
    return this._http.post(`/classroom/management/add_courses`, {
      classroomid: id,
      courseList: courseIdList,
    })
  }

  searchCourseNotInClass(id: string, pageSize: number, pageNum: number, courseTitle: string): Observable<any> {
    return this._http.get(`/classroom/management/get_add_courses/${id}?pageNum=${pageNum}&pageSize=${pageSize}&courseTitle=${courseTitle}`)
  }

  sortCourseSeq(idList: any): Observable<any> {
    return this._http.post(`/classroom/management/dragSortCourse`, {
      classroomSortList: idList
    })
  }

  // 学员设置
  getClassroomStudent(id: string, pageIndex: number, pageSize: number, inputValue: string): Observable<any> {
    return this._http.get(`/classroom/management/get_students/${id}?nickName=${inputValue}&pageNum=${pageIndex}&pageSize=${pageSize}`)
  }

  deleteStudent(id: string, studentId: string): Observable<any> {
    return this._http.delete(`/classroom/management/delete_student/${id}?studentId=${studentId}`)
  }

  sendMessage(fromId: string, toId: string, content: string): Observable<any> {
    return this._http.put(`/user/sendMessage`, {
      fromId: fromId,
      toId: toId,
      content: content
    })
  }

  setStudentDeadline(id: string, studentId: string, deadline: string): Observable<any> {
    return this._http.put(`/classroom/management/set_deadline`, {
      classroomId: id,
      deadline: deadline,
      userId: studentId
    })
  }

  addStudent(id: string, studentId: string, comment?: string): Observable<any> {
    return this._http.post(`/classroom/management/add_student`, {
      classroomId: id,
      userId: studentId,
      remark: comment
      // comment: comment
    })
  }

  searchStudentWhenAdding(id: string, name: string): Observable<any> {
    return this._http.get(`/classroom/management/add_student_search?classroomId=${id}&nickName=${name}`)
  }

  updateCommentForStudent(id: string, content: string, stuId: string): Observable<any> {
    return this._http.put(`/classroom/management/update_remarks`, {
      classroomId: id,
      content: content,
      userId: stuId
    })
  }

  // 班级批阅
  getPaperList(id: string): Observable<any> {
    return this._http.get(`/course/getClassTestCheckList?classId=${id}`)
  }

  getPaperResultList(id: string, status: string, targetPage: number, pageSize: number): Observable<any> {
    return this._http.get(`/course/getTestPaperResult?testId=${id}&status=${status}&pageNum=${targetPage}&pageSize=${pageSize}`)
  }

  searchPaperResult(id: string, status: string, name: string, targetPage: number, pageSize: number): Observable<any> {
    return this._http.get(`/course/getTestPaperResult?testId=${id}&status=${status}&userName=${name}&pageNum=${targetPage}&pageSize=${pageSize}`)
  }
}
