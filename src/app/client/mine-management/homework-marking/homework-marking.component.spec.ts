import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MineHomeworkMarkingComponent } from './homework-marking.component';

describe('MineHomeworkMarkingComponent', () => {
  let component: MineHomeworkMarkingComponent;
  let fixture: ComponentFixture<MineHomeworkMarkingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MineHomeworkMarkingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MineHomeworkMarkingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
