import { Component, OnInit } from "@angular/core";
import { CourseService } from "src/app/service/courselist-frontend/courselist-frontend.service";
import { Router, ActivatedRoute } from "@angular/router";
import { NzNotificationService } from "ng-zorro-antd";
import { ClassInfService } from "src/app/service/classinf-frontend/classinf-frontend.service";
import { AdminReviewService } from "src/app/service/admin-review/admin-review.service";

@Component({
  selector: "app-dashboard-list-student",
  templateUrl: "./dashboard-list-student.component.html",
  styleUrls: ["./dashboard-list-student.component.less"],
})
export class DashboardListStudentComponent implements OnInit {
  comment = [];
  dynamic = [];

  constructor(
    private courseservice: CourseService,
    private router: Router,
    private route: ActivatedRoute,
    private _notification: NzNotificationService,
    private adminReviewService: AdminReviewService,
    private classinfservice: ClassInfService
  ) {}

  ngOnInit() {
    this.initComment();
    this.initDynamic();
  }

  initComment() {
    this.adminReviewService
      .getClassReviews(1, 5, {
        rating: "",
        author: "",
        course: "",
        keyword: "",
      })
      .subscribe((data) => {
        this.comment = this.comment.concat(
          data.data.backGroundClassroomReviewList
        );
        for (var item of this.comment) {
          item.content = item.content.replace(/\<[^\>]*\>/g, "");
        }
      });
  }

  initDynamic() {
    this.classinfservice
      .getclassstdDynamic("6")  //测试用户id为6
      .subscribe((data: any) => {
        let resList = [];
        for (var item of data.data) {
          let time = new Date(item.updateTime * 1000);
          
          let Y = time.getFullYear() + "-";
          let M = (time.getMonth() < 10 ? "0" + (time.getMonth()) : time.getMonth()) + "-";
          let D = (time.getDate() < 10 ? "0" + (time.getDate()) : time.getDate()) + " ";
          let h = (time.getHours() < 10 ? "0" + (time.getHours()) : time.getHours()) + ":";
          let m = (time.getMinutes() < 10 ? "0" + (time.getMinutes()) : time.getMinutes()) + ":";
          let s = (time.getSeconds() < 10 ? "0" + (time.getSeconds()) : time.getSeconds());

          resList.push({
            id: 1, //要通过昵称找id\改后端
            name: item.nickname,
            course: item.courseSetTitle,
            time: Y + M + D + h + m + s
          })
        }
        this.dynamic = this.dynamic.concat(resList);
      });
  }

  navigateByUrl(id: string) {
    this.router.navigateByUrl("/client/userpage/" + id);
  }
}
