import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeachPlanPageComponent } from './teach-plan-page.component';

describe('TeachPlanPageComponent', () => {
  let component: TeachPlanPageComponent;
  let fixture: ComponentFixture<TeachPlanPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeachPlanPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeachPlanPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
