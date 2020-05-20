import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClasslistClassblockModalComponent } from './classlist-classblock-modal.component';

describe('ClasslistClassblockModalComponent', () => {
  let component: ClasslistClassblockModalComponent;
  let fixture: ComponentFixture<ClasslistClassblockModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClasslistClassblockModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClasslistClassblockModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
