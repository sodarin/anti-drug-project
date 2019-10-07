import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsDetailsModalComponent } from './news-details-modal.component';

describe('NewsDetailsModalComponent', () => {
  let component: NewsDetailsModalComponent;
  let fixture: ComponentFixture<NewsDetailsModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsDetailsModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsDetailsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
