import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyTopicTabComponent } from './my-topic-tab.component';

describe('MyTopicTabComponent', () => {
  let component: MyTopicTabComponent;
  let fixture: ComponentFixture<MyTopicTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyTopicTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyTopicTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
