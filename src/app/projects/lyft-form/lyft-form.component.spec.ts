import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LyftFormComponent } from './lyft-form.component';

describe('LyftFormComponent', () => {
  let component: LyftFormComponent;
  let fixture: ComponentFixture<LyftFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LyftFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LyftFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
