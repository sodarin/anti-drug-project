import { Component, OnInit } from '@angular/core';
import {NzMessageService, NzModalService,NzNotificationService} from 'ng-zorro-antd';
import {GroupmemberService} from "../../../../../service/groupmember/groupmember.service";
import {GroupEditService} from '../../../../../service/groupedit-edit/group-edit.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {GrouplistService} from '../../../../../service/grouplist/grouplist.service';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.less']
})
export class EditComponent implements OnInit {
  inputValue:string;
  content: string = '';
  threadCreatingForm: FormGroup;
  groupId:string;
  title:string


  constructor(private _modalService: NzModalService,
              private GroupmemberService$:GroupmemberService,
              private _message: NzMessageService,
              private groupeditEditService$:GroupEditService,
              private _notification: NzNotificationService,
              private fb: FormBuilder,
              private routeInfo: ActivatedRoute,
              private grouplistService$:GrouplistService

              ) { }

  ngOnInit() {
    this.groupId = this.routeInfo.snapshot.params['id'];
    this.getGroupIntroduction()
    this.threadCreatingForm = this.fb.group({
      title: ['', Validators.required],
      content: ['', Validators.required],
    })
  }

  getGroupIntroduction(){
    this.grouplistService$.showGroupIntroduction(this.groupId).subscribe(result=>{
      this.threadCreatingForm = this.fb.group({
        title: [result.data.groupTitle, Validators.required],
        content: [result.data.groupIntroduction, Validators.required],
      })

    },error1 => {
      this._notification.create(
        'error',
        '小组介绍获取失败',
        `${error1.error}`)
    })
  }
  //修改;
 setGroupInfo(){


   for (let i in this.threadCreatingForm.controls) {
     this.threadCreatingForm.controls[i].markAsDirty();
     this.threadCreatingForm.controls[i].updateValueAndValidity()
   }
   if (!this.threadCreatingForm.controls.title.errors && !this.threadCreatingForm.controls.content.errors) {
     this.groupeditEditService$.setGroupInfo(this.threadCreatingForm.controls.title.value,this.threadCreatingForm.controls.content.value,this.groupId).subscribe(result => {
       this._notification.create(
         'success',
         '修改成功',
         ''
       )
       let i;
       this.groupeditEditService$.changeStatus.subscribe(value => i = value);
       this.groupeditEditService$.changeStatus.next(i + 1);
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
      this.ngOnInit()
 }



 }




