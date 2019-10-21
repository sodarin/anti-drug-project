import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotMarkedComponent } from './not-marked.component';

describe('NotMarkedComponent', () => {
  let component: NotMarkedComponent;
  let fixture: ComponentFixture<NotMarkedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotMarkedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotMarkedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
