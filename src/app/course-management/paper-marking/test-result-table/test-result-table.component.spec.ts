import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestResultTableComponent } from './test-result-table.component';

describe('TestResultTableComponent', () => {
  let component: TestResultTableComponent;
  let fixture: ComponentFixture<TestResultTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestResultTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestResultTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
