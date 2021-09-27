import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCompanyNameComponent } from './update-company-name.component';

describe('UpdateCompanyNameComponent', () => {
  let component: UpdateCompanyNameComponent;
  let fixture: ComponentFixture<UpdateCompanyNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateCompanyNameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateCompanyNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
