import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupmainlistComponent } from './groupmainlist.component';

describe('GroupmainlistComponent', () => {
  let component: GroupmainlistComponent;
  let fixture: ComponentFixture<GroupmainlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupmainlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupmainlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
