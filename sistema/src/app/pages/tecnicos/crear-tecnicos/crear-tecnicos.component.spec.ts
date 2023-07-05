import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearTecnicosComponent } from './crear-tecnicos.component';

describe('CrearTecnicosComponent', () => {
  let component: CrearTecnicosComponent;
  let fixture: ComponentFixture<CrearTecnicosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrearTecnicosComponent]
    });
    fixture = TestBed.createComponent(CrearTecnicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
