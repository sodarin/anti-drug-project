import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormControl,FormGroup,Validators} from "@angular/forms";
@Component({
  selector: 'app-find-passwd-modal',
  templateUrl: './find-passwd-modal.component.html',
  styleUrls: ['./find-passwd-modal.component.less']
})
export class FindPasswdModalComponent implements OnInit {
  passwdEditForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.passwdEditForm = this.formBuilder.group({
      mailId: [null, [Validators.required]],
      Verification: [null, [Validators.required]],
      newPasswd: [null, [Validators.required]],
      newPasswdAgain: [null, [Validators.required, this.confirmmationValidator]]
    });
  }

  updateConfirmValidator() {
    Promise.resolve().then(() =>
      this.passwdEditForm.controls.newPasswdAgain.updateValueAndValidity()
    );
  }

  confirmmationValidator = (control: FormControl): { [s: string]: boolean } => {
    if (!control.value) {
      return { required: true };
    } else if (control.value !== this.passwdEditForm.controls.newPasswd.value) {
      return { confirm: true, error: true };
    }
    return {};
  };

  doEdit() {
    for (const i in this.passwdEditForm.controls) {
      this.passwdEditForm.controls[i].markAsDirty();
      this.passwdEditForm.controls[i].updateValueAndValidity();
    }
  }

}
