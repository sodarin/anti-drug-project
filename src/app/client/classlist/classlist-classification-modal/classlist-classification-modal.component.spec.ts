import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClasslistClassificationModalComponent } from './classlist-classification-modal.component';

describe('ClasslistClassificationModalComponent', () => {
  let component: ClasslistClassificationModalComponent;
  let fixture: ComponentFixture<ClasslistClassificationModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClasslistClassificationModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClasslistClassificationModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
