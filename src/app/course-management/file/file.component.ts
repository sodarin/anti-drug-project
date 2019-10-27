import { Component, OnInit } from '@angular/core';
import { NzEmptyService, NzMessageService } from 'ng-zorro-antd';
import { UploadFile } from 'ng-zorro-antd/upload';
import { filter } from 'rxjs/operators';
import { HttpResponse, HttpRequest, HttpClient } from '@angular/common/http';
import { CourseManagementUtilService } from 'src/app/service/course-management-util/course-management-util.service';

@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.less']
})
export class FileComponent implements OnInit {

  fileList: UploadFile[] = [];

  isAllDisplayDataChecked = false;
  isOperating = false;
  isIndeterminate = false;
  listOfDisplayData: any[] = [];
  listOfAllData: any[] = [];

  mapOfCheckedId: { [key: string]: boolean } = {};
  numberOfChecked = 0;

  isVisible: boolean = false;

  uploading: boolean = false;

  courseId: any;

  constructor(
    private _courseManagementUtilService: CourseManagementUtilService,
    private nzEmptyService: NzEmptyService,
    private msg: NzMessageService,
    private http: HttpClient
  ) { }



  ngOnInit() {
    this.nzEmptyService.resetDefault();
    this.courseId = this._courseManagementUtilService.setCourseIdFrom(location);
  }

  currentPageDataChange($event: any[]): void {
    this.listOfDisplayData = $event;
    this.refreshStatus();
  }

  refreshStatus(): void {
    this.isAllDisplayDataChecked = this.listOfDisplayData
      .filter(item => !item.disabled)
      .every(item => this.mapOfCheckedId[item.id]);
    this.isIndeterminate =
      this.listOfDisplayData.filter(item => !item.disabled).some(item => this.mapOfCheckedId[item.id]) &&
      !this.isAllDisplayDataChecked;
    this.numberOfChecked = this.listOfAllData.filter(item => this.mapOfCheckedId[item.id]).length;
  }

  checkAll(value: boolean): void {
    this.listOfDisplayData.filter(item => !item.disabled).forEach(item => (this.mapOfCheckedId[item.id] = value));
    this.refreshStatus();
  }

  beforeUpload = (file: UploadFile): boolean => {
    this.fileList = this.fileList.concat(file);
    return false;
  };

  handleUpload(): void {
    let error: boolean = false;
    this.uploading = true;
    this.fileList.forEach((file: any) => {
      const formData = new FormData();
      formData.append('file', file)
      this.http
        .post(`/material/uploadNormal?courseId=${this.courseId}&userId=1`, formData)
        .pipe(filter(e => e instanceof HttpResponse))
        .subscribe(
          (res) => { },
          () => { error = true; }
        );
    })
    if (error) {
      this.msg.error('上传失败!');
    } else {
      this.msg.success('上传成功!');
      this.fileList = [];
    }
    this.uploading = false;
  }

}
