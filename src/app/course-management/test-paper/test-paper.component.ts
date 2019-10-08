import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { Router } from '@angular/router'
import { NzEmptyService } from 'ng-zorro-antd';

@Component({
  selector: 'app-test-paper',
  templateUrl: './test-paper.component.html',
  styleUrls: ['./test-paper.component.less']
})
export class TestPaperComponent implements OnInit {

  @ViewChild('customTpl', { static: true }) customTpl: TemplateRef<any>;
  
  constructor(private router: Router, private nzEmptyService: NzEmptyService) { this.nzEmptyService.setDefaultContent(this.customTpl);}

  ngOnInit() {
    this.nzEmptyService.setDefaultContent(this.customTpl);
  }

  check(){
    this.nzEmptyService.setDefaultContent(this.customTpl);
  }

  navigateByUrl(url: string) {
    this.router.navigateByUrl(url);
  }

}
