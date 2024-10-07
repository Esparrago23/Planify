export class Actividad {
    constructor(
      public id: number,
      public titulo: string,
      public prioridad: string,
      public estado: string,
      public fechaInicio: Date,
      public fechaFin: Date,
      public categoriaId: number
    ) {}
  }