import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router'
@Component({
  selector: 'app-completion',
  templateUrl: './completion.component.html',
  styleUrls: ['./completion.component.less']
})
export class CompletionComponent implements OnInit {

  //栅格的长度
  lblLength: number = 3;
  conLength: number = 18;

  //选择器的隐藏
  selectVisible: boolean = true;
  //高级选项的可见性
  isCollapse: boolean = false;
  //表单冒号可见性
  colonVisible: boolean = false;

  validateForm: FormGroup;
  listOfChoiceControl: Array<{ id: number; controlInstance: string }> = [];


  getFormControl(name: string): AbstractControl {
    return this.validateForm.controls[name];
  }

  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
    console.log(this.validateForm.value);
  }

  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      stem: [null, [Validators.required]],
      answer: [null, [Validators.required]]
    });
  }

  navigateByUrl(url: string) {
    this.router.navigateByUrl(url);
  }
}
