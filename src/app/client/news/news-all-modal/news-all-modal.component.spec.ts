import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsAllModalComponent } from './news-all-modal.component';

describe('NewsAllModalComponent', () => {
  let component: NewsAllModalComponent;
  let fixture: ComponentFixture<NewsAllModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsAllModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsAllModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
