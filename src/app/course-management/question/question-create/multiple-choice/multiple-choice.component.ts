import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Router } from '@angular/router'
@Component({
  selector: 'app-multiple-choice',
  templateUrl: './multiple-choice.component.html',
  styleUrls: ['./multiple-choice.component.less']
})
export class MultipleChoiceComponent implements OnInit {

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
  listOfChoiceControl: Array<{ id: number; controlInstance: string; isSelected: boolean }> = [];

  //答案的数量
  answerCount: number = 0;



  addField(e?: MouseEvent): void {
    if (e) {
      e.preventDefault();
    }
    const id = this.listOfChoiceControl.length > 0 ? this.listOfChoiceControl[this.listOfChoiceControl.length - 1].id + 1 : 0;

    const control = {
      id,
      controlInstance: `选项${String.fromCharCode(id + 65)}`,
      isSelected: false
    };
    const index = this.listOfChoiceControl.push(control);
    console.log(this.listOfChoiceControl[this.listOfChoiceControl.length - 1]);
    this.validateForm.addControl(
      this.listOfChoiceControl[index - 1].controlInstance,
      new FormControl(null, Validators.required)
    );
  }

  removeField(i: { id: number; controlInstance: string; isSelected: boolean }, e: MouseEvent): void {
    e.preventDefault();
    if (this.listOfChoiceControl.length > 2) {
      const index = this.listOfChoiceControl.indexOf(i);
      this.listOfChoiceControl.splice(index, 1);
      console.log(this.listOfChoiceControl);
      this.validateForm.removeControl(i.controlInstance);
    } else {
      this.message.create('error', '选项最少2个!');
    }
  }

  checkIsSelected(value: boolean) {
    let count: number = this.answerCount;
    this.answerCount = (value) ? count + 1 : count - 1;
  }

  getFormControl(name: string): AbstractControl {
    return this.validateForm.controls[name];
  }

  submitForm(): void {
    if (this.answerCount < 2) {
      this.message.create('error', '选项最少2个!');
      return;
    }
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
  }

  constructor(private fb: FormBuilder, private message: NzMessageService, private router: Router) { }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      stem: [null, [Validators.required]],
    });
    this.addField();
    this.addField();
    this.addField();
    this.addField();
  }
  navigateByUrl(url: string) {
    this.router.navigateByUrl(url);
  }
}
