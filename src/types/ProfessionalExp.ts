export interface ProfessionalExp {
  response:{
    id: number,
    experiencia: ProfessionalExpItem[],
  }
}

export interface ProfessionalExpItem {
  id: number,
  cargo: string,
  periodo: string,
  empresa: string,
  local: string,
  conteudo: string
    
}