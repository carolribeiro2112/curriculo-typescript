import React, { useState } from "react";
import { Contatos } from "../../types/ContactList";
import {EducationItem2} from "../../types/Education";
import ContactList from "../ContactList"
import EducationItem from "../Education"

interface SideBarProps {
  contato: Contatos[],
  educacao: EducationItem2[],
}

function SideBar(props: SideBarProps) {
  const [dados,mostraDados] = useState<Boolean>(false)

  console.log("sideBar",props)

  const toggle = () => {
    mostraDados(!dados)
  }

  return(
    <>
      <aside>
        <div className="sidebar">
          <h3>Contatos</h3>

          <button onClick={toggle}>Mostrar Contatos</button>
          
          {props.contato.map((item: Contatos)=> (
            dados && <ContactList key={item.id} sidebar={item}/> 
          ))}
          
        </div>

        <div className="sidebar">
          <h3>Educação</h3>
          {props.educacao.map((item: EducationItem2) =>(
            <EducationItem key={item.id} sidebar={item}/>
          ))}
          
        </div>
      </aside>
    </>
  )
}

export default SideBar;