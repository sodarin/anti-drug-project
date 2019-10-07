import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicRecordComponent } from './topic-record.component';

describe('TopicRecordComponent', () => {
  let component: TopicRecordComponent;
  let fixture: ComponentFixture<TopicRecordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopicRecordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopicRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
