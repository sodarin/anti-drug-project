import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupmainsearchComponent } from './groupmainsearch.component';

describe('GroupmainsearchComponent', () => {
  let component: GroupmainsearchComponent;
  let fixture: ComponentFixture<GroupmainsearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupmainsearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupmainsearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
