import React from "react";
import { Contatos } from "../../types/ContactList";

interface ContactlistProps {
  sidebar: Contatos
}

function ContactList(props:ContactlistProps) {
  const {tipo, contato} = props.sidebar
  console.log("contatos",props)

  return (
    <div className="lista-de-contatos">
      <li>
        <div className="item-contato">
          <h4>{tipo}</h4>
          <p>{contato}</p>
        </div>
      </li>
    </div>    
  )
}

export default ContactList;