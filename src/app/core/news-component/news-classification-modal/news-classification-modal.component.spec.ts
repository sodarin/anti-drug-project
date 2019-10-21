import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsClassificationModalComponent } from './news-classification-modal.component';

describe('NewsClassificationModalComponent', () => {
  let component: NewsClassificationModalComponent;
  let fixture: ComponentFixture<NewsClassificationModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsClassificationModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsClassificationModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
