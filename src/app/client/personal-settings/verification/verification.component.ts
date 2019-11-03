import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-verification',
  templateUrl: './verification.component.html',
  styleUrls: ['./verification.component.less']
})
export class VerificationComponent implements OnInit {
  validateForm: FormGroup;
  faceimg: string = ""
  backimg: string = ""
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.validateForm = this.fb.group({
      trueName: [null, [Validators.required, Validators.pattern(/^[\u4E00-\u9FA5]{1,5}$/)]],
      id: [null, [Validators.required, Validators.pattern(/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/)]],
      backimg: [null, [Validators.required]],
      faceimg: [null, [Validators.required]],
    });
  }

  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
  }

}
