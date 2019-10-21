import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsTagModalComponent } from './news-tag-modal.component';

describe('NewsTagModalComponent', () => {
  let component: NewsTagModalComponent;
  let fixture: ComponentFixture<NewsTagModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsTagModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsTagModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
