import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { LoginRegisterService } from 'src/app/service/login-register/login-register.service';

@Component({
  selector: 'app-register-modal',
  templateUrl: './register-modal.component.html',
  styleUrls: ['./register-modal.component.less']
})
export class RegisterModalComponent implements OnInit {
  registerForm: FormGroup;
  dataRegister: any = {}

  constructor(
    private fb: FormBuilder,
    private registerService: LoginRegisterService
    ) { }

  ngOnInit() {
    this.registerForm = this.fb.group({
      username: [null, [Validators.required]],
      email: [null, [Validators.email, Validators.required]],
      phoneNumber: [null, [Validators.required]],
      password: [null, [Validators.required]],
      checkPassword: [null, [Validators.required, this.confirmationValidator]],
      agree: [false]
    })
  }

  submitRegisterForm() {
    for (const i in this.registerForm.controls) {
      this.registerForm.controls[i].markAsDirty();
      this.registerForm.controls[i].updateValueAndValidity()
    }
    if (this.registerForm.valid) {
      console.log(this.registerForm.value);

      this.registerService.postRegister(
        this.registerForm.value.username,
        this.registerForm.value.email,
        this.registerForm.value.phoneNumber,
        this.registerForm.value.password
      ).then(
        data => {
          this.dataRegister = data;
          if (this.dataRegister == '用户已存在') {
            this.registerForm.controls.username.setErrors({ 'confirm': true });
          } else if (this.dataRegister == '注册成功') {
            console.log('登录成功');
          }
        }
      );
    }
  }

  updateConfirmValidator(): void {
    Promise.resolve().then(() => this.registerForm.controls.checkPassword.updateValueAndValidity());
  }

  confirmationValidator = (control: FormControl): { [s: string]: boolean } => {
    if (!control.value) {
      return { required: true };
    } else if (control.value !== this.registerForm.controls.password.value) {
      return { confirm: true, error: true };
    }
    return {};
  };
}
