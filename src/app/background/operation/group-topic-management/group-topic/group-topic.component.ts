import { Component, OnInit } from '@angular/core';
import {GroupTopicManagementService} from '../../../../service/group-topic-management/group-topic-management.service';
import {NzMessageService, NzModalService, NzNotificationService} from 'ng-zorro-antd';
import {UserInfoViewModalComponent} from '../../../../core/modal/user-info-view-modal/user-info-view-modal.component';

@Component({
  selector: 'app-group-topic',
  templateUrl: './group-topic.component.html',
  styleUrls: ['./group-topic.component.less']
})
export class GroupTopicComponent implements OnInit {
  selectedStateFilterValue   = '';
  inputGroup: string = '';
  creator: string = '';
  keyword: string = '';
  selectedAttributeFilterValue = 'best';

  dataList = [];
  displayData = [];
  loading: boolean = false;
  total: number = 0;
  totalPage: number;
  pageIndex: number = 1;

  filterOptions = {
    state: '',
    groupName: '',
    keyword: '',
    creator: '',
    attribute: ''
  };
  checkOption = [];
  isAllDisplayDataChecked = false;
  isOperating = false;
  isIndeterminate = false;
  mapOfCheckedId: { [key: string]: boolean } = {};
  numberOfChecked = 0;


  constructor(
    private groupTopicManagementService$: GroupTopicManagementService,
    private  _notification: NzNotificationService,
    private  _modalService: NzModalService
  ) { }

  ngOnInit() {
    this.searchData();
  }

  navigateTo(url: string) {
    window.open(url, '_blank')
  }

  viewUserInfo(id: string) {
    const modal = this._modalService.create({
      nzTitle: '个人详细信息',
      nzContent: UserInfoViewModalComponent,
      nzComponentParams: {
        userId: id
      },
      nzWidth: 600,
      nzFooter: null
    })
  }


  // 搜索

  filterTopic() {
    this.displayData = [];
    this.loading = true;
    this.filterOptions = {
      state: this.selectedStateFilterValue,
      groupName: this.inputGroup,
      keyword: this.keyword,
      creator: this.creator,
      attribute: this.selectedAttributeFilterValue
    };
    this.pageIndex = 1;
    this.groupTopicManagementService$.getTopicList(1, 10, this.filterOptions).subscribe(result => {
      this.loading = false;
      this.total = result[0].total;
      this.totalPage = Math.ceil(this.total / 10);
      this.dataList = result;
      this.displayData = this.dataList;
      this.displayData.forEach(item => {
        this.mapOfCheckedId[item.id] = false
      });
      this.isAllDisplayDataChecked = false;
      this.isIndeterminate = false;
    }, error1 => this._notification.error(
      '发生错误！',
      `${error1.error}`))
  }
  searchData(pageIndex: number = this.pageIndex) {
    this.displayData = [];
    this.loading = true;
    this.groupTopicManagementService$.getTopicList(pageIndex, 10, this.filterOptions).subscribe(result => {
      this.loading = false;
      this.total = result[0].totalUser;
      this.totalPage = Math.ceil(this.total / 10);
      this.dataList = result;
      this.displayData = this.dataList;
      this.displayData.forEach(item => {
        this.mapOfCheckedId[item.id] = false
      });
      this.isAllDisplayDataChecked = false;
      this.isIndeterminate = false;
    }, error1 => this._notification.error(
      '发生错误！',
      `${error1.error}`))
  }
  checkAll(value: boolean): void {
    this.displayData.filter(item => !item.disabled).forEach(item => (this.mapOfCheckedId[item.id] = value));
    this.refreshStatus();
  }

