import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TidingsComponent } from './tidings.component';

describe('TidingsComponent', () => {
  let component: TidingsComponent;
  let fixture: ComponentFixture<TidingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TidingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TidingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
