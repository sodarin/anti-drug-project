import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoverSettingComponent } from './cover-setting.component';

describe('CoverSettingComponent', () => {
  let component: CoverSettingComponent;
  let fixture: ComponentFixture<CoverSettingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoverSettingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoverSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
