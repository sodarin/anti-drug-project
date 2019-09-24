import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import differenceInCalendarDays from 'date-fns/difference_in_calendar_days';
import setHours from 'date-fns/set_hours';
@Component({
  selector: "app-security-problem-edit-modal",
  templateUrl: "./security-problem-edit-modal.component.html",
  styleUrls: ["./security-problem-edit-modal.component.less"]
})
export class SecurityProblemEditModalComponent implements OnInit {

  today = new Date();
  timeDefaultValue = setHours(new Date(), 0);
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
    return differenceInCalendarDays(current, this.today) > 0;
  };

  disabledDateTime = (): object => {
    return {
      nzDisabledHours: () => this.range(0, 24).splice(4, 20),
      nzDisabledMinutes: () => this.range(30, 60),
      nzDisabledSeconds: () => [55, 56]
    };
  };
}
