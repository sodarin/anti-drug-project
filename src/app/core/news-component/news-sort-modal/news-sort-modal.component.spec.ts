import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsSortModalComponent } from './news-sort-modal.component';

describe('NewsSortModalComponent', () => {
  let component: NewsSortModalComponent;
  let fixture: ComponentFixture<NewsSortModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsSortModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsSortModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
