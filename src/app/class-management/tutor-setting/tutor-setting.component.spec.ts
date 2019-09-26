import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorSettingComponent } from './tutor-setting.component';

describe('TutorSettingComponent', () => {
  let component: TutorSettingComponent;
  let fixture: ComponentFixture<TutorSettingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TutorSettingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TutorSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
