import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PositionAddComponent } from './position-add.component';

describe('PositionAddComponent', () => {
  let component: PositionAddComponent;
  let fixture: ComponentFixture<PositionAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PositionAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PositionAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
