import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarTecnicosComponent } from './listar-tecnicos.component';

describe('ListarTecnicosComponent', () => {
  let component: ListarTecnicosComponent;
  let fixture: ComponentFixture<ListarTecnicosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListarTecnicosComponent]
    });
    fixture = TestBed.createComponent(ListarTecnicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
