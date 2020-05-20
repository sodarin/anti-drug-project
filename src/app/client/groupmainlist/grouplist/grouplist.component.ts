  import { Component, OnInit } from '@angular/core';
  import {GroupEditService} from '../../../service/groupedit-edit/group-edit.service';
  import {NzNotificationService} from 'ng-zorro-antd';
  import {ActivatedRoute} from '@angular/router';
  import {GrouplistService} from '../../../service/grouplist/grouplist.service';



@Component({
  selector: 'app-grouplist',
  templateUrl: './grouplist.component.html',
  styleUrls: ['./grouplist.component.less']
})
export class GrouplistComponent implements OnInit {
  topicname='心理咨询';
  topicnumber=2;
  number=3;
  date='2019-8-6';
  topicList:[];
  groupId:string;

  constructor( private groupeditEditService$:GroupEditService,
               private _notification: NzNotificationService,
               private routeInfo: ActivatedRoute,
               private grouplistService$:GrouplistService,
               ) {  this.groupId = this.routeInfo.snapshot.params['id'];
    this.groupeditEditService$.changeStatus.subscribe(value => {
      this.getTopic()
    })}

  ngOnInit() {

  }
  //获取小组话题名称
  getTopic(){
    this.grouplistService$.showGroupIntroduction(this.groupId).subscribe(result=>{
      this.topicList=result.data;
    },error1 => {
      this._notification.create(
        'error',
        '小组名称获取失败',
        `${error1.error}`)
    })
  }
}
