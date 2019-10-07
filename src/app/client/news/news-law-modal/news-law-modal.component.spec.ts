import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsLawModalComponent } from './news-law-modal.component';

describe('NewsLawModalComponent', () => {
  let component: NewsLawModalComponent;
  let fixture: ComponentFixture<NewsLawModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsLawModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsLawModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
