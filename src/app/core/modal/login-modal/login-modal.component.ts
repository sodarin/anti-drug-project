import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { RegisterModalComponent } from '../register-modal/register-modal.component';
import { NzModalService } from 'ng-zorro-antd';
import { LoginService } from 'src/app/service/login/login.service';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.less']
})
export class LoginModalComponent implements OnInit {

  dataLogin: any = {}
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private _modalService: NzModalService,
    private loginService: LoginService
  ) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: [null, [Validators.required]],
      password: [null, [Validators.required]]
    })
  }

  submitLoginForm() {
    for (const i in this.loginForm.controls) {
      this.loginForm.controls[i].markAsDirty();
      this.loginForm.controls[i].updateValueAndValidity()
    }
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);

      this.loginService.postLogin(this.loginForm.value.username, this.loginForm.value.password).then(
        data => {
          this.dataLogin = data;
          if (this.dataLogin == '用户不存在') {
            this.loginForm.controls.username.setErrors({ 'confirm': true });
          } else if (this.dataLogin == '密码错误') {
            this.loginForm.controls.password.setErrors({ 'confirm': true });
          } else {
            console.log('登录成功');

          }
        }
      );
    }
  }

  register() {
    const modal = this._modalService.create({
      nzTitle: '注册',
      nzContent: RegisterModalComponent,
      nzFooter: null
    })
  }

  confirmationValidator = (control: FormControl): { [s: string]: boolean } => {
    if (!control.value) {
      return { required: true };
    } else if (control.value !== this.loginForm.controls.password.value) {
      return { confirm: true, error: true };
    }
    return {};
  };
}
