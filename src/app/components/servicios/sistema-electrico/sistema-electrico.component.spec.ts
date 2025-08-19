import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SistemaElectricoComponent } from './sistema-electrico.component';

describe('SistemaElectricoComponent', () => {
  let component: SistemaElectricoComponent;
  let fixture: ComponentFixture<SistemaElectricoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SistemaElectricoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SistemaElectricoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
