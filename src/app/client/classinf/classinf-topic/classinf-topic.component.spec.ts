import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassinfTopicComponent } from './classinf-topic.component';

describe('ClassinfTopicComponent', () => {
  let component: ClassinfTopicComponent;
  let fixture: ComponentFixture<ClassinfTopicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassinfTopicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassinfTopicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
