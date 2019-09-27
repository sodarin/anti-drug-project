import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestPaperComponent } from './test-paper.component';

describe('TestPaperComponent', () => {
  let component: TestPaperComponent;
  let fixture: ComponentFixture<TestPaperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestPaperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestPaperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
