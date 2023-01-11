import { TecnologiaI } from "./tecnologias.interface";

export interface ProyectosI {
  id: number;
  nombre:String;
  descripcion: String;
  link: String;
  foto: String;
  tecnologias: TecnologiaI[];
}
