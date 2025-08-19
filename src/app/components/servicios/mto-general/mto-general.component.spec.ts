import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MtoGeneralComponent } from './mto-general.component';

describe('MtoGeneralComponent', () => {
  let component: MtoGeneralComponent;
  let fixture: ComponentFixture<MtoGeneralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MtoGeneralComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MtoGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
