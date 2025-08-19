import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrenosComponent } from './frenos.component';

describe('FrenosComponent', () => {
  let component: FrenosComponent;
  let fixture: ComponentFixture<FrenosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FrenosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FrenosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
