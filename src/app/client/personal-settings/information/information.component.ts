import { Component, OnInit } from '@angular/core';
import { UserInfoEditModalComponent } from '../../../core/modal/user-info-edit-modal/user-info-edit-modal.component';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.less']
})
export class InformationComponent implements OnInit {


  user: any = {
    avatarUrl: '../../assets/img/userface.jpg',
    username: 'admin',
    name: '',
    sex: '',
    title: '',
    signature: '',
    introduction: '',
    company: '',
    profession: '',
    pzoneUrl: '',
    blogUrl: '',
    wechat: '',
    QQ: ''
  };

  introduction: string = '';
  constructor() { }

  ngOnInit() {
  }

}
