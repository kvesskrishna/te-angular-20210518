import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConditionalFormComponent } from './conditional-form.component';

describe('ConditionalFormComponent', () => {
  let component: ConditionalFormComponent;
  let fixture: ComponentFixture<ConditionalFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConditionalFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConditionalFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
