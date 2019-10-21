import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FromSharingComponent } from './from-sharing.component';

describe('FromSharingComponent', () => {
  let component: FromSharingComponent;
  let fixture: ComponentFixture<FromSharingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FromSharingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FromSharingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
