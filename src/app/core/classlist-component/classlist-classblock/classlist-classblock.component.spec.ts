import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClasslistClassblockComponent } from './classlist-classblock.component';

describe('ClasslistClassblockComponent', () => {
  let component: ClasslistClassblockComponent;
  let fixture: ComponentFixture<ClasslistClassblockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClasslistClassblockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClasslistClassblockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
