import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserInfoEditModalComponent } from './user-info-edit-modal.component';

describe('UserInfoEditModalComponent', () => {
  let component: UserInfoEditModalComponent;
  let fixture: ComponentFixture<UserInfoEditModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserInfoEditModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserInfoEditModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
