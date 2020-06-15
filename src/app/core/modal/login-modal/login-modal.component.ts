import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { RegisterModalComponent } from '../register-modal/register-modal.component';
import { NzModalService, NzMessageService, NzModalRef } from 'ng-zorro-antd';
import { LoginRegisterService } from 'src/app/service/login-register/login-register.service';
import { AuthService } from 'src/app/front-desk/auth/auth.service';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.less']
})
export class LoginModalComponent implements OnInit {
  isOkLoading = false;
  dataLogin: any = {}
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private _modalService: NzModalService,
    private loginService: LoginRegisterService,
    private msg: NzMessageService,
    private modal: NzModalRef,
    private authService: AuthService,
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
      this.isOkLoading = true;
      this.loginService.postLogin(
        this.loginForm.value.username,
        this.loginForm.value.password
      ).subscribe(
        (res: any) => {
          this.dataLogin = res.data;
          this.authService.login().subscribe(() => {
            if (this.authService.isLoggedIn) {
              this.msg.success('登录成功');
              this.modal.triggerOk();
              this.modal.destroy();
            }
          })
        },
        error => {
          this.isOkLoading = false;
          this.dataLogin = error.error;
          if (this.dataLogin.text == '用户不存在') {
            this.loginForm.controls.username.setErrors({ 'confirm': true });
          } else if (this.dataLogin.text == '密码错误') {
            this.loginForm.controls.password.setErrors({ 'confirm': true });
          } else {
            console.log(error);
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
}
