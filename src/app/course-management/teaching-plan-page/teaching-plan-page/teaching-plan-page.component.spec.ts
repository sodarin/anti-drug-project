import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeachingPlanPageComponent } from './teaching-plan-page.component';

describe('TeachingPlanPageComponent', () => {
  let component: TeachingPlanPageComponent;
  let fixture: ComponentFixture<TeachingPlanPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeachingPlanPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeachingPlanPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
