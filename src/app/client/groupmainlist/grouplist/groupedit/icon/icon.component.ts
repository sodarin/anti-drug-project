import { Component, OnInit } from '@angular/core';
import {UploadFile} from "ng-zorro-antd";
import {NzMessageService, NzModalService} from "ng-zorro-antd";
import {ImagesUploadingService} from "../../../../../service/images-uploading/images-uploading.service";
@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.less']
})
export class IconComponent implements OnInit {
  showUploadList = {
    showPreviewIcon: true,
    showRemoveIcon: true,
    hidePreviewIconInNonImage: true
  };
  imageicon:string;

  fileList = [
    {
      uid: -1,
      name: 'xxx.png',
      status: 'done',
      url: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'
    }
  ];

  previewImage: string | undefined = '';
  previewVisible = false;

  constructor(private imagesUploadingService$:ImagesUploadingService,
              private  _message: NzMessageService,) { }

  ngOnInit() {
  }

  handlePreview = (file: UploadFile) => {
    this.previewImage = file.url || file.thumbUrl;
    this.previewVisible = true;
  };
  getIconimage(){
    // @ts-ignore
    this.imageicon=false
    // @ts-ignore
    this.imagesUploadingService$.getIcon().subscribe(result =>{
      // @ts-ignore
      this.imageicon=result;
    }, error1 => {
      this._message.error(error1.error)
    })
  }

}
