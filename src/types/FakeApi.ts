import {EducationItem2} from "./Education"
import {Contatos} from "./ContactList"
import {Experience} from "./Experience"
 
export interface FakeApiInterface {
  nome: string,
  ocupacao: string,
  resumo: string,
  perfilProfissional: string,
  contatos: Contatos[],
  educacao: EducationItem2[],
  experiencia: Experience []
}