import React from "react";
import { ProfileItem } from "../../types/Profile";

function Profile(props:ProfileItem) {
  console.log(props)

  const{nome,ocupacao,resumo,perfilProfissional} = props.response

  return(
    <>
      <div className="perfil">
        <img src="https://media-exp1.licdn.com/dms/image/C4D03AQHVNm0gNwwGCw/profile-displayphoto-shrink_400_400/0/1516724845414?e=1616630400&v=beta&t=WjcVxAi9XurHtl3AYz276Uj2qZLuSwKzrAnQWnRK-XE" alt="Perfil" />
      </div>
      
      <div className="biografia">
        <h1>
          {nome}
        </h1>
        <div className="ocupacao">{ocupacao}</div>
        <p>{resumo}</p>
      </div>

      <div className="titulo">
        Perfil <br /> Profissional
      </div>

      <div className="perfil-profissional">
        <p>
          {perfilProfissional}
        </p>
      </div>
    </>
  )
}

export default Profile;