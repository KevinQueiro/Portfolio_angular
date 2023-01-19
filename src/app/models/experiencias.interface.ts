import { TecnologiaI } from './tecnologias.interface';

export interface ExperienciasI {
  id?: number;
  descripcion: String;
  lugar: String;
  foto:String;
  fechaIni: String;
  fechaFin: String;
  tecnologias?: TecnologiaI[]
}
  