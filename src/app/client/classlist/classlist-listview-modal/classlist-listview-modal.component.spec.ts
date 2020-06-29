import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClasslistListviewModalComponent } from './classlist-listview-modal.component';

describe('ClasslistListviewModalComponent', () => {
  let component: ClasslistListviewModalComponent;
  let fixture: ComponentFixture<ClasslistListviewModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClasslistListviewModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClasslistListviewModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
