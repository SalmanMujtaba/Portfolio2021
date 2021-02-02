import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpensifyComponent } from './expensify.component';

describe('ExpensifyComponent', () => {
  let component: ExpensifyComponent;
  let fixture: ComponentFixture<ExpensifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpensifyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpensifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
