import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaperMarkingTabComponent } from './paper-marking-tab.component';

describe('PaperMarkingTabComponent', () => {
  let component: PaperMarkingTabComponent;
  let fixture: ComponentFixture<PaperMarkingTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaperMarkingTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaperMarkingTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
