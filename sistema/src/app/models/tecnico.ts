export class Tecnico {
  _id?: string;
  dni: string;
  nombre: string;
  apellido: string;
  fechaNacimiento: Date;
  telefonos: string[];

    

  constructor(dni: string, nombre: string, apellido: string, fechaNacimiento: Date, telefonos: string[]){
    this.dni=dni,
    this.nombre=nombre,
    this.apellido=apellido,
    this.fechaNacimiento=fechaNacimiento,
    this.telefonos=telefonos
  }

}
  
