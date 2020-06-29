import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyNoteDetailComponent } from './my-note-detail.component';

describe('MyNoteDetailComponent', () => {
  let component: MyNoteDetailComponent;
  let fixture: ComponentFixture<MyNoteDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyNoteDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyNoteDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
