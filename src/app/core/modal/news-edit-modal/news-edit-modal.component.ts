import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NewsManagementService} from '../../../service/news-management/news-management.service';
import {NzModalRef} from 'ng-zorro-antd';

@Component({
  selector: 'app-news-edit-modal',
  templateUrl: './news-edit-modal.component.html',
  styleUrls: ['./news-edit-modal.component.less']
})
export class NewsEditModalComponent implements OnInit {

  @Input()
  id: string;

  newsEditForm: FormGroup;

  listOfProgramma = [];
  listOfTag = [];
  content: string;

  constructor(
    private fb: FormBuilder,
    private newsManagementService$: NewsManagementService,
    private _modal: NzModalRef
  ) { }

  ngOnInit() {
    if (this.id) {
      this.newsManagementService$.getNewsDetail(this.id).subscribe(result => {
        this.newsEditForm = this.fb.group({
          title: [result.title, Validators.required],
          programa: [result.programa, Validators.required],
          tag: [result.tag],
          isTop: [result.isTop],
          isRecommended: [result.isRecommended],
          isHead: [result.isHead]
        })
      })
    } else {
      this.newsEditForm = this.fb.group({
        title: ['', Validators.required],
        programa: ['', Validators.required],
        tag: [[]],
        isTop: [false],
        isRecommended: [false],
        isHead: [false]
      })
    }
    // this.listOfOptions = this.newsManagementService$.getNewsList()
  }

  submit() {
    let shouldBeClosed = false;
    this.newsEditForm.markAllAsTouched();
    this.newsEditForm.controls.title.updateValueAndValidity();
    this.newsEditForm.controls.programa.updateValueAndValidity();
    return shouldBeClosed;
  }

  destroy() {
    this._modal.destroy()
  }

}
