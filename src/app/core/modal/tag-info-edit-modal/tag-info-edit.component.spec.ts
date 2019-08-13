import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TagInfoEditComponent } from './tag-info-edit.component';

describe('TagInfoEditComponent', () => {
  let component: TagInfoEditComponent;
  let fixture: ComponentFixture<TagInfoEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TagInfoEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TagInfoEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
