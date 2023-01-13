import { TecnologiaI } from './tecnologias.interface';

export interface ExperienciasI {
  id: number;
  descripcion: String;
  lugar: String;
  foto:string;
  fechaIni: Date;
  fechaFin: Date;
  tecnologias: TecnologiaI[];
}
