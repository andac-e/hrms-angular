import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnverifiedJobListComponent } from './unverified-job-list.component';

describe('UnverifiedJobListComponent', () => {
  let component: UnverifiedJobListComponent;
  let fixture: ComponentFixture<UnverifiedJobListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnverifiedJobListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnverifiedJobListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
