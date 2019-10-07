import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCourseTabComponent } from './my-course-tab.component';

describe('MyCourseTabComponent', () => {
  let component: MyCourseTabComponent;
  let fixture: ComponentFixture<MyCourseTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyCourseTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyCourseTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
