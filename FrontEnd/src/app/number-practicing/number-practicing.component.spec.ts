import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberPracticingComponent } from './number-practicing.component';

describe('NumberPracticingComponent', () => {
  let component: NumberPracticingComponent;
  let fixture: ComponentFixture<NumberPracticingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NumberPracticingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NumberPracticingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
