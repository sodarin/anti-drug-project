import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeworkMarkingTabComponent } from './homework-marking-tab.component';

describe('HomeworkMarkingTabComponent', () => {
  let component: HomeworkMarkingTabComponent;
  let fixture: ComponentFixture<HomeworkMarkingTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeworkMarkingTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeworkMarkingTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
