import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourselistClassificationModalComponent } from './courselist-classification-modal.component';

describe('CourselistClassificationModalComponent', () => {
  let component: CourselistClassificationModalComponent;
  let fixture: ComponentFixture<CourselistClassificationModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourselistClassificationModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourselistClassificationModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
