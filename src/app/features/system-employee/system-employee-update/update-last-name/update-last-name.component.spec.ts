import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateLastNameComponent } from './update-last-name.component';

describe('UpdateLastNameComponent', () => {
  let component: UpdateLastNameComponent;
  let fixture: ComponentFixture<UpdateLastNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateLastNameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateLastNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
