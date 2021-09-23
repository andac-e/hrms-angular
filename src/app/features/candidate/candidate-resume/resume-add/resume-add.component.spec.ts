import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeAddComponent } from './resume-add.component';

describe('ResumeAddComponent', () => {
  let component: ResumeAddComponent;
  let fixture: ComponentFixture<ResumeAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResumeAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumeAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
