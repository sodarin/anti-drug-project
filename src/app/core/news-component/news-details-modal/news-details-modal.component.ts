import { Component, OnInit } from '@angular/core';
import { formatDistance } from 'date-fns';
import {NzMessageService, NzModalService} from 'ng-zorro-antd';
import {NewsManagementService} from '../../../service/news-management/news-management.service';

@Component({
  selector: 'app-news-details-modal',
  templateUrl: './news-details-modal.component.html',
  styleUrls: ['./news-details-modal.component.less'],
})
export class NewsDetailsModalComponent implements OnInit {

  loading: boolean = false;
  constructor(
    private newsService$: NewsManagementService,
    private _message: NzMessageService,
    private _modalService: NzModalService
  ) {
  }

  ngOnInit() {
  }

  data: any[] = [];
  submitting = false;
  user = {
    author: 'Han Solo',
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'
  };
  inputValue = '';

  handleSubmit(): void {
    this.submitting = true;
    const content = this.inputValue;
    this.inputValue = '';
    setTimeout(() => {
      this.submitting = false;
      this.data = [
        ...this.data,
        {
          ...this.user,
          content,
          datetime: new Date(),
          displayTime: formatDistance(new Date(), new Date())
        }
      ].map(e => {
        return {
          ...e,
          displayTime: formatDistance(new Date(), e.datetime)
        };
      });
    }, 800);
  }
  searchData(id: string) {
    this.loading = true;
    this.newsService$.getNewsDetail(id).subscribe(result => {
      this.data = result;
    }, error1 => {
      this.loading = false;
      this._message.error(error1.error)
    })
  }


}
