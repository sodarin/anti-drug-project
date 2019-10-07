import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicTabComponent } from './topic-tab.component';

describe('TopicTabComponent', () => {
  let component: TopicTabComponent;
  let fixture: ComponentFixture<TopicTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopicTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopicTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
