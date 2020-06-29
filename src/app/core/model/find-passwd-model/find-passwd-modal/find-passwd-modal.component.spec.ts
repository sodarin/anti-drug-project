import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindPasswdModalComponent } from './find-passwd-modal.component';

describe('FindPasswdModalComponent', () => {
  let component: FindPasswdModalComponent;
  let fixture: ComponentFixture<FindPasswdModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindPasswdModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindPasswdModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
