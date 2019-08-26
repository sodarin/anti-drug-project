import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminOpenClassRecommendationTableComponent } from './admin-open-class-recommendation-table.component';

describe('AdminOpenClassRecommendationTableComponent', () => {
  let component: AdminOpenClassRecommendationTableComponent;
  let fixture: ComponentFixture<AdminOpenClassRecommendationTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminOpenClassRecommendationTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminOpenClassRecommendationTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
