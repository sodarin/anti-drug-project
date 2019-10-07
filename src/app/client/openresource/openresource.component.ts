import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-openresource',
  templateUrl: './openresource.component.html',
  styleUrls: ['./openresource.component.less']
})
export class OpenresourceComponent implements OnInit {


  constructor(private router: Router) {
  }

  ngOnInit() {
  }
  data2=[
    {
      title:"禁毒微电影",
      description:"《觉醒》",
      value1:"112",
      value2:"93",
      cover:'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png'
    },
    {
      title:"禁毒微电影",
      description:"《觉醒》",
      value1:"113",
      value2:"93",
      cover:'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png'
    },
    {
      title:"禁毒微电影",
      description:"《觉醒》",
      value1:"112",
      value2:"93",
      cover:'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png'
    },
    {
      title:"禁毒微电影",
      description:"《觉醒》",
      value1:"112",
      value2:"93",
      cover:'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png'
    },
    {
      title:"禁毒微电影",
      description:"《觉醒》",
      value1:"112",
      value2:"93",
      cover:'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png'
    }

  ]
  navigateByUrl(url) {
    this.router.navigateByUrl(url);
  }
}
