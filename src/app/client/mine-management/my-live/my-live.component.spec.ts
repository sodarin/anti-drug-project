import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyLiveComponent } from './my-live.component';

describe('MyLiveComponent', () => {
  let component: MyLiveComponent;
  let fixture: ComponentFixture<MyLiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyLiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyLiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
