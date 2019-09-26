import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClasslistListviewComponent } from './classlist-listview.component';

describe('ClasslistListviewComponent', () => {
  let component: ClasslistListviewComponent;
  let fixture: ComponentFixture<ClasslistListviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClasslistListviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClasslistListviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
