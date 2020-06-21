import { Component, OnInit } from '@angular/core';
import {NzNotificationService} from 'ng-zorro-antd';
import {MyteachingService} from '../../../../service/myteaching/myteaching.service';

@Component({
  selector: 'app-class-topic',
  templateUrl: './class-topic.component.html',
  styleUrls: ['./class-topic.component.less']
})
export class ClassTopicComponent implements OnInit {

  pageIndex: number;
  topicList = [];
  dataList = [];
  loading = false;
teacherId:string = '1';
  constructor(
    private _notification: NzNotificationService,
    private MyteachingService$: MyteachingService
  ) {
  }

  ngOnInit() {
    this.searchData()
  }

  searchData(pageIndex: number = this.pageIndex) {
    this.topicList = [];
    this.loading = true;
    this.MyteachingService$.getStudentDiscussionList(1, 10, this.teacherId, "classMemberThread").subscribe(result => {
        this.loading = false;
        this.dataList = result.data;
        this.topicList = this.dataList;
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

  viewTopic(item:any){
    console.log(item);
  }
}
