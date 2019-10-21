import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-td-classification',
  templateUrl: './td-classification.component.html',
  styleUrls: ['./td-classification.component.less']
})
export class TdClassificationComponent implements OnInit {

  constructor() { }
  classificationtypes = ["全部视频","flash","音频","图片","文档","PPT","其它"];
  classificationtags = ["毒品危害","互联网+","毒品预防教育","教育云","题库","课程","班级","默认标签"];
  dateRange = [];
  transcodingStates=["转码成功","转码中","转码失败"];
  useStates = ["未使用","已使用"];

  currenttranscodingState:string;
  currentuseStates:string;
  ngOnInit() {
  }

}
