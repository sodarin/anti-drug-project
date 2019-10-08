import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestPaperCreateComponent } from './test-paper-create.component';

describe('TestPaperCreateComponent', () => {
  let component: TestPaperCreateComponent;
  let fixture: ComponentFixture<TestPaperCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestPaperCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestPaperCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
