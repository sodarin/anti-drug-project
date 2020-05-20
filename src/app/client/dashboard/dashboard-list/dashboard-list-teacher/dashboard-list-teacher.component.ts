import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd';
import { TeacherManagementService } from 'src/app/service/teacher-management/teacher-management.service';
import { FollowManagementService } from 'src/app/service/follow-management/follow-management.service';

@Component({
  selector: 'app-dashboard-list-teacher',
  templateUrl: './dashboard-list-teacher.component.html',
  styleUrls: ['./dashboard-list-teacher.component.less']
})
export class DashboardListTeacherComponent implements OnInit {
  displayData: any[] = [];
  loading: boolean;

  constructor(private router: Router,
    private teacherManagementService: TeacherManagementService,
    private followmanagementService: FollowManagementService,
    private message: NzMessageService, ) { }

  ngOnInit() {
    this.displayData = [];
    this.loading = true;
    this.teacherManagementService.getTeacherList(3, 4).subscribe(result => {
      this.loading = false;
      this.displayData = result.data.teachers;
      this.displayData.forEach(item => {
        item.isshow = true;
      })
    }, error1 => {
      this.loading = false;
      this.message.create('error', `${error1.error}`);
    })
  }

  show1(i) {
    i.isshow = false;
  }

  show2(i) {
    i.isshow = true;
  }

  navigateByUrl(url: string) {
    this.router.navigateByUrl(url);
  }

  follow(id: string) {
    this.followmanagementService.followUser('1', id).subscribe(res => {
      this.message.create('success', "关注成功！");
    }, error1 => {
      this.message.create('error', "关注失败！");
    });

  }
  isFollowed(id: string) {
    return this.followmanagementService.isFollowed('1', id).subscribe(res => res.data);
  }

  defollow(id: string) {
    this.followmanagementService.defollow('1', id).subscribe(res => {
      this.message.create('success', "已取消关注！");
    }
      , error1 => {
        this.message.create('error', error1.error);
      });
  }

}
