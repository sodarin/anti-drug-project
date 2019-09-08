import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramaEditModalComponent } from './programa-edit-modal.component';

describe('ProgramaEditModalComponent', () => {
  let component: ProgramaEditModalComponent;
  let fixture: ComponentFixture<ProgramaEditModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgramaEditModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramaEditModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
