import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassinfComponent } from './classinf.component';

describe('ClassinfComponent', () => {
  let component: ClassinfComponent;
  let fixture: ComponentFixture<ClassinfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassinfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassinfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
