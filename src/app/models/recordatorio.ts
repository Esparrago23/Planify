export class Recordatorio {
    constructor(
      public titulo: string,
      public fechaHora: Date,
      public repeticion: string,
      public estado: string,
      public notaAdicional: string
    ) {}
  }