import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrouptopicComponent } from './grouptopic.component';

describe('GrouptopicComponent', () => {
  let component: GrouptopicComponent;
  let fixture: ComponentFixture<GrouptopicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrouptopicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrouptopicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
