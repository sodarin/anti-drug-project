import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NzModalRef} from 'ng-zorro-antd';

@Component({
  selector: 'app-announcement-edit-modal',
  templateUrl: './announcement-edit-modal.component.html',
  styleUrls: ['./announcement-edit-modal.component.less']
})
export class AnnouncementEditModalComponent implements OnInit {

  @Input()
  id: string;

  content: string = '';

  announcementEditForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private _modal: NzModalRef
  ) { }

  ngOnInit() {
    this.announcementEditForm = this.fb.group({
      releaseTime: ['', Validators.required],
      endTime: ['', Validators.required]
    })
  }

  submit() {
    let shouldBeClosed = false;
    this.announcementEditForm.markAllAsTouched();
    this.announcementEditForm.controls.releaseTime.updateValueAndValidity();
    this.announcementEditForm.controls.endTime.updateValueAndValidity();

    return shouldBeClosed;
  }

  destroy() {
    this._modal.destroy()
  }

}
