import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NewsManagementService} from '../../../service/news-management/news-management.service';
import {NzModalRef} from 'ng-zorro-antd';
import {TagManagementService} from '../../../service/tag-management/tag-management.service';

@Component({
  selector: 'app-news-edit-modal',
  templateUrl: './news-edit-modal.component.html',
  styleUrls: ['./news-edit-modal.component.less']
})
export class NewsEditModalComponent implements OnInit {

  @Input()
  item: any;

  newsEditForm: FormGroup;

  listOfProgramma = [];
  listOfTag = [];
  content: string;

  constructor(
    private fb: FormBuilder,
    private newsManagementService$: NewsManagementService,
    private tagManagementService$: TagManagementService,
    private _modal: NzModalRef
  ) {
    this.newsEditForm = this.fb.group({
      title: ['', Validators.required],
      programa: ['', Validators.required],
      tag: [[]],
      isTop: [0],
      isRecommended: [0],
      isHead: [0]
    });
  }

  ngOnInit() {
    this.newsManagementService$.getCategoryList().subscribe(result => {
      this.listOfProgramma = result;
    });
    this.tagManagementService$.getTagList().subscribe(result => {
      this.listOfTag = result
    });
    if (this.item) {
      this.newsManagementService$.getNewsDetail(this.item.id).subscribe(result => {
        let tagIdList = [];
        result.tagList.forEach(item => {
          tagIdList.push(item.id)
        });
        this.newsEditForm = this.fb.group({
          title: [result.title, Validators.required],
          programa: [result.categoryid, Validators.required],
          tag: [tagIdList],
          isTop: [result.featured == '1'],
          isRecommended: [result.promoted == '1'],
          isHead: [result.sticky == '1']
        });
        this.content = result.body;
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
    let result = {};
    this.newsEditForm.controls.title.markAsDirty();
    this.newsEditForm.controls.programa.markAsDirty();
    this.newsEditForm.controls.title.updateValueAndValidity();
    this.newsEditForm.controls.programa.updateValueAndValidity();
    if (!this.newsEditForm.controls.title.errors && !this.newsEditForm.controls.programa.errors) {
      result = {
        title: this.newsEditForm.controls.title.value,
        programa: this.newsEditForm.controls.programa.value,
        tag: this.newsEditForm.controls.tag.value,
        isSticky: this.newsEditForm.controls.isTop.value? 1: 0,
        isPromoted: this.newsEditForm.controls.isRecommended.value? 1: 0,
        isFeatured: this.newsEditForm.controls.isHead.value? 1: 0,
        body: this.content
      };
      this._modal.destroy(result)
    }
    return shouldBeClosed;
  }

  destroy() {
    this._modal.destroy()
  }

}
