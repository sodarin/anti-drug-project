import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrouphotComponent } from './grouphot.component';

describe('GrouphotComponent', () => {
  let component: GrouphotComponent;
  let fixture: ComponentFixture<GrouphotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrouphotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrouphotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
