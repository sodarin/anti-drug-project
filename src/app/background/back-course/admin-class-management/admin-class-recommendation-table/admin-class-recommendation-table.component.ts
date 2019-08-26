import { Component, OnInit } from '@angular/core';
import {NzMessageService, NzModalService} from 'ng-zorro-antd';
import {ClassRecommendationService} from '../../../../service/class-recommendation/class-recommendation.service';
import {TeacherRecommendModalComponent} from '../../../../core/modal/teacher-recommend-modal/teacher-recommend-modal.component';

@Component({
  selector: 'app-admin-class-recommendation-table',
  templateUrl: './admin-class-recommendation-table.component.html',
  styleUrls: ['./admin-class-recommendation-table.component.less']
})
export class AdminClassRecommendationTableComponent implements OnInit {
  dataList = [];
  displayData = [];
  loading = false;
  total: number = 0;
  totalPage: number;
  pageIndex: number = 1;

  constructor(
    private classRecommendationService$: ClassRecommendationService ,
    private _message: NzMessageService,
    private _modalService: NzModalService
  ) {
  }

  ngOnInit(){
    this.searchData();
  }
  searchData(pageIndex: number = this.pageIndex) {
    this.displayData = [];
    this.loading = true;
    this.classRecommendationService$.getMessageList(pageIndex, 10).subscribe(result => {
      this.loading = false;
      this.total = result[0].total? result[0].total: 0;
      this.totalPage = Math.ceil(this.total / 10);
      this.dataList = result;
      this.displayData = this.dataList;
    }, error1 => {
      this.loading = false;
      this._message.error(error1.error)
    });
  }
// 取消推荐
  esc(id: string) {
    this._modalService.confirm({
      nzTitle: '是否取消推荐该班级？',
      nzOnOk: () => {
        console.log('111')
      }
    })
  }
// 设置序号
  edit(id: string) {
    const modal = this._modalService.create({
      nzTitle: '设置班级推荐序号',
      nzContent: TeacherRecommendModalComponent,
      nzComponentParams: {
        id: id
      },
      nzOnOk: instance => {
        console.log(instance.recommendOrder)
      },
      nzOnCancel: instance => instance.destroy()
    })
  }
}
