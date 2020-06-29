import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {ClientClassManagementService} from '../../../service/client-class-management/client-class-management.service';
import {CourseManagementBackHalfService} from '../../../service/course-management-back-half/course-management-back-half.service';

@Component({
  selector: 'app-autocomplete-input',
  templateUrl: './autocomplete-input.component.html',
  styleUrls: ['./autocomplete-input.component.less']
})
export class AutocompleteInputComponent implements OnInit, OnChanges {

  @Input()
  searchType: string;

  @Input()
  searchScene: string = '';

  @Output()
  outputEvent = new EventEmitter<any>();

  @Input()
  courseId: string;

  classroomId: string;

  inputValue: string = '';
  options = [];

  constructor(
    private classroomService$: ClientClassManagementService,
    private courseManagement$: CourseManagementBackHalfService
  ) {
    if (this.searchScene !== 'course') {
      this.classroomId = location.pathname.split('/')[3]
    }
  }

  ngOnInit() {
    if (this.searchScene == 'course') {
      if (this.searchType == 'teacher' && this.courseId !== '') {
        this.getTeacherListInCourse(this.inputValue)
      }
    } else {
      if (this.searchType == 'teacher') {
        this.getTeacherList(this.inputValue);
      } else if (this.searchType == 'student') {
        this.getStudentList(this.inputValue)
      }
    }

  }

  ngOnChanges(): void {
    if (this.courseId !== '' && this.courseId) {
      this.getTeacherListInCourse(this.inputValue)
    }
  }

  getTeacherList(inputValue: string) {
    this.classroomService$.getTeacherList(0, 0, inputValue).subscribe(result => {
      this.options = result.data.teachers
    })
  }

  getStudentList(inputValue: string) {
    this.classroomService$.searchStudent(this.classroomId, inputValue).subscribe(result => {
      this.options = result.data.studentList
    })
  }

  getTeacherListInCourse(inputValue: string) {
    this.courseManagement$.searchTeacherWhenAdding(this.courseId, inputValue).subscribe(result => {
      this.options = result.data
    })
  }

  onInput(data: any) {
    if (this.searchScene == 'course') {
      if (this.searchType == 'teacher') {
        this.getTeacherListInCourse(this.inputValue)
      }
    } else {
      if (this.searchType == 'teacher') {
        this.getTeacherList(this.inputValue);
      } else if (this.searchType == 'student') {
        this.getStudentList(this.inputValue)
      }
    }
  }

  emitValue(data: any) {
    this.outputEvent.emit(data.nzValue)
  }

}
