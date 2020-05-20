import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupthreadComponent } from './groupthread.component';

describe('GroupthreadComponent', () => {
  let component: GroupthreadComponent;
  let fixture: ComponentFixture<GroupthreadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupthreadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupthreadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
