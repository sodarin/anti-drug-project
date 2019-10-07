import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeachingClassComponent } from './teaching-class.component';

describe('TeachingClassComponent', () => {
  let component: TeachingClassComponent;
  let fixture: ComponentFixture<TeachingClassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeachingClassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeachingClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
