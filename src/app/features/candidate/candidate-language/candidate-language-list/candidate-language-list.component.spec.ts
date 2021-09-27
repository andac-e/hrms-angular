import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidateLanguageListComponent } from './candidate-language-list.component';

describe('CandidateLanguageListComponent', () => {
  let component: CandidateLanguageListComponent;
  let fixture: ComponentFixture<CandidateLanguageListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CandidateLanguageListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidateLanguageListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
