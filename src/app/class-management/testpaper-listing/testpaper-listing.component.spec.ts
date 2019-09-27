import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestpaperListingComponent } from './testpaper-listing.component';

describe('TestpaperListingComponent', () => {
  let component: TestpaperListingComponent;
  let fixture: ComponentFixture<TestpaperListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestpaperListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestpaperListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
