import { Component, OnInit , Input } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, Validators, FormBuilder } from '@angular/forms' ;
import { ClientCourseVideoService } from 'src/app/service/client-course-video/client-course-video.service';
import { NzMessageService } from 'ng-zorro-antd/message';
@Component({
  selector: 'app-coursevideo',
  templateUrl: './coursevideo.component.html',
  styleUrls: ['./coursevideo.component.less'],
  providers: [ClientCourseVideoService]
})
export class CoursevideoComponent implements OnInit {
  courseId: string;
  videoId: string;
  taskId: string;
  taskName: string;
  catalog_visible = false;
  note_visible = false;
  question_visible = false;
  taskList: any;
  noteForm: FormGroup;
  questionForm: FormGroup;
  constructor(private router: Router, private formBuilder: FormBuilder,
              private courseVideoService: ClientCourseVideoService, private message: NzMessageService) { }

  ngOnInit() {
    this.courseId = location.pathname.split('/')[3];
    this.taskId = location.pathname.split('/')[5];
    this.videoId = location.pathname.split('/')[7];

    this.courseVideoService.getTaskList(this.courseId.toString()).subscribe(result => {
      this.taskList = result;
     // this.taskName="";
      this.taskName = this.taskList[0].taskName;  // taskId不是数组下标！！
    });
    this.noteForm = this.formBuilder.group({
        noteContent: ['', Validators.required]
    });

    this.questionForm = this.formBuilder.group({
        questionTitle: ['', Validators.required],
        questionContent: ['', Validators.required]
    });
  }
  noteSubmit({value, valid}): void {
    let code; // 返回码
    this.courseVideoService.postNote('5', '1', this.courseId, this.taskId, 'test').subscribe(result => {
      this.createMessage(result.code);
      if (result.code == 200){
        this.noteForm.setValue({noteContent: ''}); // 清空
        this.closeNote();
      }
    });
  }
  questionSubmit({value, valid}): void {
    this.courseVideoService.postQuestion('5', '1', this.courseId, this.taskId, value.questionTitle, value.questionContent).subscribe(result => {
      this.createMessage(result.code);
      if (result.code == 200){
        this.questionForm.setValue({questionTitle: '', questionContent: ''}); // 清空
        this.closeQuestion();
      }
    });

  }
  createMessage(code: number): void {
    if (code === 200) {
      this.message.create('success', '提交成功');
    } else {
      this.message.create('error', '提交失败:' + code);
    }
  }
  openCatalog(): void {
    this.catalog_visible = true;
  }

  closeCatalog(): void {
    this.catalog_visible = false;
  }
  openNote(): void {
    this.note_visible = true;
  }

  closeNote(): void {
    this.note_visible = false;
  }
  openQuestion(): void {
    this.question_visible = true;
  }

  closeQuestion(): void {
    this.question_visible = false;
  }
}
