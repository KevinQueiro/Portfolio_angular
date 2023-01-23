import { EducacionesI } from './educaciones.interface';
import { ExperienciasI } from './experiencias.interface';
import { ProyectosI } from './proyectos.interface';
import { SkillsI } from './skills.interface';

export interface UsuarioI {
  id?: number;
  nombre: String;
  apellido: String;
  titulo: String;
  about: String;
  foto: String;
  skills?: SkillsI[];
  educaciones?: EducacionesI[];
  exps?: ExperienciasI[];
  proyectos?: ProyectosI[];
}
