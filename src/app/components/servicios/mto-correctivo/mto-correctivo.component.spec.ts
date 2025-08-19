import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MtoCorrectivoComponent } from './mto-correctivo.component';

describe('MtoCorrectivoComponent', () => {
  let component: MtoCorrectivoComponent;
  let fixture: ComponentFixture<MtoCorrectivoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MtoCorrectivoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MtoCorrectivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
