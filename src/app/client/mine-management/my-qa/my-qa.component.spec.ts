import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyQAComponent } from './my-qa.component';

describe('MyQAComponent', () => {
  let component: MyQAComponent;
  let fixture: ComponentFixture<MyQAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyQAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyQAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
