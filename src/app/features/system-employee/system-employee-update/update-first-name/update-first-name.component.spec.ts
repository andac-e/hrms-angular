import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateFirstNameComponent } from './update-first-name.component';

describe('UpdateFirstNameComponent', () => {
  let component: UpdateFirstNameComponent;
  let fixture: ComponentFixture<UpdateFirstNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateFirstNameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateFirstNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
