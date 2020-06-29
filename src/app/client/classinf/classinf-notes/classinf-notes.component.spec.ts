import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassinfNotesComponent } from './classinf-notes.component';

describe('ClassinfNotesComponent', () => {
  let component: ClassinfNotesComponent;
  let fixture: ComponentFixture<ClassinfNotesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassinfNotesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassinfNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
