import { Component, OnInit } from '@angular/core';
import {NzNotificationService} from 'ng-zorro-antd';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {GroupmainlistService} from '../../../../service/groupmainlist/groupmainlist.service';
import {GrouphotService} from '../../../../service/grouphot/grouphot.service';

@Component({
  selector: 'app-groupthreadedit',
  templateUrl: './groupthreadedit.component.html',
  styleUrls: ['./groupthreadedit.component.less']
})
export class GroupthreadeditComponent implements OnInit {
  title: string = '';
  content: string = '';
 threadId:string;
  threadCreatingForm: FormGroup;
  constructor(private _notification: NzNotificationService,
              private fb: FormBuilder,
              private groupmainlistService$:GroupmainlistService,
              private grouphotService$:GrouphotService,
              ) { }

  ngOnInit() {
    let pathList = location.pathname.split('/');
    this.threadId = pathList[5];
    this.getGroupIntroduction()
    this.threadCreatingForm = this.fb.group({
      title: ['', Validators.required],
      content: ['', Validators.required]
    })
  }
  getGroupIntroduction(){
    this.grouphotService$.showRecentGroup(this.threadId).subscribe(result=>{
      this.threadCreatingForm = this.fb.group({
        title: [result.threadTitle, Validators.required],
        content: [result.threadContent, Validators.required],
      })

    },error1 => {
      this._notification.create(
        'error',
        '话题介绍获取失败',
        `${error1.error}`)
    })
  }

  addNewGroup(){
    for (let i in this.threadCreatingForm.controls) {
      this.threadCreatingForm.controls[i].markAsDirty();
      this.threadCreatingForm.controls[i].updateValueAndValidity()
    }
    if (!this.threadCreatingForm.controls.title.errors && !this.threadCreatingForm.controls.content.errors) {
      this.groupmainlistService$.updateThread(this.threadCreatingForm.controls.content.value,this.threadId,this.threadCreatingForm.controls.title.value).subscribe(result => {
        this._notification.create(
          'success',
          '修改成功',
          ''
        )

      },error1 => {
        this._notification.create(
          'error',
          '修改失败',
          `${error1.error}`
        )
      })
    } else {
      this._notification.create(
        'error',
        '发生错误！',
        '请正确填写表单信息'
      )
    }

  }
}
