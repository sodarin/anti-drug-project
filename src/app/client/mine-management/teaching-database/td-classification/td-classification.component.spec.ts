import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TdClassificationComponent } from './td-classification.component';

describe('TdClassificationComponent', () => {
  let component: TdClassificationComponent;
  let fixture: ComponentFixture<TdClassificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TdClassificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TdClassificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
