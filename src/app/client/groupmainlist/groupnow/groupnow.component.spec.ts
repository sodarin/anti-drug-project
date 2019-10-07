import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupnowComponent } from './groupnow.component';

describe('GroupnowComponent', () => {
  let component: GroupnowComponent;
  let fixture: ComponentFixture<GroupnowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupnowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupnowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
