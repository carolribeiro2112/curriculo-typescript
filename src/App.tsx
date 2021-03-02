import React, {useState} from "react";

import "./App.css"

import SideBar from "./components/SideBar"
import Profile from "./components/Profile"
import ProfessionalExperience from "./components/ProfessionalExperience"
// import { FakeApiInterface } from "./types/FakeApi";

function App() {

  const fakeAPI =  
    {
      nome: 'Ana Carolina Mauro Ribeiro',
      ocupacao: 'Front-end Developer| React JS',
      resumo: 'Solteira, 29 anos e mãe de um cachorro',
      perfilProfissional: 'Engenheira Química Formada em transição de carreira para Front-end Developer',
      contatos: [
        {
          id: 1,
          tipo: 'telefone',
          contato: '11 96371-0508'
        },
        {
          id: 2,
          tipo: 'email',
          contato: 'carolribeiro2112@gmail.com'
        }
      ],
      educacao: [
        {
          id: 1,
          instituicao: 'Campinas Tech Talents',
          curso: 'Bootcamp React JS'
        },
        {
          id: 2,
          instituicao: 'Centro Universitário da FEI',
          curso: 'Bacharelado em Engenharia Química'
        },
        {
          id: 3,
          instituicao: 'ETEC Getúlio Vargas',
          curso: 'Ensino Médio e Técnico em Química'
        }
      ],
      experiencia: [
        {
          id: 1,
          cargo: 'Freelance Developer',
          periodo: 'Agosto 2020 - Atualmente',
          empresa: 'Prof Academy',
          local: 'Atibaia - São Paulo',
          conteudo: 'Encarregada de desenvolver uma aplicação para gerenciamento do dia-dia do professor particular, o projeto ainda está no começo de desenvolvimento e escolha das tecnologias'
        },
        {
          id: 2,
          cargo: 'Freelance Developer',
          periodo: 'Fevereiro 2020 - Maio 2020',
          empresa: 'Carteiro Metal indústria Metalúrgica',
          local: 'Mauá - São Paulo',
          conteudo: 'Encarregada do desenvolvimento de um site simples para a empresa utilizando HTML5, CSS, JavaScript e PHP'
        },
        {
          id: 3,
          cargo: 'Professora Particular',
          periodo: 'Novembro 2018 - Dezembro 2019',
          empresa: 'Exatta Aulas de Apoio',
          local: 'São Paulo - São Paulo',
          conteudo: 'Professora Particular para Alunos de Engenharia, especialmente nas matérias de matemática, física e química'
        },
        {
          id: 4,
          cargo: 'Assistente de Controle de Qualidade',
          periodo: 'Janeiro 2018 - Outubro 2018',
          empresa: 'Fv Sistemas Hidráulicos LTDA',
          local: 'Mauá - São Paulo',
          conteudo: 'Encarregada de dar suporte ao setor de qualidade preparando planilhas, análise SWOT e mapas de processos. Participei da equipe de implementação da certificação ISO 9001 versão 2015'
        }
      ]
  }

  const [response] = useState<any>(fakeAPI);

  return (
    <main>
      <Profile response={response}/>
      <SideBar contato={response.contatos} educacao={response.educacao}/>
      <ProfessionalExperience response={response}/>
    </main>
  );
}

export default App;
