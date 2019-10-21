import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanSettingComponent } from './plan-setting.component';

describe('PlanSettingComponent', () => {
  let component: PlanSettingComponent;
  let fixture: ComponentFixture<PlanSettingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanSettingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
