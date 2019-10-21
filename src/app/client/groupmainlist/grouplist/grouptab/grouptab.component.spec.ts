import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrouptabComponent } from './grouptab.component';

describe('GrouptabComponent', () => {
  let component: GrouptabComponent;
  let fixture: ComponentFixture<GrouptabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrouptabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrouptabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
