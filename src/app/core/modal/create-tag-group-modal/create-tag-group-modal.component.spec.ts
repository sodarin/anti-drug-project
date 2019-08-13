import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTagGroupModalComponent } from './create-tag-group-modal.component';

describe('CreateTagGroupModalComponent', () => {
  let component: CreateTagGroupModalComponent;
  let fixture: ComponentFixture<CreateTagGroupModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateTagGroupModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateTagGroupModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
