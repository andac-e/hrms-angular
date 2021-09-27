import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateWebsiteComponent } from './update-website.component';

describe('UpdateWebsiteComponent', () => {
  let component: UpdateWebsiteComponent;
  let fixture: ComponentFixture<UpdateWebsiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateWebsiteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateWebsiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
