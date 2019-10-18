import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FocusDetailComponent } from './focus-detail.component';

describe('FocusDetailComponent', () => {
  let component: FocusDetailComponent;
  let fixture: ComponentFixture<FocusDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FocusDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FocusDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
