import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {NzMessageService, NzModalService} from 'ng-zorro-antd';
import {LoginModalComponent} from '../core/modal/login-modal/login-modal.component';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-front-desk',
  templateUrl: './front-desk.component.html',
  styleUrls: ['./front-desk.component.less']
})
export class FrontDeskComponent implements OnInit {



  isLogin: boolean = false;
  isCollapsed: boolean = true;


  constructor(
    private router: Router,
    private _modalService: NzModalService,
    private _message: NzMessageService
  ) { }

  ngOnInit() {

  }

  login() {
    const modal = this._modalService.create({
      nzTitle: '登录',
      nzContent: LoginModalComponent,
      nzFooter: null
    })
  }


}
