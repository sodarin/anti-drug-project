import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-login-passwd-edit-model',
  templateUrl: './login-passwd-edit-model.component.html',
  styleUrls: ['./login-passwd-edit-model.component.less']
})
export class LoginPasswdEditModelComponent implements OnInit {

  passwdEditForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.passwdEditForm = this.formBuilder.group({
      currentPasswd: [null, [Validators.required]],
      newPasswd: [null, [Validators.required]],
      newPasswdAgain: [null, [Validators.required]]
    })
  }

  edit() {
    console.log('修改成功!');
    for (const i in this.passwdEditForm.controls) {
      this.passwdEditForm.controls[i].markAsDirty();
      this.passwdEditForm.controls[i].updateValueAndValidity();
    }
  }

}
