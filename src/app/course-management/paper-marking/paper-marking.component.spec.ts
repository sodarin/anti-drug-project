import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaperMarkingComponent } from './paper-marking.component';

describe('PaperMarkingComponent', () => {
  let component: PaperMarkingComponent;
  let fixture: ComponentFixture<PaperMarkingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaperMarkingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaperMarkingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
