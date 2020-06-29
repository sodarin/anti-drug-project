import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MinePaperMarkingComponent } from './paper-marking.component';

describe('PaperMarkingComponent', () => {
  let component: MinePaperMarkingComponent;
  let fixture: ComponentFixture<MinePaperMarkingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MinePaperMarkingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MinePaperMarkingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
