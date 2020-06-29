import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupsearchComponent } from './groupsearch.component';

describe('GroupsearchComponent', () => {
  let component: GroupsearchComponent;
  let fixture: ComponentFixture<GroupsearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupsearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupsearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
