import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyHomeworkTabComponent } from './my-homework-tab.component';

describe('MyHomeworkTabComponent', () => {
  let component: MyHomeworkTabComponent;
  let fixture: ComponentFixture<MyHomeworkTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyHomeworkTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyHomeworkTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
