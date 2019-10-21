import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeachingDatabaseComponent } from './teaching-database.component';

describe('TeachingDatabaseComponent', () => {
  let component: TeachingDatabaseComponent;
  let fixture: ComponentFixture<TeachingDatabaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeachingDatabaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeachingDatabaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