  refreshStatus(): void {
    this.isAllDisplayDataChecked = this.displayData
      .every(item => this.mapOfCheckedId[item.id]);
    this.isIndeterminate =
      this.displayData.some(item => this.mapOfCheckedId[item.id]) &&
      !this.isAllDisplayDataChecked;
    this.numberOfChecked = this.dataList.filter(item => this.mapOfCheckedId[item.id]).length;
  }
  operateData(): void {
    // 删除数据操作
    let deleteIdList = [];
    this.displayData.forEach(item => {
      if (this.mapOfCheckedId[item.id])
        deleteIdList.push(item.id)
    });
    this.isOperating = true;
    this.groupTopicManagementService$.deleteInBatch(deleteIdList).subscribe(result => {
      this.isOperating = false;
      if (this.isAllDisplayDataChecked && this.pageIndex === this.totalPage) {
        this.pageIndex --;
      }
      this.searchData();
      this._notification.create(
        'success',
        '删除成功！',
        ''
      )
    }, error1 => {
      this.isOperating = false;
      this._notification.create(
        'error',
        '发生错误！',
        `${error1.error}`
      )
    })
  }

  // 修改置顶加精属性
  setElite(id: string, data: any) {
    if (data) {
      this._modalService.confirm({
        nzTitle: '是否设置为精品话题？',
        nzOnOk: () => {
          this.groupTopicManagementService$.setElite(id).subscribe(result => {
            this.searchData();
            this._notification.create(
              'success',
              '设置成功！',
              ''
            )
          }, error1 => {
            this.searchData();
            this._notification.create(
              'error',
              '发生错误！',
              `${error1.error}`
            )
          })
        },
        nzOnCancel: () => {
          this.searchData()
        }
      })
    } else {
      this._modalService.confirm({
        nzTitle: '是否取消加精？',
        nzOnOk: () => {
          this.groupTopicManagementService$.setNotElite(id).subscribe(result => {
            this.searchData();
            this._notification.create(
              'success',
              '取消成功！',
              ''
            )
          }, error1 => {
            this.searchData();
            this._notification.create(
              'error',
              '发生错误！',
              `${error1.error}`
            )
          })
        },
        nzOnCancel: () => {
          this.searchData()
        }
      })
    }
  }


  setStick(id: string, data: any) {
    if (data) {
      this._modalService.confirm({
        nzTitle: '是否设置为置顶话题？',
        nzOnOk: () => {
          this.groupTopicManagementService$.setStick(id).subscribe(result => {
            this.searchData();
            this._notification.create(
              'success',
              '设置成功！',
              ''
            )
          }, error1 => {
            this.searchData();
            this._notification.create(
              'error',
              '发生错误！',
              `${error1.error}`
            )
          })
        },
        nzOnCancel: () => {
          this.searchData()
        }
      })
    } else {
      this._modalService.confirm({
        nzTitle: '是否取消置顶？',
        nzOnOk: () => {
          this.groupTopicManagementService$.setNotStick(id).subscribe(result => {
            this.searchData();
            this._notification.create(
              'success',
              '取消成功！',
              ''
            )
          }, error1 => {
            this.searchData();
            this._notification.create(
              'error',
              '发生错误！',
              `${error1.error}`
            )
          })
        },
        nzOnCancel: () => {
          this.searchData()
        }
      })
    }
  }
  // 关闭小组
  closeGroup(id: any){
    this._modalService.confirm({
      nzTitle: '是否关闭该小组？',
      nzOnOk: () => {
        this.groupTopicManagementService$.closeThread(id).subscribe(result => {
          this.searchData();
          this._notification.success(
            '关闭成功！',
            ''
          )
        }, error1 => {
          this._notification.error(
            '发生错误！',
            `${error1.error}`
          )
        })
      }
    })
  }

  // 开放小组
  openGroup(id: string) {
    this._modalService.confirm({
      nzTitle: '是否开放该小组？',
      nzOnOk: () => {
        this.groupTopicManagementService$.openThread(id).subscribe(result => {
          this.searchData();
          this._notification.success(
            '开放成功！',
            ''
          )
        }, error1 => {
          this._notification.error(
            '发生错误！',
            `${error1.error}`
          )
        })
      }
    })
  }

  // 删除话题
  delete(id: string) {
    this._modalService.confirm({
      nzTitle: '是否删除该话题？',
      nzOnOk: () => {
        this.groupTopicManagementService$.deleteThread(id).subscribe(result => {
          if (this.displayData.length == 1) {
            this.pageIndex --;
          }
          this.searchData();
          this._notification.success(
            '删除成功！',
            ''
          )
        }, error1 => {
          this._notification.error(
            '发生错误！',
            `${error1.error}`
          )
        })
      }
    })
  }
}
