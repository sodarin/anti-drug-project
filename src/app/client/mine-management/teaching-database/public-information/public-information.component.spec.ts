import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicInformationComponent } from './public-information.component';

describe('PublicInformationComponent', () => {
  let component: PublicInformationComponent;
  let fixture: ComponentFixture<PublicInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
