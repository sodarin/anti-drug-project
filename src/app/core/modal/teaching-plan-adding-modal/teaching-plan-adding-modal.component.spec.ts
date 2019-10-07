import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeachingPlanAddingModalComponent } from './teaching-plan-adding-modal.component';

describe('TeachingPlanAddingModalComponent', () => {
  let component: TeachingPlanAddingModalComponent;
  let fixture: ComponentFixture<TeachingPlanAddingModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeachingPlanAddingModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeachingPlanAddingModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
