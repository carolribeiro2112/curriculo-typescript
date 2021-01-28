import React from "react";
import { EducationItem2 } from "../../types/Education";

interface EducationItem2Props{
  sidebar: EducationItem2
}

function Education(props:EducationItem2Props) {
  console.log(props)

  const {instituicao,curso} = props.sidebar

  return (
    <div className="lista-de-formacao">
      <li>
        <h4>{curso}</h4>
        <p>{instituicao}</p>
      </li>
    </div>
  )
}

export default Education;