import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteJobListComponent } from './favorite-job-list.component';

describe('FavoriteJobListComponent', () => {
  let component: FavoriteJobListComponent;
  let fixture: ComponentFixture<FavoriteJobListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavoriteJobListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoriteJobListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
