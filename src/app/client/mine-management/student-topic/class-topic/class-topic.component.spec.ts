import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassTopicComponent } from './class-topic.component';

describe('ClassTopicComponent', () => {
  let component: ClassTopicComponent;
  let fixture: ComponentFixture<ClassTopicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassTopicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassTopicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
