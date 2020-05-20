import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontAvatarComponent } from './front-avatar.component';

describe('FrontAvatarComponent', () => {
  let component: FrontAvatarComponent;
  let fixture: ComponentFixture<FrontAvatarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrontAvatarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrontAvatarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
