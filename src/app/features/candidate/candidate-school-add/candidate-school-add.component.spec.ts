import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidateSchoolAddComponent } from './candidate-school-add.component';

describe('CandidateSchoolAddComponent', () => {
  let component: CandidateSchoolAddComponent;
  let fixture: ComponentFixture<CandidateSchoolAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CandidateSchoolAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidateSchoolAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
