import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MtoPreventivoComponent } from './mto-preventivo.component';

describe('MtoPreventivoComponent', () => {
  let component: MtoPreventivoComponent;
  let fixture: ComponentFixture<MtoPreventivoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MtoPreventivoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MtoPreventivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
