import {Component, Input, OnInit, TemplateRef} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {NzMessageService, NzModalService, NzNotificationService} from 'ng-zorro-antd';
import {UserInfoViewModalComponent} from '../../../core/modal/user-info-view-modal/user-info-view-modal.component';
import {ClientClassManagementService} from '../../../service/client-class-management/client-class-management.service';

@Component({
  selector: 'app-formal-student-table',
  templateUrl: './formal-student-table.component.html',
  styleUrls: ['./formal-student-table.component.less']
})
export class FormalStudentTableComponent implements OnInit {

  @Input()
  classroomId: string;

  name: string = '';
  studentList = [];
  total: number;
  loading: boolean = false;
  pageIndex: number = 1;
  pageSize: number = 8;
  userId: string = '1';

  messageContent: string = '';
  commentContent: string = '';
  expireTime: Date;


  constructor(
    private routerInfo: ActivatedRoute,
    private _modal: NzModalService,
    private _notification: NzNotificationService,
    private classroomManagement$: ClientClassManagementService
  ) {
    this.classroomId = location.pathname.split('/')[3];
    this.classroomManagement$.addingStatus.subscribe(value => {
      this.searchData()
    })
  }

  ngOnInit() {

    // this.studentList.push({
    //   imgUrl: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    //   name: '董卓然',
    //   comment: '买一送一',
    //   involveTime: new Date().getTime(),
    //   progress: '10%'
    // },
    //   {
    //     imgUrl: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    //     name: '董卓然',
    //     comment: '买一送一',
    //     involveTime: new Date().getTime(),
    //     progress: '10%'
    //   },
    //   {
    //     imgUrl: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    //     name: '董卓然',
    //     comment: '买一送一',
    //     involveTime: new Date().getTime(),
    //     progress: '10%'
    //   },
    //   {
    //     imgUrl: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    //     name: '董卓然',
    //     comment: '买一送一',
    //     involveTime: new Date().getTime(),
    //     progress: '10%'
    //   },
    //   {
    //     imgUrl: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    //     name: '董卓然',
    //     comment: '买一送一',
    //     involveTime: new Date().getTime(),
    //     progress: '10%'
    //   });
    this.searchData()
  }

  navigateTo(url: string) {
    window.open(url, '_blank')
  }

  filterStudent() {
    this.loading = true;
    this.pageIndex = 1;
    this.classroomManagement$.getClassroomStudent(this.classroomId, 1, this.pageSize, this.name).subscribe(result => {
      this.loading = false;
      this.studentList = result.data.studentList;
      this.total = result.data.total;
    }, error1 => {
      this.loading = false;
      this._notification.error(
        '发生错误！',
        `${error1.error}`
      )
    })
  }

  searchData(pageIndex: number = this.pageIndex) {
    this.loading = true;
    this.classroomManagement$.getClassroomStudent(this.classroomId, pageIndex, this.pageSize, this.name).subscribe(result => {
      this.loading = false;
      this.studentList = result.data.studentList;
      this.total = result.data.total
    }, error1 => {
      this.loading = false;
      this._notification.error(
        '发生错误！',
        `${error1.error}`
      )
    })
  }

  sendMessage(id: string, template: TemplateRef<{}>) {
    this._modal.create({
      nzTitle: '编辑私信内容',
      nzContent: template,
      nzOkText: '发送',
      nzCancelText: '取消',
      nzOnOk: () => {
        if (this.messageContent == '') {
          this._notification.error(
            '私信内容不能为空！',
          ''
          );
          return false;
        } else {
          this.classroomManagement$.sendMessage(this.userId, id, this.messageContent).subscribe(result => {
            this._notification.success(
              '私信发送成功！',
              ''
            )
          }, error1 => {
            this._notification.error(
              '私信发送失败！',
              `${error1.error}`
            )
          });
        }
      },
    })
  }

  checkInfo(id: string) {
    this._modal.create({
      nzTitle: '个人详细信息',
      nzContent: UserInfoViewModalComponent,
      nzComponentParams: {
        userId: id
      },
      nzWidth: 600,
      nzFooter: null
    })
  }

  writeComment(data: any, template: TemplateRef<{}>) {
    this.commentContent = data.comment;
    this._modal.create({
      nzTitle: '学员备注',
      nzContent: template,
      nzOkText: '确定',
      nzCancelText: '取消',
      nzOnOk: () => {
        if (this.commentContent !== '') {
          this.classroomManagement$.updateCommentForStudent(this.classroomId, this.commentContent, data.id).subscribe(result => {
            this.searchData();
            this._notification.success(
              '修改成功！',
              ''
            )
          }, error1 => {
            this._notification.error(
              '修改失败！',
              `${error1.error}`
            )
          })
        }
      },
      nzOnCancel: () => console.log(this.commentContent)
    })
  }

  deleteStudent(id: string) {
    this._modal.confirm({
      nzTitle: '是否要删除该学员？',
      nzOkText: '删除',
      nzCancelText: '取消',
      nzOnOk: () => {
        this.classroomManagement$.deleteStudent(this.classroomId, id).subscribe(result => {
          this.searchData();
          this._notification.success(
            '移除学员成功！',
            ''
          )
        }, error1 => {
          this._notification.error(
            '移除学员失败！',
            `${error1.error}`
          )
        })
      }
    })
  }

  disabledTime = (expireTime: Date): boolean => {
    return expireTime.getTime() <= new Date().getTime()
  };

  modifyExpireTime(id: string, template: TemplateRef<{}>) {
    this._modal.create({
      nzTitle: '设置有效期',
      nzContent: template,
      nzOkText: '确认',
      nzCancelText: '取消',
      nzOnOk: () => console.log(this.expireTime)
    })
  }

  checkData(data: any) {
    console.log(data)
  }

}
