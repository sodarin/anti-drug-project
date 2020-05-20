import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyOwnGroupComponent } from './my-own-group.component';

describe('MyOwnGroupComponent', () => {
  let component: MyOwnGroupComponent;
  let fixture: ComponentFixture<MyOwnGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyOwnGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyOwnGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
