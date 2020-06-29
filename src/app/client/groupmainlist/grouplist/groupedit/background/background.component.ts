import { Component, OnInit } from '@angular/core';
import {UploadFile, UploadXHRArgs} from 'ng-zorro-antd';
import {ImagesUploadingService} from "../../../../../service/images-uploading/images-uploading.service";
import {NzMessageService, NzNotificationService} from "ng-zorro-antd";
import {HttpClient, HttpEvent, HttpEventType, HttpRequest, HttpResponse} from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-background',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.less']
})
export class BackgroundComponent implements OnInit {
  showUploadList = {
    showPreviewIcon: true,
    showRemoveIcon: true,
    hidePreviewIconInNonImage: true
  };
  images:string;
  groupId: string;
  userId: string = '1';

  fileList = [
    {
      uid: -1,
      status: 'done',
      url: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'
    }
  ];

  previewImage: string | undefined = '';
  previewVisible = false;

  constructor(
              private imagesUploadingService$:ImagesUploadingService,
              private  _message: NzMessageService,
              private _notification: NzNotificationService,
              private _http: HttpClient,
              private routerInfo: ActivatedRoute

  ) {
    this.groupId = this.routerInfo.snapshot.params['id'];
  }

  ngOnInit() {

  }

  handlePreview = (file: UploadFile) => {
    this.previewImage = file.url || file.thumbUrl;
    this.previewVisible = true;
  };
  // setGroupBackground(){
  //   // @ts-ignore
  //   this.images=false
  //   // @ts-ignore
  //   this.imagesUploadingService$.getBackground().subscribe(result =>{
  //     // @ts-ignore
  //     this.images=result;
  //   }, error1 => {
  //     this._notification.create(
  //       'error',
  //       '发生错误！',
  //       `${error1.error}`)
  //   });
  // }
  customReq = (item: UploadXHRArgs) => {
    const formData = new FormData();
    formData.append('multipartFile', item.file as any);
    formData.append('fileGroupId', this.groupId);
    formData.append('userId', this.userId);
    const req = new HttpRequest('POST', item.action, formData, {
      reportProgress: true,
      withCredentials: true
    });
    return this._http.request(req).subscribe(
      (event: HttpEvent<any>) => {

        if (event.type === HttpEventType.UploadProgress) {
          if (event.total! > 0) {
            // tslint:disable-next-line:no-any
            (event as any).percent = (event.loaded / event.total!) * 100;
          }
          item.onProgress!(event, item.file!);
        } else if (event instanceof HttpResponse) {
          item.onSuccess!(event.body, item.file!, event);
        }
      },
      err => {
        item.onError!(err, item.file!);
      }
    )
  }

}
