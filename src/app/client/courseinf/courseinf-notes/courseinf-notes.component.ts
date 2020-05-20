import { Component, OnInit, ViewChild, ViewContainerRef, TemplateRef, ViewRef, Input } from '@angular/core';
import { NzModalService, NzModalRef } from 'ng-zorro-antd/modal';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { CourseInfService } from 'src/app/service/courseinf-frontend/courseinf-frontend.service';
@Component({
  selector: 'app-courseinf-notes',
  templateUrl: './courseinf-notes.component.html',
  styleUrls: ['./courseinf-notes.component.less'],
  inputs:["courseid"],
})
export class CourseinfNotesComponent implements OnInit {
  courseid = "0"; 
//笔记
notes = [
  {
    userName: 'Han Solo',
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    content:
      'We supply a series of design principles, practical patterns and high quality design resources' +
      '(Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
    createdTime: '2019.1.1',
    appreciate: 10,
    courseSetTitle: "毒品的危害",
    userSmallAvatar:""
  }
];

noteorder: string = "New";
select_note: string = "全部课程";

total_notes_page = 1;//总笔记页码
current_notespage = 1;//当前笔记页码
  constructor(private modalService: NzModalService, private courseinfservice: CourseInfService,private notification: NzNotificationService) { }

  ngOnInit() {
    this.courseinfservice.getCoursesNotes(this.courseid,this.current_notespage,this.noteorder).subscribe((res: any) => {
      this.setCoursesNotes(res);
    }, error => {
      this.notification.create(
        'error',
        '错误！',
        `${error}`,
        { nzDuration: 100 }
      )
    });
  }

  setCoursesNotes(res: any) {
    this.notes = res;
    //this.total_notes_page = res.data.total;

    for (let i = 0; i < this.notes.length; i++) {
      if (this.notes[i].userSmallAvatar == undefined) {
        this.notes[i].userSmallAvatar = "../../../../assets/img/timg2.jpg";
      } else if (this.notes[i].userSmallAvatar == "") {
        this.notes[i].userSmallAvatar = "../../../../assets/img/timg2.jpg";
      } else if (this.notes[i].userSmallAvatar.substr(0, 6) == "public") {
        this.notes[i].userSmallAvatar = "../../../../assets/img/timg2.jpg";
      } else if (this.notes[i].userSmallAvatar.substr(7, 7) == "edusoho") {
        this.notes[i].userSmallAvatar = "../../../../assets/img/timg2.jpg";
      }
    }
  }

  selectedValue = "";
  changeOrder_Note(order: string): void {
    this.noteorder = order;
    this.current_notespage = 1;
    this.courseinfservice.getCoursesNotes(this.courseid,this.current_notespage,this.noteorder).subscribe((res: any) => {
      this.setCoursesNotes(res);
    }, error => {
      this.notification.create(
        'error',
        '错误！',
        `${error}`,
        { nzDuration: 100 }
      )
    });
  }

  onPageChange_note(event?: any) {
    this.courseinfservice.getCoursesNotes(this.courseid,this.current_notespage,this.noteorder).subscribe((res: any) => {
      this.setCoursesNotes(res);
    }, error => {
      this.notification.create(
        'error',
        '错误！',
        `${error}`,
        { nzDuration: 100 }
      )
    });
    window.scrollTo(0, 0);
  }

}
