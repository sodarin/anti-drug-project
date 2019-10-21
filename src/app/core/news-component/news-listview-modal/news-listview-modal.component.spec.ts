import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsListviewModalComponent } from './news-listview-modal.component';

describe('NewsListviewMadalComponent', () => {
  let component: NewsListviewModalComponent;
  let fixture: ComponentFixture<NewsListviewModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsListviewModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsListviewModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
