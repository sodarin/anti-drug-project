import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { max } from 'rxjs/operators';
import { QuestionCreateService } from 'src/app/service/question-create/question-create.service';
import { NzNotificationService } from 'ng-zorro-antd';

@Component({
  selector: 'app-test-paper-create',
  templateUrl: './test-paper-create.component.html',
  styleUrls: ['./test-paper-create.component.less']
})
export class TestPaperCreateComponent implements OnInit {
  validateForm: FormGroup;//表单校验

  scope: string = '按课程';//出题范围
  way: string = '随机生成';//生成方式
  selectVisible: boolean = false;
  sliderVisible: boolean = false;
  difficulty: any[] = [20, 50];
  minValue: number = 0;
  maxValue: number = 0;

  questions: any[] = [{name:"单选题",type:"single_choice"}, 
                      {name:"多选题",type:"mutiple_choice"}, 
                      {name:"不定项选择题",type:"choice"}, 
                      {name:"判断题",type:"determine"},];//, "问答题", "填空题", "材料题"];
  questionNum:any = {
    single_choice:0,
    mutiple_choice:0,
    choice:0,
    determine:0
  };
  courseId:any;
  constructor(private router: Router, private fb: FormBuilder,
    private _questionCreateService: QuestionCreateService,
    private notification: NzNotificationService,
    ) { }

  ngOnInit() {
    this.validateForm = this.fb.group({
      paperName: [null, [Validators.required]],
      multi_missing: [0, [Validators.max(2)]],
      indifinite_missing: [0, [Validators.max(2)]],
      minQuestion: [0, [Validators.min(1)]]
    })

    this.courseId = location.pathname.split('/')[3];
    this.getQuestionsNum();
  }

  navigateByUrl(url: string) {
    this.router.navigateByUrl(url);
  }

  courseChange(value: string) {
    if (this.scope == '默认教学计划') {
      this.selectVisible = true;
    } else {
      this.selectVisible = false;
    }
  }

  onChange(value: number) {
    if (value[1] - value[0] == 30) {
      this.maxValue = value[1];
      this.minValue = value[0];
    } else if (value[1] - value[0] < 30) {
      this.difficulty[0] = this.minValue;
      this.difficulty[1] = this.maxValue;
    }
  }

  wayChange(value: string) {
    if (this.way == '随机生成') {
      this.sliderVisible = true;
      this.way = '按难易程度';
    } else {
      this.sliderVisible = false;
      this.way = '随机生成';
    }
  }

  drop(event: CdkDragDrop<any[]>) {
    moveItemInArray(this.questions, event.previousIndex, event.currentIndex);
  }

  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
  }

  getQuestionsNum(){
    this._questionCreateService.getQuestionNum(this.courseId).subscribe((res: any) => {
      for(var i=0;i<res.data.length;i++){
        this.questionNum[res.data[i].type] = res.data[i].cnt;
      }
      this.notification.create(
        'success',
        '提交成功！',
        `提交成功`)
    }, error => {
      this.notification.create(
        'error',
        '发生错误！',
        `${error.error}`)
    })
  }

}
