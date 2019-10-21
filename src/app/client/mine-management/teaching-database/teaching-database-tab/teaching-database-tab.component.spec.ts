import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeachingDatabaseTabComponent } from './teaching-database-tab.component';

describe('TeachingDatabaseTabComponent', () => {
  let component: TeachingDatabaseTabComponent;
  let fixture: ComponentFixture<TeachingDatabaseTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeachingDatabaseTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeachingDatabaseTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
