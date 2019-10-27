import { Component, OnInit } from '@angular/core';
import { CourseManagementUtilService } from 'src/app/service/course-management-util/course-management-util.service';
import { NzMessageService, UploadXHRArgs } from 'ng-zorro-antd';
import { HttpResponse, HttpRequest, HttpClient, HttpEventType } from '@angular/common/http';

@Component({
  selector: 'app-cover-photo',
  templateUrl: './cover-photo.component.html',
  styleUrls: ['./cover-photo.component.less']
})
export class CoverPhotoComponent implements OnInit {

  coverUrl: string;
  courseId: any;

  constructor(private _courseManagementUtilService: CourseManagementUtilService,
    private msg: NzMessageService,
    private http: HttpClient) { }

  ngOnInit() {
    this.courseId = this._courseManagementUtilService.setCourseIdFrom(location);
  }

  customReq = (item: UploadXHRArgs) => {
    const formData = new FormData();
    formData.append('file', item.file as any);
    return this.http.post(item.action, formData).subscribe(
      // tslint:disable-next-line no-any
      (event: any) => {
        console.log(event);
        console.log(HttpEventType);
        if (event.message === 'SUCCESS') {
          item.onSuccess!(event.body, item.file!, event);
        } else if (event instanceof HttpResponse) {
        }
      },
      err => {
        item.onError!(err, item.file!);
      }
    );
  };

}
