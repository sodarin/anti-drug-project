import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourselistListviewModalComponent } from './courselist-listview-modal.component';

describe('CourselistListviewModalComponent', () => {
  let component: CourselistListviewModalComponent;
  let fixture: ComponentFixture<CourselistListviewModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourselistListviewModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourselistListviewModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
