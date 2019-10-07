import { NgModule } from '@angular/core';
import { ClientComponent } from './client.component';
import { ShareModule } from '../share/share.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import {CourselistComponent} from './courselist/courselist.component';
import {CoreModule} from '../core/core.module';
import { TeacherComponent } from './teacher/teacher.component';
import { ClasslistComponent } from './classlist/classlist.component';
import { PersonalSettingsComponent } from './personal-settings/personal-settings.component';
import { InformationComponent } from './personal-settings/information/information.component';
import { RouterModule } from '@angular/router';
import { VerificationComponent } from './personal-settings/verification/verification.component';
import { SecuritySettingComponent } from './personal-settings/security-setting/security-setting.component'
import { QuillModule } from 'ngx-quill'
import {OpenresourceComponent} from './openresource/openresource.component';
import {OpenresourcedetailComponent} from './openresourcedetail/openresourcedetail.component';
import {GroupmainlistComponent} from './groupmainlist/groupmainlist.component';
import {GroupnowComponent} from './groupmainlist/groupnow/groupnow.component';
import {GrouplistComponent} from './groupmainlist/grouplist/grouplist.component';
import {GrouphotComponent} from './groupmainlist/grouphot/grouphot.component';
import {GroupcreateComponent} from './groupmainlist/groupcreate/groupcreate.component';
import {GroupInfoComponent} from './groupmainlist/grouplist/group-info/group-info.component';
import {GroupeditComponent} from './groupmainlist/grouplist/groupedit/groupedit.component';
import {GroupfirstComponent} from './groupmainlist/grouplist/groupfirst/groupfirst.component';
import {GroupmemberComponent} from './groupmainlist/grouplist/groupmember/groupmember.component';
import {GrouptabComponent} from './groupmainlist/grouplist/grouptab/grouptab.component';
import {GrouptopicComponent} from './groupmainlist/grouplist/grouptopic/grouptopic.component';
import {BackgroundComponent} from './groupmainlist/grouplist/groupedit/background/background.component';
import {EditComponent} from './groupmainlist/grouplist/groupedit/edit/edit.component';
import {EdittabComponent} from './groupmainlist/grouplist/groupedit/edittab/edittab.component';
import {IconComponent} from './groupmainlist/grouplist/groupedit/icon/icon.component';
import {NewsAllModalComponent} from './news/news-all-modal/news-all-modal.component';
import {NewsLawModalComponent} from './news/news-law-modal/news-law-modal.component';
import {NewsNewsModalComponent} from './news/news-news-modal/news-news-modal.component';
import {NewsCaseModalComponent} from './news/news-case-modal/news-case-modal.component';
import { MineManagementComponent } from './mine-management/mine-management.component';
import { TeachingCourseComponent } from './mine-management/teaching-course/teaching-course.component';
import { TeachingCourseTabComponent } from './mine-management/teaching-course/teaching-course-tab/teaching-course-tab.component';
import { NormalCourseComponent } from './mine-management/teaching-course/normal-course/normal-course.component';
import { LiveCourseComponent } from './mine-management/teaching-course/live-course/live-course.component';
import { ClassCourseComponent } from './mine-management/teaching-course/class-course/class-course.component';
import { RecordCourseComponent } from './mine-management/teaching-course/record-course/record-course.component';
import { OpenCourseComponent } from './mine-management/teaching-course/open-course/open-course.component';
import { TeachingClassComponent } from './mine-management/teaching-class/teaching-class.component';
import { StudentQAComponent } from './mine-management/student-qa/student-qa.component';
import { StudentTopicComponent } from './mine-management/student-topic/student-topic.component';
import { TopicTabComponent } from './mine-management/student-topic/topic-tab/topic-tab.component';
import { CourseTopicComponent } from './mine-management/student-topic/course-topic/course-topic.component';
import { ClassTopicComponent } from './mine-management/student-topic/class-topic/class-topic.component';
import { MinePaperMarkingComponent } from './mine-management/paper-marking/paper-marking.component';
import { PaperMarkingTabComponent } from './mine-management/paper-marking/paper-marking-tab/paper-marking-tab.component';
import { HaveMarkedComponent } from './mine-management/paper-marking/have-marked/have-marked.component';
import { NotMarkedComponent } from './mine-management/paper-marking/not-marked/not-marked.component';
import { HomeworkMarkingComponent } from './mine-management/homework-marking/homework-marking.component';
import { HomeworkMarkingTabComponent } from './mine-management/homework-marking/homework-marking-tab/homework-marking-tab.component';
import { TeachingDatabaseComponent } from './mine-management/teaching-database/teaching-database.component';
import { TeachingDatabaseTabComponent } from './mine-management/teaching-database/teaching-database-tab/teaching-database-tab.component';
import { MyInformationComponent } from './mine-management/teaching-database/my-information/my-information.component';
import { PublicInformationComponent } from './mine-management/teaching-database/public-information/public-information.component';
import { FavoritesComponent } from './mine-management/teaching-database/favorites/favorites.component';
import { FromSharingComponent } from './mine-management/teaching-database/from-sharing/from-sharing.component';
import { MyCourseComponent } from './mine-management/my-course/my-course.component';
import { MyCourseTabComponent } from './mine-management/my-course/my-course-tab/my-course-tab.component';
import { LearningCourseComponent } from './mine-management/my-course/learning-course/learning-course.component';
import { LearnedCourseComponent } from './mine-management/my-course/learned-course/learned-course.component';
import { FavoriteCourseComponent } from './mine-management/my-course/favorite-course/favorite-course.component';
import { MyQAComponent } from './mine-management/my-qa/my-qa.component';
import { MyTopicComponent } from './mine-management/my-topic/my-topic.component';
import { MyTopicTabComponent } from './mine-management/my-topic/my-topic-tab/my-topic-tab.component';
import { MyNoteComponent } from './mine-management/my-note/my-note.component';
import { MyHomeworkComponent } from './mine-management/my-homework/my-homework.component';
import { MyHomeworkTabComponent } from './mine-management/my-homework/my-homework-tab/my-homework-tab.component';
import { MarkingComponent } from './mine-management/my-homework/marking/marking.component';
import { MyClassComponent } from './mine-management/my-class/my-class.component';
import { MyLiveComponent } from './mine-management/my-live/my-live.component';
import { CreateCourseComponent } from './mine-management/teaching-course/create-course/create-course.component';
import { MyLiveCourseComponent} from "./mine-management/my-course/my-live-course/my-live-course.component";

