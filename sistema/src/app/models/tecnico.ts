export class Tecnico {
    
    _id?: number;
    dni: string;
    nombre: string;
    apellido: string;
    fechaNacimiento: Date;
    telefonos: Telefono[];
    

    constructor(dni:string, nombre:string, apellido: string, fechaNacimiento: Date, telefonos: Telefono[]){
        this.dni = dni;
        this.nombre = nombre;
        this.apellido = apellido;
        this.fechaNacimiento = fechaNacimiento;
        this.telefonos = telefonos;
    }

  }
  
  export class Telefono {
    _id?: number;
    tipo: string;
    numero: string;

    constructor(tipo: string, numero: string){
        this.tipo = tipo;
        this. numero = numero;
    }
  }