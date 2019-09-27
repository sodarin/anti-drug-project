import { Component, OnInit } from '@angular/core';
import {NzMessageService} from 'ng-zorro-antd';

@Component({
  selector: 'app-cover-setting',
  templateUrl: './cover-setting.component.html',
  styleUrls: ['./cover-setting.component.less']
})
export class CoverSettingComponent implements OnInit {

  constructor(
    private msg: NzMessageService
  ) { }

  ngOnInit() {
  }

  handleChange({ file, fileList }: { [key: string]: any }): void {
    const status = file.status;
    if (status !== 'uploading') {
      console.log(file, fileList);
    }
    if (status === 'done') {
      this.msg.success(`${file.name} file uploaded successfully.`);
    } else if (status === 'error') {
      this.msg.error(`${file.name} file upload failed.`);
    }
  }

}
