import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MidSection1Component } from './mid-section1.component';

describe('MidSection1Component', () => {
  let component: MidSection1Component;
  let fixture: ComponentFixture<MidSection1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MidSection1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MidSection1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
