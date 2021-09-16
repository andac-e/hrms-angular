import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HrmsNaviComponent } from './hrms-navi.component';

describe('HrmsNaviComponent', () => {
  let component: HrmsNaviComponent;
  let fixture: ComponentFixture<HrmsNaviComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HrmsNaviComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HrmsNaviComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
