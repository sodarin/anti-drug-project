import { Component, OnInit } from '@angular/core';
import { NzEmptyService, NzMessageService } from 'ng-zorro-antd';
import { UploadFile } from 'ng-zorro-antd/upload';
import { filter } from 'rxjs/operators';
import { HttpResponse, HttpRequest, HttpClient } from '@angular/common/http';
import { CourseManagementUtilService } from 'src/app/service/course-management-util/course-management-util.service';
import { CourseFileService } from 'src/app/service/course-file/course-file.service';

@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.less']
})
export class FileComponent implements OnInit {

  fileList: UploadFile[] = [];

  fileUploadedList: any = [];
  total: number = 0;
  loading: boolean = true;
  pageIndex: any = 1;

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
    private _courseFileService: CourseFileService,
    private nzEmptyService: NzEmptyService,
    private msg: NzMessageService,
    private http: HttpClient
  ) { }



  ngOnInit() {
    this.nzEmptyService.resetDefault();
    this.courseId = this._courseManagementUtilService.setCourseIdFrom(location);
    this.getCourseFileList();
  }

  getCourseFileList(pageIndex: number = this.pageIndex, pageSize: number = 10) {
    this.loading = true;
    this._courseFileService.getCourseFileList(this.courseId, pageIndex, pageSize).subscribe(res => {
      this.fileUploadedList = res.data.data;
      this.total = res.data.total;
      this.loading = false;
    })
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
