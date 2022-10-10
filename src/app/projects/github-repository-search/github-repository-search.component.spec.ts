import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubRepositorySearchComponent } from './github-repository-search.component';

describe('GithubRepositorySearchComponent', () => {
  let component: GithubRepositorySearchComponent;
  let fixture: ComponentFixture<GithubRepositorySearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GithubRepositorySearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GithubRepositorySearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
