import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndefiniteChoiceComponent } from './indefinite-choice.component';

describe('IndefiniteChoiceComponent', () => {
  let component: IndefiniteChoiceComponent;
  let fixture: ComponentFixture<IndefiniteChoiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndefiniteChoiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndefiniteChoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
