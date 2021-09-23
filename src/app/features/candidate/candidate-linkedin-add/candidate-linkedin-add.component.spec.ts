import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidateLinkedinAddComponent } from './candidate-linkedin-add.component';

describe('CandidateLinkedinAddComponent', () => {
  let component: CandidateLinkedinAddComponent;
  let fixture: ComponentFixture<CandidateLinkedinAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CandidateLinkedinAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidateLinkedinAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
