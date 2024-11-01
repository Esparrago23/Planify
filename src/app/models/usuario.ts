export class Usuario {
    constructor(
      public id_usuario:number,
      public nombre: string,
      public correo: string,
      public contraseña: string,
      public fecha_creacion:Date
    ) {}
  }