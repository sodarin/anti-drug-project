import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {NewsCaseModalComponent} from './news-case-modal.component';



describe('NewsCaseModalComponent', () => {
  let component: NewsCaseModalComponent;
  let fixture: ComponentFixture<NewsCaseModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsCaseModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsCaseModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
