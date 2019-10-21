import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsNewsModalComponent } from './news-news-modal.component';

describe('NewsNewsModalComponent', () => {
  let component: NewsNewsModalComponent;
  let fixture: ComponentFixture<NewsNewsModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsNewsModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsNewsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
