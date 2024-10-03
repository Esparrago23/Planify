import { Actividad } from './actividad';

export class Categoria {
  constructor(
    public id_categoria:number,
    public nombre: string,
    public descripcion: string,
    public color: string,
    public actividades: Actividad[] = []
  ) {}
}