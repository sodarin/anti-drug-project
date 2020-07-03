import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from "@angular/forms";
import { RegisterModalComponent } from "../register-modal/register-modal.component";
import { NzModalService, NzMessageService, NzModalRef } from "ng-zorro-antd";
import { LoginRegisterService } from "src/app/service/login-register/login-register.service";
import { UserManagementService } from "src/app/service/user-management/user-management.service";
import { MyteachingService } from "src/app/service/admin-review/myteaching/myteaching.service";

@Component({
  selector: "app-login-modal",
  templateUrl: "./login-modal.component.html",
  styleUrls: ["./login-modal.component.less"],
})
export class LoginModalComponent implements OnInit {
  isOkLoading = false;
  dataLogin: any = {};
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private _modalService: NzModalService,
    private loginService: LoginRegisterService,
    private msg: NzMessageService,
    private userManagementService: UserManagementService,
    private myteachingService: MyteachingService,
    private modal: NzModalRef
  ) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: [null, [Validators.required]],
      password: [null, [Validators.required]],
    });
  }

  submitLoginForm() {
    for (const i in this.loginForm.controls) {
      this.loginForm.controls[i].markAsDirty();
      this.loginForm.controls[i].updateValueAndValidity();
    }

    if (this.loginForm.valid) {
      this.isOkLoading = true;
      this.loginService
        .postLogin(this.loginForm.value.username, this.loginForm.value.password)
        .subscribe(
          (res: any) => {
            //保存用户基本信息
            window.localStorage.setItem("id", res);
            this.userManagementService
              .getPersonalDetailById(res)
              .subscribe((data) => {
                for (let [key, value] of Object.entries(data.data)) {
                  window.localStorage.setItem(key + "", value + "");
                }
              });

            //保存用户token
            this.loginService
              .getToken(
                this.loginForm.value.username,
                this.loginForm.value.password
              )
              .subscribe((data: any) => {
                window.localStorage.setItem("expires_in", data.expires_in);
                this.loginService.checkToken(data.access_token)
                .subscribe((access_token: any) => {
                  for (let [key, value] of Object.entries(access_token)) {
                    window.localStorage.setItem(key + "", value + "");
                  }
                });
              });

            //保存用户所在小组id
            this.myteachingService.getMyJoinGroup(res).subscribe((data) => {
              let myGroups = "";
              for (const groupItem of data.data) {
                myGroups = myGroups + groupItem.id + ";";
              }
              window.localStorage.setItem("myGroups", myGroups);
            });
            
            //保存用户所管理小组id
            this.myteachingService.getMyOwnGroup(res).subscribe((data) => {
              let myOwnGroups = "";
              for (const groupItem of data.data) {
                myOwnGroups = myOwnGroups + groupItem.id + ";";
              }
              window.localStorage.setItem("myOwnGroups", myOwnGroups);
            });

            this.msg.success("登录成功");
            this.modal.triggerOk();
            this.modal.destroy();
          },
          (error) => {
            this.msg.error("登录失败");
            this.isOkLoading = false;
            this.dataLogin = error.error;
            if (this.dataLogin.text == "用户不存在") {
              this.loginForm.controls.username.setErrors({ confirm: true });
            } else if (this.dataLogin.text == "密码错误") {
              this.loginForm.controls.password.setErrors({ confirm: true });
            } else {
              console.log(error);
            }
          }
        );
    }
  }

  register() {
    const modal = this._modalService.create({
      nzTitle: "注册",
      nzContent: RegisterModalComponent,
      nzFooter: null,
    });
    this.modal.destroy();
  }
}
