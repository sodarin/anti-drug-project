import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontNotificationComponent } from './front-notification.component';

describe('FrontNotificationComponent', () => {
  let component: FrontNotificationComponent;
  let fixture: ComponentFixture<FrontNotificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrontNotificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrontNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