import { TdClassificationComponent } from './mine-management/teaching-database/td-classification/td-classification.component';
import { TdCardComponent } from './mine-management/teaching-database/td-card/td-card.component';
import {MyExamComponent} from "./mine-management/my-exam/my-exam.component";
import {MyGroupComponent} from "./mine-management/my-group/my-group.component";

import { ExamRecordComponent } from './mine-management/my-exam/exam-record/exam-record.component';
import { QuestionRecordComponent } from './mine-management/my-exam/question-record/question-record.component';
import { TopicRecordComponent } from './mine-management/my-group/topic-record/topic-record.component';
import { TopicComponent } from './mine-management/my-group/topic/topic.component';
import { GroupJoinComponent } from './mine-management/my-group/group-join/group-join.component';
import { MyGroupJoinComponent } from './mine-management/my-group/my-group-join/my-group-join.component';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';

@NgModule({
  declarations: [
    TeacherComponent,
    ClientComponent,
    DashboardComponent,
    CourselistComponent,
    PersonalSettingsComponent,
    ClasslistComponent,
    InformationComponent,
    VerificationComponent,
    SecuritySettingComponent,
    OpenresourceComponent,
    OpenresourcedetailComponent,
    GroupmainlistComponent,
    GroupnowComponent,
    GrouplistComponent,
    GrouphotComponent,
    GroupcreateComponent,
    GroupInfoComponent,
    GroupeditComponent,
    GroupfirstComponent,
    GroupmemberComponent,
    GrouptabComponent,
    GrouptopicComponent,
    BackgroundComponent,
    EditComponent,
    EdittabComponent,
    IconComponent,
    NewsAllModalComponent,
    NewsLawModalComponent,
    NewsNewsModalComponent, NewsCaseModalComponent,
    MineManagementComponent, TeachingCourseComponent, TeachingCourseTabComponent,
    NormalCourseComponent, LiveCourseComponent, ClassCourseComponent, RecordCourseComponent, OpenCourseComponent, TeachingClassComponent, StudentQAComponent,
    StudentTopicComponent, TopicTabComponent, CourseTopicComponent, ClassTopicComponent, MinePaperMarkingComponent, PaperMarkingTabComponent, HaveMarkedComponent,
    NotMarkedComponent,  HomeworkMarkingComponent, HomeworkMarkingTabComponent, TeachingDatabaseComponent, TeachingDatabaseTabComponent, MyInformationComponent,
    PublicInformationComponent, FavoritesComponent, FromSharingComponent, MyCourseComponent, MyCourseTabComponent, LearningCourseComponent, LearnedCourseComponent,
    FavoriteCourseComponent, MyQAComponent, MyTopicComponent, MyTopicTabComponent, MyNoteComponent, MyHomeworkComponent, MyExamComponent, MyGroupComponent,
    MyHomeworkTabComponent, MarkingComponent, MyClassComponent, MyLiveComponent, CreateCourseComponent, MyLiveCourseComponent, ExamRecordComponent, QuestionRecordComponent,
    TopicRecordComponent, TopicComponent, GroupJoinComponent, MyGroupJoinComponent,TdClassificationComponent, TdCardComponent
  ],
  imports: [
    ShareModule,
    CoreModule,
    RouterModule,
    QuillModule,
    NzDropDownModule
  ]
})
export class ClientModule { }
