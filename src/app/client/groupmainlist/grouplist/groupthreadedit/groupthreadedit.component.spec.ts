import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupthreadeditComponent } from './groupthreadedit.component';

describe('GroupthreadeditComponent', () => {
  let component: GroupthreadeditComponent;
  let fixture: ComponentFixture<GroupthreadeditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupthreadeditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupthreadeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
