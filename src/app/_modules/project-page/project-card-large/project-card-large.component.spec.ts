import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectCardLargeComponent } from './project-card-large.component';

describe('ProjectCardLargeComponent', () => {
  let component: ProjectCardLargeComponent;
  let fixture: ComponentFixture<ProjectCardLargeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectCardLargeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectCardLargeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
