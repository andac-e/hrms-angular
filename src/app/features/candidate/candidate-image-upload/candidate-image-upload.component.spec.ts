import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidateImageUploadComponent } from './candidate-image-upload.component';

describe('CandidateImageUploadComponent', () => {
  let component: CandidateImageUploadComponent;
  let fixture: ComponentFixture<CandidateImageUploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CandidateImageUploadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidateImageUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
