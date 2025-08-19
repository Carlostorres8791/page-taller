import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CambioAceiteComponent } from './cambio-aceite.component';

describe('CambioAceiteComponent', () => {
  let component: CambioAceiteComponent;
  let fixture: ComponentFixture<CambioAceiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CambioAceiteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CambioAceiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
