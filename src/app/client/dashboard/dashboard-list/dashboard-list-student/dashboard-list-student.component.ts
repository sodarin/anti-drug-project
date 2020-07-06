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
  studentList = [
    {
      id: "1",
      name: "赵伟",
      rating: 5,
      course: "初中第1课 毒品-人类的公敌",
      level: "单元测试",
      time: "10天前",
      status: "开始学习",
      comment: "感觉非常震惊！",
    },
    {
      name: "小明",
      rating: 4,
      course: "初中第1课 毒品-人类的公敌",
      level: "单元测试",
      time: "10天前",
      status: "开始学习",
      comment: "感觉非常震惊！",
    },
    {
      name: "小丽",
      rating: 3,
      course: "初中第1课 毒品-人类的公敌",
      level: "单元测试",
      time: "10天前",
      status: "开始学习",
      comment: "非常震惊！",
    },
    {
      name: "小刚",
      rating: 2,
      course: "初中第1课 毒品-人类的公敌",
      level: "单元测试",
      time: "10天前",
      status: "开始学习",
      comment: "震惊！",
    },
  ];
  comment = [];

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
  }

  renderResulsts(res: any): void {
    this.studentList = null;
    if (res) {
      this.studentList = res.data.data;
      this.studentList.splice(8, 8);
    }
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
        console.log(this.comment);
      });
  }

  getUserActivity(id: string) {
    this.classinfservice.getclassstdDynamic(id).subscribe(
      (res: any) => {
        console.log(res);
        // this.renderResulsts(res);
      },
      (error) => {
        this._notification.create("error", "发生错误！", `${error.error}`);
      }
    );
  }

  navigateByUrl(id: string) {
    this.router.navigateByUrl("/client/userpage/" + id);
  }
}
