import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassinfCommentComponent } from './classinf-comment.component';

describe('ClassinfCommentComponent', () => {
  let component: ClassinfCommentComponent;
  let fixture: ComponentFixture<ClassinfCommentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassinfCommentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassinfCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
