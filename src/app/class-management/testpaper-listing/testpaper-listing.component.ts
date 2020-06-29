import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { Location } from '@angular/common';
import {NzModalService, NzNotificationService} from 'ng-zorro-antd';
import {PaperScoreStatisticsComponent} from '../../core/modal/paper-score-statistics/paper-score-statistics.component';
import {ClientClassManagementService} from '../../service/client-class-management/client-class-management.service';

@Component({
  selector: 'app-testpaper-listing',
  templateUrl: './testpaper-listing.component.html',
  styleUrls: ['./testpaper-listing.component.less']
})
export class TestpaperListingComponent implements OnInit {

  classroomId: string;
  data = [];

  pageIndex: number = 1;
  total: number;


  constructor(
    private routerInfo: ActivatedRoute,
    private route: Router,
    private _modal: NzModalService,
    private _notification: NzNotificationService,
    private classManagement$: ClientClassManagementService
  ) { }

  ngOnInit() {
    this.classroomId = location.pathname.split('/')[3];
    // this.data = [
    //   {id: '1', title: '默认教学计划 任务6-2： 阶段性测评', description: '阶段性测评', testTime: '开始日期： 2019-06-27 12:55', marked: '25', marking: '0', unhandle: '0'},
    //   {id: '2', title: '默认教学计划 任务6-2： 阶段性测评', description: '阶段性测评', testTime: '开始日期： 2019-06-27 12:55', marked: '25', marking: '0', unhandle: '0'},
    //   {id: '3', title: '默认教学计划 任务6-2： 阶段性测评', description: '阶段性测评', testTime: '开始日期： 2019-06-27 12:55', marked: '25', marking: '0', unhandle: '0'},
    //   {id: '4', title: '默认教学计划 任务6-2： 阶段性测评', description: '阶段性测评', testTime: '开始日期： 2019-06-27 12:55', marked: '25', marking: '0', unhandle: '0'},
    //   {id: '5', title: '默认教学计划 任务6-2： 阶段性测评', description: '阶段性测评', testTime: '开始日期： 2019-06-27 12:55', marked: '25', marking: '0', unhandle: '0'},
    //   {id: '6', title: '默认教学计划 任务6-2： 阶段性测评', description: '阶段性测评', testTime: '开始日期： 2019-06-27 12:55', marked: '25', marking: '0', unhandle: '0'},
    //   {id: '7', title: '默认教学计划 任务6-2： 阶段性测评', description: '阶段性测评', testTime: '开始日期： 2019-06-27 12:55', marked: '25', marking: '0', unhandle: '0'},
    // ]
    this.searchData();
  }

  searchData(pageIndex: number = this.pageIndex) {
    this.classManagement$.getPaperList(this.classroomId).subscribe(result => {
      this.data = result.data
    }, error1 => {
      this._notification.error(
        '获取列表失败！',
        `${error1.error}`
      )
    })
  }

  navigateTo(url: string) {
    this.route.navigateByUrl(url)
  }

  showScoreStatistics(item: any) {
    this._modal.create({
      nzTitle: item.title,
      nzContent: PaperScoreStatisticsComponent,
      nzComponentParams: {
        paperId: item.id
      },
      nzWidth: 600,
      nzFooter: null
    })
  }

}
