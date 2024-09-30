import { useEffect, useState } from "react";

export default function App() {
  
  const [Usuario,setUsuario] = useState({});

  useEffect(() => { 

    const  buscarUsuario  = async () => {
        const resposta = await fetch('https://randomuser.me/api');
        const dados = await resposta.json();
        setUsuario(dados.results[0]);
    }
    buscarUsuario();
  }, {});

  return (
    <>  
      <h1>Usuário</h1>
      <ul>
        <li>
          <h1>{Usuario?.name.title} {Usuario?.name.first} {Usuario?.name.last}</h1>
        </li>
        <li>
          <h1>{Usuario?.gender}</h1>
        </li>
        <li>
          <h1>{Usuario?.location.city} {Usuario?.location.street.name} {Usuario?.location.street.number}</h1>
        </li>
      </ul>
    </>
  );
}
