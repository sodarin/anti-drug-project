import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClasslistSortModalComponent } from './classlist-sort-modal.component';

describe('ClasslistSortModalComponent', () => {
  let component: ClasslistSortModalComponent;
  let fixture: ComponentFixture<ClasslistSortModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClasslistSortModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClasslistSortModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
