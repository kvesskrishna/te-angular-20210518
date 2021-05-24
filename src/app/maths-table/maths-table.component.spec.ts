import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MathsTableComponent } from './maths-table.component';

describe('MathsTableComponent', () => {
  let component: MathsTableComponent;
  let fixture: ComponentFixture<MathsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MathsTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MathsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
