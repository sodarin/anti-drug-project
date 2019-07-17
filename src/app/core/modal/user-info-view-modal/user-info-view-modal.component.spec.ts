import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserInfoViewModalComponent } from './user-info-view-modal.component';

describe('UserInfoViewModalComponent', () => {
  let component: UserInfoViewModalComponent;
  let fixture: ComponentFixture<UserInfoViewModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserInfoViewModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserInfoViewModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
