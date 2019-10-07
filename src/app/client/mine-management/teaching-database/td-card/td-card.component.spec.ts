import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TdCardComponent } from './td-card.component';

describe('TdCardComponent', () => {
  let component: TdCardComponent;
  let fixture: ComponentFixture<TdCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TdCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TdCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
