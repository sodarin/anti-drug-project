import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Router } from '@angular/router'
import { QuestionCreateService } from 'src/app/service/question-create/question-create.service';
import { NzNotificationService } from 'ng-zorro-antd';

@Component({
  selector: 'app-single-choice',
  templateUrl: './single-choice.component.html',
  styleUrls: ['./single-choice.component.less']
})
export class SingleChoiceComponent implements OnInit {

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



  addField(e?: MouseEvent): void {
    if (e) {
      e.preventDefault();
    }
    const id = this.listOfChoiceControl.length > 0 ? this.listOfChoiceControl[this.listOfChoiceControl.length - 1].id + 1 : 0;

    const control = {
      id,
      controlInstance: `选项${String.fromCharCode(id + 65)}`
    };
    const index = this.listOfChoiceControl.push(control);
    console.log(this.listOfChoiceControl[this.listOfChoiceControl.length - 1]);
    this.validateForm.addControl(
      this.listOfChoiceControl[index - 1].controlInstance,
      new FormControl(null, Validators.required)
    );
  }

  removeField(i: { id: number; controlInstance: string }, e: MouseEvent): void {
    e.preventDefault();
    if (this.listOfChoiceControl.length == 2) {
      this.message.create('error', '选项最少2个!');
      return;
    }
    if (this.listOfChoiceControl.length > 2) {
      const index = this.listOfChoiceControl.indexOf(i);
      this.listOfChoiceControl.splice(index, 1);
      this.validateForm.removeControl(i.controlInstance);
      this.listOfChoiceControl.forEach((item, i) => {
        this.listOfChoiceControl[i].id = i;
        this.listOfChoiceControl[i].controlInstance = `选项${String.fromCharCode(i + 65)}`;
      })
    }
  }

  getFormControl(name: string): AbstractControl {
    return this.validateForm.controls[name];
  }

  submitForm(): void {
    let check: boolean = true;
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
      if (this.validateForm.controls.error) {
        check = false;
      }
    }
    if (check) {
      this._questionCreateService.createQuestion({}).subscribe(result => {
        this._nzNotificationService.create('success', '添加成功!', `${result}`);
      }, err => {
        this._nzNotificationService.create('error', '添加失败!', `${err}`);
      })
    }
  }

  constructor(
    private fb: FormBuilder,
    private message: NzMessageService,
    private _questionCreateService: QuestionCreateService,
    private _nzNotificationService: NzNotificationService,
    private router: Router) { }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      stem: [null, [Validators.required]],
      answer: [null, [Validators.required]]
    });
    this.addField();
    this.addField();
  }
  navigateByUrl(url: string) {
    this.router.navigateByUrl(url);
  }
}
