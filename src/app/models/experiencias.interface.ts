import { TecnologiaI } from './tecnologias.interface';

export interface ExperienciasI {
  id: number;
  descripcion: String;
  lugar: String;
  fechaIni: Date;
  fechaFin: Date;
  tecnologias: TecnologiaI;
}
