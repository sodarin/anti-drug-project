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
  teachplanId: string;
  taskId: string;
  title: string='';
  catalog_visible = false;
  note_visible = false;
  question_visible = false;
  taskList: any;
  userId: string = '1';
  noteForm: FormGroup;
  questionForm: FormGroup;
  videoLearingStatus:string;
  constructor(private router: Router, private formBuilder: FormBuilder,
              private courseVideoService: ClientCourseVideoService, private message: NzMessageService,
              private route: Router) { }

  ngOnInit() {
    this.courseId = location.pathname.split('/')[3];
    this.teachplanId = location.pathname.split('/')[5];
    this.taskId = location.pathname.split('/')[7];

    this.courseVideoService.getTaskList(this.teachplanId.toString()).subscribe(result => {
     // this.taskList = result;

      this.taskList = result.data[Object.keys(result.data)[0]];
     // this.taskName="";
      // let index=Number(this.taskId)-1;
      // this.title = this.taskList[index].title;  // taskId不是数组下标！！

      //获取任务信息！！！！！！！！
    });
    this.noteForm = this.formBuilder.group({
        noteContent: ['', Validators.required]
    });

    this.questionForm = this.formBuilder.group({
        questionTitle: ['', Validators.required],
        questionContent: ['', Validators.required]
    });
  }
  setVideoLearingStatus(status:any):void{
    this.videoLearingStatus=status;
  }
  noteSubmit({value, valid}): void {
    let code; // 返回码
    console.log(value.noteContent);
    // this.courseVideoService.postNote(this.userId, '1', this.courseId, this.taskId, value.noteContent).subscribe(result => {
    //   this.createMessage(result.code);
    //   if (result.code == 200){
    //     this.noteForm.setValue({noteContent: ''}); // 清空
    //     this.closeNote();
    //   }
    // });
  }
  questionSubmit({value, valid}): void {
    this.courseVideoService.postQuestion(this.userId, '1', this.courseId, this.taskId, value.questionTitle, value.questionContent).subscribe(result => {
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

  navigateByUrl(url: string) {
    this.route.navigateByUrl(url)
  }
}
