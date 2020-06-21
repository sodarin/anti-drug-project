import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
@Component({
  selector: "app-security-problem-edit-modal",
  templateUrl: "./security-problem-edit-modal.component.html",
  styleUrls: ["./security-problem-edit-modal.component.less"]
})
export class SecurityProblemEditModalComponent implements OnInit {

  today = new Date().getTime();
  securityEditForm: FormGroup;


  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.securityEditForm = this.formBuilder.group({
      problem: ["你的生日", [Validators.required]],
      answer: [null, [Validators.required]]
    })
  }


  doEdit() {
    for (const i in this.securityEditForm.controls) {
      this.securityEditForm.controls[i].markAsDirty();
      this.securityEditForm.controls[i].updateValueAndValidity();
    }
  }

  range(start: number, end: number): number[] {
    const result: number[] = [];
    for (let i = start; i < end; i++) {
      result.push(i);
    }
    return result;
  }

  disabledDate = (current: Date): boolean => {
    // Can not select days before today and today
    return current.getTime() > this.today;
  };


}
