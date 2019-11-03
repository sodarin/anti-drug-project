import { Component, OnInit } from '@angular/core';
import { UserInfoEditModalComponent } from '../../../core/modal/user-info-edit-modal/user-info-edit-modal.component';
import { PersonInfoEditService } from '../../../service/person-info-edit/person-info-edit.service'
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { UploadChangeParam, NzMessageService, UploadXHRArgs } from 'ng-zorro-antd';
import { HttpEventType, HttpResponse, HttpClient } from '@angular/common/http';
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
    mediumAvatar: null,
    nickName: "",
    qq: "",
    signature: "",
    site: "",
    title: "",
    trueName: "",
    weibo: "",
    weixin: ""
  };

  loading: boolean = false;

  introduction: string = '';
  constructor(
    private personInfoEditService: PersonInfoEditService,
    private notification: NzNotificationService,
    private _http: HttpClient,
    private msg: NzMessageService
  ) { }

  editPersonalInfo() {
    this.personInfoEditService.updateUserDetail(this.user).subscribe(result => {
      this.notification.success('修改成功', '');
    }, err => {
      this.notification.error('修改失败', '');
    })
  }

  customReq = (item: UploadXHRArgs) => {
    this.loading = true;
    const formData = new FormData();
    formData.append('file', item.file as any);
    return this._http.post(item.action, formData).subscribe(
      (event: any) => {
        console.log(event);
        console.log(HttpEventType);
        if (event.message === 'SUCCESS') {
          item.onSuccess!(event.body, item.file!, event);
        } else if (event instanceof HttpResponse) {
          item.onSuccess!(event.body, item.file!, event);
        }
        this.loading = false;
      },
      err => {
        item.onError!(err, item.file!);
      }
    );
  };

  ngOnInit() {
    this.personInfoEditService.getPersonDetail(1).subscribe(result => {
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
