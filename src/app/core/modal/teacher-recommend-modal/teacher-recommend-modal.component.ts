import {Component, Input, OnInit} from '@angular/core';
import {NzMessageService, NzModalRef} from 'ng-zorro-antd';
import {TeacherManagementService} from '../../../service/teacher-management/teacher-management.service';

@Component({
  selector: 'app-teacher-recommend-modal',
  templateUrl: './teacher-recommend-modal.component.html',
  styleUrls: ['./teacher-recommend-modal.component.less']
})
export class TeacherRecommendModalComponent implements OnInit {

  @Input()
  id: string;

  recommendOrder: number = 1;

  constructor(
    private teacherManagementService$: TeacherManagementService,
    private _modal: NzModalRef,
    private _message: NzMessageService
  ) { }

  ngOnInit() {
  }

  submit() {
    let shouldBeClosed = false;
    if(this.recommendOrder == 0) {
      this._message.error('推荐序号不能为0！')
    } else {
      this.teacherManagementService$.changePromotedSeq(this.id,this.recommendOrder).subscribe( result => {
        this._message.success('序号编辑成功！');
        this._modal.destroy('1')
      }, error1 => {
        this._message.error(error1.error)
      } );
    }
    return shouldBeClosed;
  }

  destroy() {
    this._modal.destroy()
  }

}
