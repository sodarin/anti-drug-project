import {Component, Input, OnInit, TemplateRef} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {NzMessageService, NzModalService} from 'ng-zorro-antd';
import {UserInfoViewModalComponent} from '../../../core/modal/user-info-view-modal/user-info-view-modal.component';

@Component({
  selector: 'app-formal-student-table',
  templateUrl: './formal-student-table.component.html',
  styleUrls: ['./formal-student-table.component.less']
})
export class FormalStudentTableComponent implements OnInit {

  @Input()
  classroomId: string;

  name: string;
  studentList = [];
  total: number;
  loading: boolean = false;
  pageIndex: number = 1;

  messageContent: string = '';
  commentContent: string = '';
  expireTime: Date;


  constructor(
    private routerInfo: ActivatedRoute,
    private _modal: NzModalService,
    private _message: NzMessageService
  ) { }

  ngOnInit() {
    this.classroomId = this.routerInfo.snapshot.params['id'];
    this.studentList.push({
      imgUrl: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
      name: '董卓然',
      comment: '买一送一',
      involveTime: new Date().getTime(),
      progress: '10%'
    },
      {
        imgUrl: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
        name: '董卓然',
        comment: '买一送一',
        involveTime: new Date().getTime(),
        progress: '10%'
      },
      {
        imgUrl: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
        name: '董卓然',
        comment: '买一送一',
        involveTime: new Date().getTime(),
        progress: '10%'
      },
      {
        imgUrl: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
        name: '董卓然',
        comment: '买一送一',
        involveTime: new Date().getTime(),
        progress: '10%'
      },
      {
        imgUrl: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
        name: '董卓然',
        comment: '买一送一',
        involveTime: new Date().getTime(),
        progress: '10%'
      });
  }

  filterStudent() {

  }

  searchData(pageIndex: number = this.pageIndex) {

  }

  sendMessage(id: string, template: TemplateRef<{}>) {
    this._modal.create({
      nzTitle: '编辑私信内容',
      nzContent: template,
      nzOkText: '发送',
      nzCancelText: '取消',
      nzOnOk: () => {
        if (this.messageContent == '') {
          this._message.error('私信内容不能为空！');
          return false;
        } else {
          console.log(this.messageContent)
        }
      },
      nzOnCancel: () => console.log(this.messageContent)
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
      nzOnOk: () => console.log(this.commentContent),
      nzOnCancel: () => console.log(this.commentContent)
    })
  }

  deleteStudent(id: string) {
    this._modal.confirm({
      nzTitle: '是否要删除该学员？',
      nzOkText: '删除',
      nzCancelText: '取消',
      nzOnOk: () => console.log('1111')
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

}
