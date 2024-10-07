import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriasDashboardToggleComponent } from './categorias-dashboard-toggle.component';

describe('CategoriasDashboardToggleComponent', () => {
  let component: CategoriasDashboardToggleComponent;
  let fixture: ComponentFixture<CategoriasDashboardToggleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CategoriasDashboardToggleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoriasDashboardToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
