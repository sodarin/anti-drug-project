import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {CourseManagementBackHalfService} from '../../../service/course-management-back-half/course-management-back-half.service';
import {NzNotificationService} from 'ng-zorro-antd';

@Component({
  selector: 'app-test-result-table',
  templateUrl: './test-result-table.component.html',
  styleUrls: ['./test-result-table.component.less']
})
export class TestResultTableComponent implements OnInit {

  paperStatus: string;
  title: string = '阶段性测评';

  name: string = '';
  courseId: string;
  testId: string;

  studentList = [];
  total: number;
  loading: boolean = false;
  pageIndex: number;

  constructor(
    private routeInfo: ActivatedRoute,
    private courseManagement$: CourseManagementBackHalfService,
    private _notification: NzNotificationService,
    private route: Router
  ) {}

  ngOnInit() {
    this.paperStatus = this.routeInfo.snapshot.queryParams['status'];
    this.courseId = location.pathname.split('/')[3];
    this.testId = location.pathname.split('/')[5];
    // this.studentList.push(
    //   {name: '邓智远', score: '70.0', handinTime: '2019-06-27 15:02:38', status: '已批阅', approvedPeople: 'admin'},
    //   {name: '邓智远', score: '70.0', handinTime: '2019-06-27 15:02:38', status: '已批阅', approvedPeople: 'admin'},
    //   {name: '邓智远', score: '70.0', handinTime: '2019-06-27 15:02:38', status: '已批阅', approvedPeople: 'admin'},
    //   {name: '邓智远', score: '70.0', handinTime: '2019-06-27 15:02:38', status: '已批阅', approvedPeople: 'admin'},
    //   {name: '邓智远', score: '70.0', handinTime: '2019-06-27 15:02:38', status: '已批阅', approvedPeople: 'admin'},
    //   {name: '邓智远', score: '70.0', handinTime: '2019-06-27 15:02:38', status: '已批阅', approvedPeople: 'admin'},
    //   {name: '邓智远', score: '70.0', handinTime: '2019-06-27 15:02:38', status: '已批阅', approvedPeople: 'admin'},
    // )
    this.searchData()
  }

  filterStudent() {
    this.loading = true;
    this.courseManagement$.searchPaperResult(this.courseId, this.testId, this.name, this.paperStatus).subscribe(result => {
      this.loading = false;
      this.studentList = result.data.data;
      this.total = result.data.total
    }, error1 => {
      this.loading = false;
      this._notification.error(
        '获取列表失败！',
        `${error1.error}`
      )
    })
  }

  searchData(pageIndex: number = this.pageIndex) {
    this.loading = true;
    this.courseManagement$.getPaperResultList(this.courseId, this.testId, this.paperStatus).subscribe(result => {
      this.loading = false;
      this.studentList = result.data.data;
      this.total = result.data.total
    }, error1 => {
      this.loading = false;
      this._notification.error(
        '获取列表失败！',
        `${error1.error}`
      )
    })
  }

  checkData(url: string) {
    this.route.navigateByUrl(url)
  }

}
