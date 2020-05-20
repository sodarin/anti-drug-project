import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassinfIntroducesComponent } from './classinf-introduces.component';

describe('ClassinfIntroducesComponent', () => {
  let component: ClassinfIntroducesComponent;
  let fixture: ComponentFixture<ClassinfIntroducesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassinfIntroducesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassinfIntroducesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
