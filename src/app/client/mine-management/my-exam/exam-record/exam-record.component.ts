import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NzMessageService } from 'ng-zorro-antd/message';
import {NzNotificationService} from 'ng-zorro-antd';
import {MyteachingService} from '../../../../service/myteaching/myteaching.service';
import {Router} from '@angular/router';

const count = 5;
const fakeDataUrl = 'https://randomuser.me/api/?results=5&inc=name,gender,email,nat&noinfo';
@Component({
  selector: 'app-exam-record',
  templateUrl: './exam-record.component.html',
  styleUrls: ['./exam-record.component.less']
})
export class ExamRecordComponent implements OnInit {

  data: any[] = [];
  recordList :[];
  dataList:[];
  loading:boolean;
  userId:number=1;
  testPaperType:string = "finished";

  constructor(private http: HttpClient,
              private msg: NzMessageService,
              private _notification: NzNotificationService,
              private MyteachingService$: MyteachingService,
              private router: Router
              ) {}

  ngOnInit(){
  this.searchData()
  }


  searchData() {
    this.loading = true;
    this.recordList = [];
    this.MyteachingService$.getMyExamList(1, 10,this.testPaperType ,this.userId).subscribe(result => {
        this.loading = false;
        this.dataList = result.data;
        this.recordList = this.dataList;
      },
      error1 => {
        this.loading = false;
        this._notification.create(
          'error',
          '发生错误',
          `${error1.error}`
        )

      })
  }
  navigatTo(url: string) {
    this.router.navigateByUrl(url)
  }
}
