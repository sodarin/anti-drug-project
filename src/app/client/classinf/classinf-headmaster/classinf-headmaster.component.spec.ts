import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassinfHeadmasterComponent } from './classinf-headmaster.component';

describe('ClassinfHeadmasterComponent', () => {
  let component: ClassinfHeadmasterComponent;
  let fixture: ComponentFixture<ClassinfHeadmasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassinfHeadmasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassinfHeadmasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
