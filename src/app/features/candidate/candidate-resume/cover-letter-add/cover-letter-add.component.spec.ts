import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoverLetterAddComponent } from './cover-letter-add.component';

describe('CoverLetterAddComponent', () => {
  let component: CoverLetterAddComponent;
  let fixture: ComponentFixture<CoverLetterAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoverLetterAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoverLetterAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
