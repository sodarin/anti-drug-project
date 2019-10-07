import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaperScoreStatisticsComponent } from './paper-score-statistics.component';

describe('PaperScoreStatisticsComponent', () => {
  let component: PaperScoreStatisticsComponent;
  let fixture: ComponentFixture<PaperScoreStatisticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaperScoreStatisticsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaperScoreStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
