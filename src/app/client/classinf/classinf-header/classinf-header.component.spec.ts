import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassinfHeaderComponent } from './classinf-header.component';

describe('ClassinfHeaderComponent', () => {
  let component: ClassinfHeaderComponent;
  let fixture: ComponentFixture<ClassinfHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassinfHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassinfHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
