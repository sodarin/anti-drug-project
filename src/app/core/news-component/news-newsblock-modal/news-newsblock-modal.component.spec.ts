import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsNewsblockModalComponent } from './news-newsblock-modal.component';

describe('NewsNewsblockModalComponent', () => {
  let component: NewsNewsblockModalComponent;
  let fixture: ComponentFixture<NewsNewsblockModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsNewsblockModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsNewsblockModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
