import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicPostComponent } from './topic-post.component';

describe('TopicPostComponent', () => {
  let component: TopicPostComponent;
  let fixture: ComponentFixture<TopicPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopicPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopicPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
