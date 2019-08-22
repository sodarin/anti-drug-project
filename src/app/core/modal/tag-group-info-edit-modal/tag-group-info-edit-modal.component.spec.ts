import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TagGroupInfoEditModalComponent } from './tag-group-info-edit-modal.component';

describe('TagGroupInfoEditModalComponent', () => {
  let component: TagGroupInfoEditModalComponent;
  let fixture: ComponentFixture<TagGroupInfoEditModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TagGroupInfoEditModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TagGroupInfoEditModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
