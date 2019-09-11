import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourselistSortModalComponent } from './courselist-sort-modal.component';

describe('CourselistSortModalComponent', () => {
  let component: CourselistSortModalComponent;
  let fixture: ComponentFixture<CourselistSortModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourselistSortModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourselistSortModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
