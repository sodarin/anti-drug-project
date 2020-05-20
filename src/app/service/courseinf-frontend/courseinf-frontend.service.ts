import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CourseInfService {
  constructor(private http: HttpClient) { }

  getCourse(courseid: string) {
    const params = new HttpParams()
      .set('courseSetId', courseid)
    const uri = `/course/summary/Detail`;
    return this.http.get(uri, { params });
  }

  getCoursesNum(courseid: string): number {
    return 21;
  }

  getUser(courseid: string) {
    const uri = `http://localhost:3000/user/${courseid}`;
    return this.http.get(uri);
  }
  getstudents(courseid: string) {
    const params = new HttpParams()
      .set('courseId', courseid)
      .set('pageNum', "1")
      .set('pageSize', "5")
    const uri = `/course/summary/getCourseStudent`;
    return this.http.get(uri, { params });
  }

  getRelativeCourses(number: string) {
    const params = new HttpParams()
      .set('orderBy', 'Hot')
      .set('Select', '')
    const uri = `http://localhost:3000/course/1`;
    return this.http.get(uri, { params });
  }

  getCoursesIntroduction(courseid: string) {
    const params = new HttpParams()
      .set('courseID', courseid)
    const uri = `/course/summary/introduce`;
    return this.http.get(uri, { params });
  }

  getCoursesCatalog(courseid: string) {
    const params = new HttpParams()
      .set('courseID', courseid)
    const uri = `/course/summary/catalog`;
    return this.http.get(uri, { params });
  }



  getCoursesTopic(courseid: string, page: number, type: string = "") {
    const params = new HttpParams()
      .set('courseID', courseid)
    // .set('classid',"")
    const uri = `/course/plan/thread`;
    return this.http.get(uri, { params });
  }

  getCoursesNotes(courseid: string, page: number, order: string) {
    const uri = `/course/summary/note`;
    return this.http.post(uri, { "courseId": courseid, "sort": "string", "taskId": 0 });
  }

  getCoursesMaterials(courseid: string) {
    const params = new HttpParams()
      .set('courseID', courseid)
    const uri = `/course/plan/material`;
    return this.http.get(uri, { params });
  }

  getCoursesComments(courseid: string) {
    const params = new HttpParams()
      .set('courseID', courseid)
    const uri = `/course/plan/review`;
    return this.http.get(uri, { params });
  }

  getCoursesTeachers(courseid: string) {
    const params = new HttpParams()
      .set('courseId', courseid)
      .set('pageNum', "1")
      .set('pageSize', "5")
    const uri = `/course/summary/getCourseTeacher`;
    return this.http.get(uri, { params });
  }

  getCoursesFeatures(courseid: string) {
    const uri = `http://localhost:3000/course/1`;
    return this.http.get(uri);
  }

  getCoursesDynamics(courseid: string) {
    const uri = `http://localhost:3000/course/1`;
    return this.http.get(uri);
  }

  getCoursesNotice(courseid: string) {
    const uri = `http://localhost:3000/course/1`;
    return this.http.get(uri);
  }

  //获得各个页码
  // gettotal_coursepages(courseid: string) {

  // }

  // gettotal_topicpages(courseid: string) {

  // }

  // gettotal_notespages(courseid: string) {

  // }

  // gettotal_commentspages(courseid: string) {

  // }

  // gettotal_materialspages(courseid: string) {

  // }

  getTopicResponses(threadid: string) {
    const params = new HttpParams()
      .set('pageNum', '1')
      .set('pageSize', '5')
      .set('threadId', threadid)
    const uri = `/course/plan/getCourseThreadPost`;
    return this.http.get(uri, { params });
  }

  getCommentResponses(threadid: string) {
    const params = new HttpParams()
      .set('pageNum', '1')
      .set('pageSize', '5')
      .set('reviewId', threadid)
    const uri = `/course/plan/getCourseReviewPost`;
    return this.http.get(uri, { params });
  }

  //信息提交
  topic_submit(courseid: string, content: string,title:string, userId: string) {
    const uri = `/course/plan/createCourseThread`;
    return this.http.post(uri,
      {
        content: content,
        courseId: courseid,
        courseSetId:courseid,
        taskId: 0,
        title: title,
        userId: userId
      });
  }

  questoin_submit(courseid: string, content: string,title:string, userId: string) {
    const uri = `course/plan/createCourseQuestion`;
    return this.http.post(uri,
      {
        content: content,
        courseId: courseid,
        courseSetId:courseid,
        taskId: 0,
        title: title,
        userId: userId
      });
  }

  response_submit(courseid: string, parentId: string, content: string,userid:string) {
    const uri = `/course/plan/createCourseThreadPost`;
    return this.http.post(uri,
      {
        content: content,
        courseId: courseid,
        taskId: courseid,
        threadId: parentId,
        userId: userid
      });
  }

  notice_submit() {

  }

  //收藏
  collect_submit() {

  }

  //加入课程
  joincourse_submit(classroomid: string, userid: string) {
    const uri = `/classroom/management/add_student`;
    return this.http.post(uri,
      {
        classroomId: classroomid,
        deadline: 0,
        remark: 0,
        userId: "1",
      });
  }

  //退出学习
  exitlearn_submit(classroomid: string, userid: string) {
    const uri = `/classroom/management/delete_student/${classroomid}`;
    const params = new HttpParams()
      .set('id', classroomid)
      .set('studentId', "1")
    return this.http.delete(uri, { params })
  }

  //取消关注
  delfollow_submit(userid: string, toid: string) {
    const uri = `/user/delFollowedUser`;
    return this.http.put(uri,
      {
        fromId: userid,
        toId: toid,
      });
  }

  //关注
  follow_submit(userid: string, toid: string) {
    const uri = `/user/followedUser`;
    return this.http.put(uri,
      {
        fromId: userid,
        toId: toid,
      });
  }

  //检查是否已经关注
  isfollowing(userid: string, toid: string){
    const uri = `/user/isFollowed`;
    const params = new HttpParams()
      .set('fellowId', toid)
      .set('userId', userid)
    return this.http.get(uri,{params});

  }

  //私信
  privateletter_submit(userid: string, toid: string, title: string, content: string) {
    const uri = `/user/sendMessage`;
    return this.http.put(uri,
      {
        content: content,
        createdTime: 0,
        createdTimeString: "string",
        fromId: userid,
        fromNickName: "string",
        fromSmallAvatar: "string",
        isRead: "string",
        messageConversationId: 0,
        messageId: 0,
        messageRelationId: 0,
        toId: toid,
        toNickName: "string",
        totalMessages: 0,
        totalNum: 0,
        type: "string"
      });
  }

  comment_submit(courseid: string, parentId: string, content: string, title: string, rating: number, userId: string) {
    const uri = `/course/plan/createCourseReview`;
    return this.http.post(uri,
      {
        content: content,
        courseId: courseid,
        courseSetId:courseid,
        parentId:parentId,
        rating: rating.toString(),
        title: title,
        userId: userId
      });
  }


  //获取教学计划
  get_teaching_plan(courseid: string) {
    const uri = `/teachingPlan/getTeachingPlanList`;
    const params = new HttpParams()
      .set('courseSetId', courseid)
    return this.http.get(uri, { params });
  }

}
