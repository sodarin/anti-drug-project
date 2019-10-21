import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupfirstComponent } from './groupfirst.component';

describe('GroupfirstComponent', () => {
  let component: GroupfirstComponent;
  let fixture: ComponentFixture<GroupfirstComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupfirstComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupfirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
