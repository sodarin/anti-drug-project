import {Component, OnInit,NgModule} from '@angular/core';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import {Router} from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { UserManagementService } from "src/app/service/user-management/user-management.service";
import { CourseManagementService  } from "src/app/service/course-management/course-management.service";
import { ClassManagementService } from "src/app/service/class-management/class-management.service";
import { GroupManagementService } from "src/app/service/group-management/group-management.service";
import { FollowManagementService } from "src/app/service/follow-management/follow-management.service";
import {NzMessageService} from 'ng-zorro-antd';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.less']
})
export class UserPageComponent implements OnInit {
  userID:string=this.actrouter.snapshot.paramMap.get('id');
  type:string="teacher";
  data: any;
  followed: boolean;
  teachCourses =[];
  courses =[];
  teachClasses =[];
  classes =[];
  stars =[];
  groups=[];
  // isFollowed:boolean;
  pageIndex: number=1;
  pageSize:number=8;
  tmp:number;

  constructor(
    private route: Router,
    private actrouter:ActivatedRoute,
    private message: NzMessageService,
    private usermanagementService:UserManagementService,
    private coursemanagementService:CourseManagementService,
    private classmanagementService:ClassManagementService,
    private followmanagementService:FollowManagementService,
    private groupmanagementService:GroupManagementService
    ) {

  }

  ngOnInit() {
    
    // this.getType(this.actrouter.params['value']['title']);
    this.usermanagementService.getPersonalDetailById(this.userID)
    .subscribe(res => this.data = res.data);
    this.searchData1();
    this.coursemanagementService.getMyCourse(this.pageIndex,this.courses.length,this.userID,"learning")
    .subscribe(res => this.courses = res.data);
    this.classmanagementService.getTeachClasses(this.pageIndex,this.teachClasses.length,this.userID)
    .subscribe(res => this. teachClasses = res.data);
    this.classmanagementService.getMyClasses(this.pageIndex,this.classes.length,this.userID)
    .subscribe(res => this.classes = res.data);
    this.coursemanagementService.getMyStars(this.pageIndex,this.stars.length,this.userID)
    .subscribe(res => this.stars = res.data);
    this.groupmanagementService.getGroupList(this.userID)
    .subscribe(res => this.groups = res.data);
    this.followmanagementService.isFollowed('1',this.userID)
    .subscribe(res => this.isFollowed = res.data);


  }

  navigate(url: string) {
    this.route.navigateByUrl(url);
  }

  // getType(type:string){
  //   if(type==''){
  //     this.type='user';
  //   }else{
  //     this.type='teacher';
  //   }
  // }
  follow(id:string){
    this.followmanagementService.followUser('1',id).subscribe(res=>{
        this.message.create('success',"关注成功！");
    }
    ,error1=>{
        this.message.create('error',"关注失败！");          
    });
    
}

defollow(id:string){
  this.followmanagementService.defollow('1',id).subscribe(res=>{
    this.message.create('success',"已取消关注！");
}
,error1=>{
    this.message.create('error',error1.error);          
});
}

isFollowed(id:string){
    this.followmanagementService.isFollowed('1',id).subscribe(res=>{
      this.followed = res.data
    });
}

searchData1() {
  this.teachCourses=[];
  this.tmp=0;
  this.coursemanagementService.getTeachCourse(this.pageIndex,this.pageSize,this.userID,"ordinary")
    .subscribe(res => {
      this.tmp = res.data[0].totalNum;
      this.teachCourses = res.data;
    });
}

changePageIndex1(pageindex ) {
  this.pageIndex = pageindex;
  this.searchData1();
}

}
