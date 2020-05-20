import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ClientClassManagementService} from '../../../service/client-class-management/client-class-management.service';

@Component({
  selector: 'app-result-table',
  templateUrl: './result-table.component.html',
  styleUrls: ['./result-table.component.less']
})
export class ResultTableComponent implements OnInit {

  paperStatus: string;
  title: string = '阶段性测评';

  testId: string = '';

  name: string = '';

  studentList = [];
  total: number;
  loading: boolean = false;
  pageIndex: number = 1;

  constructor(
    private routeInfo: ActivatedRoute,
    private classManagement$: ClientClassManagementService,
    private route: Router
  ) {
    this.paperStatus = this.routeInfo.snapshot.queryParams['status'];
    this.testId = location.pathname.split('/')[5];
  }

  ngOnInit() {

    // this.studentList.push(
    //   {name: '邓智远', score: '70.0', handinTime: '2019-06-27 15:02:38', status: '已批阅', approvedPeople: 'admin'},
    //   {name: '邓智远', score: '70.0', handinTime: '2019-06-27 15:02:38', status: '已批阅', approvedPeople: 'admin'},
    //   {name: '邓智远', score: '70.0', handinTime: '2019-06-27 15:02:38', status: '已批阅', approvedPeople: 'admin'},
    //   {name: '邓智远', score: '70.0', handinTime: '2019-06-27 15:02:38', status: '已批阅', approvedPeople: 'admin'},
    //   {name: '邓智远', score: '70.0', handinTime: '2019-06-27 15:02:38', status: '已批阅', approvedPeople: 'admin'},
    //   {name: '邓智远', score: '70.0', handinTime: '2019-06-27 15:02:38', status: '已批阅', approvedPeople: 'admin'},
    //   {name: '邓智远', score: '70.0', handinTime: '2019-06-27 15:02:38', status: '已批阅', approvedPeople: 'admin'},
    //   )
    this.searchData()
  }

  filterStudent() {
    this.loading = true;
    this.pageIndex = 1;
    this.classManagement$.searchPaperResult(this.testId, this.paperStatus, this.name,  1, 10).subscribe(result => {
      this.loading = false;
      this.studentList = result.data.data;
      this.total = result.data.total;
    }, error1 => {
      this.loading = true;
    })
  }

  searchData(pageIndex: number = this.pageIndex) {
    this.loading = true;
    this.classManagement$.getPaperResultList(this.testId, this.paperStatus, pageIndex, 10).subscribe(result => {
      this.loading = false;
      this.studentList = result.data.data;
      this.total = result.data.total;
    }, error1 => {
      this.loading = true;
    })
  }

  checkData(url: string) {
    this.route.navigateByUrl(url)
  }
}
