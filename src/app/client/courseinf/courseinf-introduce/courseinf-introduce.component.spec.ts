import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseinfIntroduceComponent } from './courseinf-introduce.component';

describe('CourseinfIntroduceComponent', () => {
  let component: CourseinfIntroduceComponent;
  let fixture: ComponentFixture<CourseinfIntroduceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseinfIntroduceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseinfIntroduceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
