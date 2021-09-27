import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnverifiedUpdateListComponent } from './unverified-update-list.component';

describe('UnverifiedUpdateListComponent', () => {
  let component: UnverifiedUpdateListComponent;
  let fixture: ComponentFixture<UnverifiedUpdateListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnverifiedUpdateListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnverifiedUpdateListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
