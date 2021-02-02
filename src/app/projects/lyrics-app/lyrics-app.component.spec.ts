import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LyricsAppComponent } from './lyrics-app.component';

describe('LyricsAppComponent', () => {
  let component: LyricsAppComponent;
  let fixture: ComponentFixture<LyricsAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LyricsAppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LyricsAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
