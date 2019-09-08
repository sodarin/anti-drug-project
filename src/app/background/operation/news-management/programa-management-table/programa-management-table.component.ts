import { Component, OnInit } from '@angular/core';
import {ProgramaManagementService} from '../../../../service/programa-management/programa-management.service';
import {NzMessageService, NzModalService} from 'ng-zorro-antd';
import { moveItemInArray, CdkDragDrop } from '@angular/cdk/drag-drop';
import {ProgramaEditModalComponent} from '../../../../core/modal/programa-edit-modal/programa-edit-modal.component';

@Component({
  selector: 'app-programa-management-table',
  templateUrl: './programa-management-table.component.html',
  styleUrls: ['./programa-management-table.component.less']
})
export class ProgramaManagementTableComponent implements OnInit {

  dataList = [];
  displayData = [];
  loading: boolean = false;
  total: number = 0;
  totalPage: number;
  pageIndex: number = 1;


  filterOptions: {};
  checkOption = [];

  constructor(
    private programaManagementService$: ProgramaManagementService,
    private _message: NzMessageService,
    private _modalService: NzModalService
  ) { }

  ngOnInit() {
    this.searchData()
  }

  searchData(pageIndex: number = this.pageIndex) {
    this.displayData = [];
    this.loading = true;
    this.programaManagementService$.getProgramaList(pageIndex, 10).subscribe(result => {
      this.loading = false;
      this.total = result[0].totalNews;
      this.totalPage = Math.ceil(this.total / 10);
      this.dataList = result;
      this.displayData = this.dataList;
    }, error1 => {
      this.loading = false;
      this._message.error(error1.error)
    })
  }

  // 拖拽排序
  drop(event: CdkDragDrop<string[]>): void {
    moveItemInArray(this.displayData, event.previousIndex, event.currentIndex);
  }

  // 打开新增栏目模态框
  openCreateProgramaModal() {
    const _modal = this._modalService.create({
      nzTitle: '添加栏目',
      nzContent: ProgramaEditModalComponent,
      nzWidth: 600,
      nzOnOk: instance => instance.submit(),
      nzOnCancel: instance => instance.destroy()
    })
  }

  // 删除栏目
  delete(id: string) {
    this._modalService.confirm({
      nzTitle: '是否删除该栏目？',
      nzOnOk: () => console.log('111')
    })
  }

  edit(id: string) {
    const _modal = this._modalService.create({
      nzTitle: '添加栏目',
      nzContent: ProgramaEditModalComponent,
      nzComponentParams: {
        id: id
      },
      nzWidth: 600,
      nzOnOk: instance => instance.submit(),
      nzOnCancel: instance => instance.destroy()
    })
  }
}
