import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidateSchoolListComponent } from './candidate-school-list.component';

describe('CandidateSchoolListComponent', () => {
  let component: CandidateSchoolListComponent;
  let fixture: ComponentFixture<CandidateSchoolListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CandidateSchoolListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidateSchoolListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
