import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterModalComponent } from '../register-modal/register-modal.component';
import { NzModalService } from 'ng-zorro-antd';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.less']
})
export class LoginModalComponent implements OnInit {

  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private _modalService: NzModalService,
  ) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: [null, [Validators.required]],
      password: [null, [Validators.required]],
      remember: [true]
    })
  }

  submitLoginForm() {
    for (const i in this.loginForm.controls) {
      this.loginForm.controls[i].markAsDirty();
      this.loginForm.controls[i].updateValueAndValidity()
    }
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
    }
  }

  register() {
    const modal = this._modalService.create({
      nzTitle: '注册',
      nzContent: RegisterModalComponent,
      nzFooter: null
    })
  }
}
