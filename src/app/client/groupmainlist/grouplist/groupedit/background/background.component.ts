import { Component, OnInit } from '@angular/core';
import {UploadFile} from "ng-zorro-antd";
import {ImagesUploadingService} from "../../../../../service/images-uploading/images-uploading.service";
import {NzMessageService, NzModalService} from "ng-zorro-antd";
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
  ) { }

  ngOnInit() {
  }

  handlePreview = (file: UploadFile) => {
    this.previewImage = file.url || file.thumbUrl;
    this.previewVisible = true;
  };
  getBackgroundimage(){
    // @ts-ignore
    this.images=false
    // @ts-ignore
    this.imagesUploadingService$.getBackground().subscribe(result =>{
      // @ts-ignore
      this.images=result;
    }, error1 => {
      this._message.error(error1.error)
    })
  }

}
