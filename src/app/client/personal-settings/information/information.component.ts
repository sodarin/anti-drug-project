import { Component, OnInit } from '@angular/core';
import { UserInfoEditModalComponent } from '../../../core/modal/user-info-edit-modal/user-info-edit-modal.component';
import { PersonInfoEditService } from '../../../service/person-info-edit/person-info-edit.service'
import { NzNotificationService } from 'ng-zorro-antd/notification';
@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.less']
})
export class InformationComponent implements OnInit {


  user: any = {
    about: "",
    company: "",
    fansNum: 0,
    followedNum: 0,
    gender: "",
    id: 0,
    job: "",
    mediumAvatar: "",
    nickName: "",
    qq: "",
    signature: "",
    site: "",
    title: "",
    trueName: "",
    weibo: "",
    weixin: ""
  };

  introduction: string = '';
  constructor(private personInfoEditService: PersonInfoEditService, private notification: NzNotificationService) { }

  editPersonalInfo() {
    this.personInfoEditService.editPersonalInfo(this.user).subscribe(result => {
      this.notification.create(
        'success',
        '添加成功',
        ''
      );
    })
  }

  ngOnInit() {
    this.personInfoEditService.getAllInfo(1).subscribe(result => {
      let data = result.data;
      this.user.id = data.id;
      this.user.trueName = data.trueName;
      this.user.nickName = data.nickName;
      this.user.gender = data.gender;
      this.user.about = data.about;
      this.user.title = data.title;
      this.user.company = data.company;
      this.user.job = data.job;
      this.user.qq = data.qq;
      this.user.weibo = data.weibo;
      this.user.weixin = data.weixin;
      this.user.site = data.site;
      this.user.signature = data.signature;
      this.user.mediumAvatar = data.mediumAvatar;
      this.user.fansNum = data.fansNum;
      this.user.followedNum = data.followedNum;
    })
  }

}
