import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBasedComponent } from './search-based.component';

describe('SearchBasedComponent', () => {
  let component: SearchBasedComponent;
  let fixture: ComponentFixture<SearchBasedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchBasedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchBasedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
