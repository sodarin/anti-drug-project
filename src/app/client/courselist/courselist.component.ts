import { Component, OnInit } from '@angular/core';
import {
  ActivatedRoute,
  Router,
} from '@angular/router';
import { CourseService } from 'src/app/service/courselist-frontend/courselist-frontend.service';
import { NzNotificationService } from 'ng-zorro-antd/notification';

@Component({
  selector: 'app-courselist',
  templateUrl: './courselist.component.html',
  styleUrls: ['./courselist.component.less'],
})
export class CourselistComponent implements OnInit {
  [x: string]: any;
  courseList = [];
  //Search params
  currentPage: number = 1;
  order: string = "latest";
  treetag: string[] = ["0", "0", "0", "0"];
  treetag_s: string = "0";
  commontag: string = "All";
  //Component params
  totalPage: number = 1;
  pageSize: number = 16;

  constructor(private courseservice: CourseService, private router: Router, private route: ActivatedRoute, private _notification: NzNotificationService) {
    // route.queryParams.subscribe(queryParams=>{
    //   this.currentPage = queryParams.page||1;
    //   this.order = queryParams.orderBy||"New"; 
    //   if(queryParams.treetag==undefined){
    //     this.treetag = ["全部", "全部", "全部", "全部"];
    //   }else{
    //     this.treetag = queryParams.treetag.split(",")
    //   }

    //   this.commontag = queryParams.commontag||"全部";
    // });

    //this.totalPage = courseservice.getCoursesNum();
  }

  ngOnInit() {
    //服务器请求---待替换
    this.courseservice.getCourses(this.currentPage, this.order, this.treetag_s).subscribe((res: any) => {
      this.renderResulsts(res);
    }, error => {
      this._notification.create(
        'error',
        '发生错误！',
        `${error.error}`)
    });
  }

  onPageChange(event?: any) {
    this.refreshPage()
    window.scrollTo(0, 0);
  }

  refreshPage(): void {
    // this.router.navigate([], { 
    //   relativeTo: this.route,      
    //   queryParams: {
    //     page: this.currentPage,
    //     orderBy: this.order,
    //     treetag:this.treetag_s,
    //     commontag:this.commontag
    //   } 
    // });
    this.courseservice.getCourses(this.currentPage, this.order, this.treetag_s).subscribe((res: any) => {
      this.renderResulsts(res);
    }, error => {
      this._notification.create(
        'error',
        '发生错误！',
        `${error.error}`)
    });
  }

  renderResulsts(res: any): void {
    this.courseList = null;
    if (res) {
      this.courseList = res.data.data;
      this.totalPage = res.data.total;
    }

    //附加项，要删除
    for (let i = 0; i < this.courseList.length; i++) {
      if(this.courseList[i].picture == undefined){
        this.courseList[i].picture = "../../../../assets/img/timg.jpg";
      }else if (this.courseList[i].picture == "") {
        this.courseList[i].picture = "../../../../assets/img/timg.jpg";
      } else if (this.courseList[i].picture.substr(0, 6) == "public") {
        this.courseList[i].picture = "../../../../assets/img/timg.jpg";
      } else if (this.courseList[i].picture.substr(7, 7) == "edusoho") {
        this.courseList[i].picture = "../../../../assets/img/timg.jpg";
      }else if(this.courseList[i].picture.substr(1,7)=='"large"'){
        this.courseList[i].picture = "../../../../assets/img/timg.jpg";
      }

    }
  }

  changeOrder(order: string): void {
    this.currentPage = 1;
    this.order = order;
    console.log(this.order);
    this.refreshPage();
  }

  settreeTag(vals: string[]): void {
    this.treetag = vals;
    this.treetag_s = "0";
    for (var i = 0; i < vals.length; i++) {
      if (vals[i] == "0" && i > 0) {
        this.treetag_s = vals[i - 1];
        break;
      } else {
        this.treetag_s = "0";
      }
    }
    this.refreshPage();
  }

  setcommonTag(val: string): void {
    this.commontag = val;
    this.refreshPage();
  }


  navigateByUrl(url: string) {
    this.router.navigateByUrl(url);
  }


}


