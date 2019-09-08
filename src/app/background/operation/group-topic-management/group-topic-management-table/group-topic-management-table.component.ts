import {Component, OnInit, TemplateRef} from '@angular/core';
import {GroupTopicManagementTableService} from '../../../../service/group-topic-management-table/group-topic-management-table.service';
import {NzMessageService, NzModalService} from 'ng-zorro-antd';
import {UserInfoViewModalComponent} from "../../../../core/modal/user-info-view-modal/user-info-view-modal.component";
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-group-topic-management-table',
  templateUrl: './group-topic-management-table.component.html',
  styleUrls: ['./group-topic-management-table.component.less']
})

export class GroupTopicManagementTableComponent implements OnInit {
  selectedStateFilterValue   = 'open';
  groupName: string;
  leader: string;

  dataList = [];
  displayData = [];
  loading: boolean = false;
  total: number = 0;
  totalPage: number;
  pageIndex: number = 1;

  filterOptions: {};
  checkOption = [];
  topicTableListTable: any;

  newGroupForm: FormGroup;
  introductionContent: string = '';
  constructor(
    private groupTopicManagementTableService$: GroupTopicManagementTableService,
    private  _message: NzMessageService,
    private  _modalService: NzModalService,
    private router: Router,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.searchData();
    this.newGroupForm = this.fb.group({
      groupName: ['', Validators.required]
    })
  }
  // 搜索

  filterTopicTable() {
    this.displayData = [];
    this.loading = true;
    this.filterOptions = {
      state: this.selectedStateFilterValue,
      groupName: this.groupName,
      leader: this.leader
    };
    this.groupTopicManagementTableService$.filterTopicTableList(1, 10, this.filterOptions).subscribe(result => {
      this.loading = false;
      this.total = result[0].total;
      this.totalPage = Math.ceil(this.total / 10);
      this.dataList = result;
      this.displayData = this.dataList;
    }, error1 => {
      this.loading = false;
      this._message.error(error1.error)
    })
  }
  searchData(pageIndex: number = this.pageIndex) {
    this.displayData = [];
    this.loading = true;
    this.groupTopicManagementTableService$.getTopicTableList(pageIndex, 10).subscribe(result => {
      this.loading = false;
      this.total = result[0].totalUser;
      this.totalPage = Math.ceil(this.total / 10);
      this.dataList = result;
      this.displayData = this.dataList;
    }, error1 => {
      this.loading = false;
      this._message.error(error1.error)
    })
  }
  // 查看小组
  viewGroup(id: any ){
    window.open(``, '_blank')
  }

  createNewGroup(template: TemplateRef<{}>) {
    this._modalService.create({
      nzTitle: '添加小组',
      nzContent: template,
      nzWidth: 600,
      nzOkText: '创建小组',
      nzOnOk: () => {
        let shouldBeClosed = false;
        this.newGroupForm.markAllAsTouched();
        this.newGroupForm.controls.groupName.updateValueAndValidity();
        return shouldBeClosed
      }
    })
  }

  openGroup(id: string) {
    this._modalService.confirm({
      nzTitle: '是否要开启小组？',
      nzOnOk: () => console.log('1111')
    })
  }

  // 关闭小组
  closeGroup(id: any){
    this._modalService.confirm({
      nzTitle: '是否要关闭小组？',
      nzOnOk: () => console.log('1111')
    })
  }
  // 转移小组
  exchangeGroup(id: any, template: TemplateRef<{}>){
    this._modalService.create({
      nzTitle: '转移小组管理人',
      nzContent: template,
      nzWidth: 600,
      nzOnOk: () => {
        let shouldBeClosed = false;
        this.newGroupForm.markAllAsTouched();
        this.newGroupForm.controls.groupName.updateValueAndValidity();
        return shouldBeClosed
      }
    })
  }
}
