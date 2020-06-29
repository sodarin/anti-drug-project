import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HaveMarkedComponent } from './have-marked.component';

describe('HaveMarkedComponent', () => {
  let component: HaveMarkedComponent;
  let fixture: ComponentFixture<HaveMarkedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HaveMarkedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HaveMarkedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
