import { Component, OnInit } from '@angular/core';
import {NzModalService} from 'ng-zorro-antd';
import {Router} from '@angular/router';
import {TeachingPlanAddingModalComponent} from '../../core/modal/teaching-plan-adding-modal/teaching-plan-adding-modal.component';

@Component({
  selector: 'app-teaching-plan-management',
  templateUrl: './teaching-plan-management.component.html',
  styleUrls: ['./teaching-plan-management.component.less']
})
export class TeachingPlanManagementComponent implements OnInit {

  courseId: string;

  planList = [];
  total: number;
  loading: boolean = false;
  pageIndex: number = 1;

  constructor(
    private _modal: NzModalService,
    private route: Router
  ) { }

  ngOnInit() {
    this.courseId = location.pathname.split('/')[3];
    this.planList.push(
      {name: '默认教学计划', 'mode': '自由式学习', taskNum: '0', stuNum: '0', status: '已发布'},
      {name: '默认教学计划', 'mode': '自由式学习', taskNum: '0', stuNum: '0', status: '未发布'},
    )
  }

  searchData(pageIndex: number = this.pageIndex) {

  }

  navigateTo(url: string) {
    this.route.navigateByUrl(url)
  }

  copy(data: any) {
    this._modal.create({
      nzTitle: '复制教学计划',
      nzContent: TeachingPlanAddingModalComponent,
      nzComponentParams: {
        courseId: this.courseId
      },
      nzWidth: 600,
      nzOkText: '提交',
      nzOnOk: instance => instance.submit(),
      nzOnCancel: instance => instance.destroy()
    })
  }

  closePlan(id: string) {
    this._modal.confirm({
      nzTitle: '是否要关闭该计划？',
      nzOnOk: () => console.log('111')
    })
  }

  deletePlan(id: string) {
    this._modal.confirm({
      nzTitle: '是否要删除该计划？',
      nzOnOk: () => console.log('111')
    })
  }

  publishPlan(id: string) {
    this._modal.confirm({
      nzTitle: '是否要发布该计划？',
      nzOnOk: () => console.log('111')
    })
  }


  openAddingPlanModal() {
    const modal = this._modal.create({
      nzTitle: '创建教学计划',
      nzContent: TeachingPlanAddingModalComponent,
      nzComponentParams: {
        courseId: this.courseId
      },
      nzWidth: 600,
      nzOkText: '创建',
      nzOnOk: instance => instance.submit(),
      nzOnCancel: instance => instance.destroy()
    })
  }

}
