import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyGroupJoinComponent } from './my-group-join.component';

describe('MyGroupJoinComponent', () => {
  let component: MyGroupJoinComponent;
  let fixture: ComponentFixture<MyGroupJoinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyGroupJoinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyGroupJoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
