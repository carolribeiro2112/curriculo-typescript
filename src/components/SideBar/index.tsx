import React from "react";
import { Contatos } from "../../types/ContactList";
import {EducationItem2} from "../../types/Education";
import ContactList from "../ContactList"
import EducationItem from "../Education"
import useToggle from '../../hooks/useToggle';


interface SideBarProps {
  contato: Contatos[],
  educacao: EducationItem2[],
}

function SideBar(props: SideBarProps) {
  const [data, showData] = useToggle()

  return(
    <>
      <aside>
        <div className="sidebar">
          <h3>Contatos</h3>

          
            <button onClick={showData}>Mostrar Contatos</button>
        
          
          
          {props.contato.map((item: Contatos)=> (
            data && <ContactList key={item.id} sidebar={item}/> 
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