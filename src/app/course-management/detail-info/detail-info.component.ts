import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NzNotificationService } from 'ng-zorro-antd';
import { CourseDetailInfoEditService } from 'src/app/service/course-detail-info-edit/course-detail-info-edit.service';

@Component({
  selector: 'app-detail-info',
  templateUrl: './detail-info.component.html',
  styleUrls: ['./detail-info.component.less']
})
export class DetailInfoComponent implements OnInit {
  validateForm: FormGroup;
  goals: any[] = ["均分90", "达到及格线"];
  audiences: any[] = ["优等生", "竞赛选手"]
  promptVisable: boolean = false;
  isLoading: boolean = false;

  //临时变量
  goal: string = '';
  audience: string = '';
  constructor(
    private fb: FormBuilder,
    private _nzNotificationService: NzNotificationService,
    private _courseDetailInfoEditService: CourseDetailInfoEditService
  ) { }

  ngOnInit() {
    this.validateForm = this.fb.group({
      courseId: [null, [Validators.nullValidator]],
      summary: [null, [Validators.nullValidator]],
      goals: [null, [Validators.nullValidator]],
      audiences: [null, [Validators.nullValidator]]
    });
  }

  submitForm(): void {
    this.isLoading = true;
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
    let detailInfo: any = {
      courseId: 1,
      summary: this.validateForm.controls.summary.value,
      goals: this.goals,
      audiences: this.audiences
    }
    this._courseDetailInfoEditService.setDetailInfo(detailInfo).subscribe(result => {
      this.promptVisable = true;
      this.isLoading = false;
    }, err => {
      this._nzNotificationService.create('error', '保存失败!', `${err}`);
      this.isLoading = false;
    })
  }

  drop(event: CdkDragDrop<any[]>, key: string) {
    if (key == 'goal')
      moveItemInArray(this.goals, event.previousIndex, event.currentIndex);
    else
      moveItemInArray(this.audiences, event.previousIndex, event.currentIndex);
  }



  addItem(key: string) {
    if (key == '') return;
    if (key == 'goal')
      this.goals.push(this.goal);
    else
      this.audiences.push(this.audience);
  }
  removeItem(value: string, key: string) {
    if (key == 'goal')
      this.goals.some((item, i) => {
        if (item == value) {
          this.goals.splice(i, 1);
          return true;
        }
      });
    else
      this.audiences.some((item, i) => {
        if (item == value) {
          this.audiences.splice(i, 1);
          return true;
        }
      });

  }

}
