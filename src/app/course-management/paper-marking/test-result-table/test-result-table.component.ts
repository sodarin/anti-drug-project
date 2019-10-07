import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-test-result-table',
  templateUrl: './test-result-table.component.html',
  styleUrls: ['./test-result-table.component.less']
})
export class TestResultTableComponent implements OnInit {

  paperStatus: string;
  title: string = '阶段性测评';

  name: string;

  studentList = [];
  total: number;
  loading: boolean = false;
  pageIndex: number;

  constructor(
    private routeInfo: ActivatedRoute
  ) { }

  ngOnInit() {
    this.paperStatus = this.routeInfo.snapshot.queryParams['status'];
    this.studentList.push(
      {name: '邓智远', score: '70.0', handinTime: '2019-06-27 15:02:38', status: '已批阅', approvedPeople: 'admin'},
      {name: '邓智远', score: '70.0', handinTime: '2019-06-27 15:02:38', status: '已批阅', approvedPeople: 'admin'},
      {name: '邓智远', score: '70.0', handinTime: '2019-06-27 15:02:38', status: '已批阅', approvedPeople: 'admin'},
      {name: '邓智远', score: '70.0', handinTime: '2019-06-27 15:02:38', status: '已批阅', approvedPeople: 'admin'},
      {name: '邓智远', score: '70.0', handinTime: '2019-06-27 15:02:38', status: '已批阅', approvedPeople: 'admin'},
      {name: '邓智远', score: '70.0', handinTime: '2019-06-27 15:02:38', status: '已批阅', approvedPeople: 'admin'},
      {name: '邓智远', score: '70.0', handinTime: '2019-06-27 15:02:38', status: '已批阅', approvedPeople: 'admin'},
    )
  }

  filterStudent() {

  }

  searchData(pageIndex: number = this.pageIndex) {

  }

  checkData(data: any) {
    console.log(data)
  }

}
