import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EdittabComponent } from './edittab.component';

describe('EdittabComponent', () => {
  let component: EdittabComponent;
  let fixture: ComponentFixture<EdittabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EdittabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EdittabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
