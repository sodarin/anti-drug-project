import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
@Component({
  selector: "app-login-passwd-edit-model",
  templateUrl: "./login-passwd-edit-model.component.html",
  styleUrls: ["./login-passwd-edit-model.component.less"]
})
export class LoginPasswdEditModelComponent implements OnInit {
  passwdEditForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.passwdEditForm = this.formBuilder.group({
      currentPasswd: [null, [Validators.required]],
      newPasswd: [null, [Validators.minLength(5), Validators.required]],
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
