import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidateLanguageAddComponent } from './candidate-language-add.component';

describe('CandidateLanguageAddComponent', () => {
  let component: CandidateLanguageAddComponent;
  let fixture: ComponentFixture<CandidateLanguageAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CandidateLanguageAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidateLanguageAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
