import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActividadesDashboardComponent } from './actividades-dashboard.component';

describe('ActividadesDashboardComponent', () => {
  let component: ActividadesDashboardComponent;
  let fixture: ComponentFixture<ActividadesDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ActividadesDashboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActividadesDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
