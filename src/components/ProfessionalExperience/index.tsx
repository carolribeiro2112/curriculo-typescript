import React from "react";
import { ProfessionalExp, ProfessionalExpItem } from "../../types/ProfessionalExp";
import ExperienceItem from "../ExperienceItem"

function ProfessionalExperience(props:ProfessionalExp) {
  
  const {experiencia} = props.response

  console.log("xp",props)
  
  return (
    <>
      <div className="experience">
        <h2>Experiência Profissional</h2>
        {experiencia.map((item:ProfessionalExpItem) =>(
          <ExperienceItem key={item.id} experience={item}/>
        ))}  
      </div>
    </>
  )
}

export default ProfessionalExperience;