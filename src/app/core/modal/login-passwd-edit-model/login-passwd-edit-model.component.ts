import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { LoginPasswdEditService } from 'src/app/service/login-passwd-edit/login-passwd-edit.service';
import { NzNotificationService } from 'ng-zorro-antd/notification';
@Component({
  selector: "app-login-passwd-edit-model",
  templateUrl: "./login-passwd-edit-model.component.html",
  styleUrls: ["./login-passwd-edit-model.component.less"]
})
export class LoginPasswdEditModelComponent implements OnInit {
  passwdEditForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private _loginPasswdEditService: LoginPasswdEditService,
    private _nzNotificationService: NzNotificationService) { }

  ngOnInit() {
    this.passwdEditForm = this.formBuilder.group({
      oldPassword: [null, [Validators.required]],
      newPassword: [null, [Validators.minLength(5), Validators.required]],
      newPasswordAgain: [null, [Validators.required, this.confirmmationValidator]]
    });
  }

  updateConfirmValidator() {
    Promise.resolve().then(() =>
      this.passwdEditForm.controls.newPasswordAgain.updateValueAndValidity()
    );
  }

  confirmmationValidator = (control: FormControl): { [s: string]: boolean } => {
    if (!control.value) {
      return { required: true };
    } else if (control.value !== this.passwdEditForm.controls.newPassword.value) {
      return { confirm: true, error: true };
    }
    return {};
  };

  doEdit() {
    var check: boolean = true;
    for (const i in this.passwdEditForm.controls) {
      this.passwdEditForm.controls[i].markAsDirty();
      this.passwdEditForm.controls[i].updateValueAndValidity();
      if (this.passwdEditForm.controls[i].errors) {
        check = false;
      }
    }

    if (check) {
      this._loginPasswdEditService.updateUserPassword({
        userId: 1,
        oldPassword: this.passwdEditForm.controls.oldPassword.value,
        newPassword: this.passwdEditForm.controls.newPassword.value
      }).subscribe(result => {
        this._nzNotificationService.create('success', '修改成功!', `${result.data}`)
      },
        error => {
          this._nzNotificationService.create('error', '修改失败!', `${error}`)
        })
    }
  }
}
