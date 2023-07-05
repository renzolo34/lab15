import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { Tecnico } from 'src/app/models/tecnico';
import { TecnicoService } from 'src/app/services/tecnicos.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-crear-tecnico',
  templateUrl: './crear-tecnicos.component.html',
  styleUrls: ['./crear-tecnicos.component.css']
})
export class CrearTecnicosComponent {

  tecnicoForm: FormGroup;

  constructor(private fb: FormBuilder,
              private router: Router,
              private tecnicoService: TecnicoService) {
    this.tecnicoForm = this.fb.group({
      dni: ['', Validators.required],
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      fechaNacimiento: ['', Validators.required],
      telefonos: this.fb.array([this.createTelefonoFormGroup()])
    })
  }

  createTelefonoFormGroup(): FormGroup {
    return this.fb.group({
      tipo: ['', Validators.required],
      numero: ['', Validators.required]
    });
  }

  getTelefonosControls(): FormArray {
    return this.tecnicoForm.get('telefonos') as FormArray;
  }

  agregarTecnico() {

    const TECNICO: Tecnico = {
      dni: this.tecnicoForm.get('dni')?.value,
      nombre: this.tecnicoForm.get('nombre')?.value,
      apellido: this.tecnicoForm.get('apellido')?.value,
      fechaNacimiento: this.tecnicoForm.get('fechaNacimiento')?.value,
      telefonos: this.tecnicoForm.get('telefonos')?.value
    }

    console.log(TECNICO)
    Swal.fire({
      title: 'Creación de Técnico',
      text: '¿Desea crear el técnico?',
      icon: 'info',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Aceptar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.tecnicoService.crearTecnico(TECNICO).subscribe(data => {
          console.log(data);
          this.router.navigate(['/listar-tecnicos']);
        });
      }
    });
  }

}