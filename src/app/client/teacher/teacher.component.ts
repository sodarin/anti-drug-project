import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Router } from "@angular/router";
import { ManagementDashboardComponent } from 'src/app/class-management/management-dashboard/management-dashboard.component';
import { TeacherManagementService } from "src/app/service/teacher-management/teacher-management.service";
import { FollowManagementService } from "src/app/service/follow-management/follow-management.service";
import {NzMessageService} from 'ng-zorro-antd';
@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.less']
})
export class TeacherComponent implements OnInit {
  displayData: any[] = [];
  loading: boolean;
  total: number;
  pageIndex: number=1;
  pageSize:number=8;


  constructor(
    private router: Router,
    private teacherManagementService: TeacherManagementService,
    private followmanagementService:FollowManagementService,
    private message: NzMessageService,
  ) {
  }


  ngOnInit() {
      this.searchData();
      
  }

  show1(i) {
    i.isshow = false;
  }

  show2(i) {
    i.isshow = true;
  }

  searchData() {
    this.displayData = [];
    this.loading = true;
    this.teacherManagementService.getTeacherList(this.pageIndex, this.pageSize).subscribe(result => {
      this.loading = false;
      this.total = result.data.total;
      this.displayData = result.data.teachers;
      this.displayData.forEach(item => {
        item.isshow = true;
      })
    }, error1 => {
      this.loading = false;
      this.message.create('error',`${error1.error}`);
    })
    
  }
  
  changePageIndex(pageindex ) {
    this.pageIndex = pageindex;
    this.searchData();
  }
  

  navigateByUrl(url: string) {
    this.router.navigateByUrl(url);
  }

  follow(id:string){
      this.followmanagementService.followUser('1',id).subscribe(res=>{
          this.message.create('success',"关注成功！");
      },error1=>{
          this.message.create('error',"关注失败！");          
      });
      
  }
  isFollowed(id:string){
      return this.followmanagementService.isFollowed('1',id).subscribe(res=>res.data);
  }

  defollow(id:string){
    this.followmanagementService.defollow('1',id).subscribe(res=>{
      this.message.create('success',"已取消关注！");
  }
  ,error1=>{
      this.message.create('error',error1.error);          
  });
  }

}
