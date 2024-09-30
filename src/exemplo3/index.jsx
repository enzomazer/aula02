import { useEffect, useState } from "react";

export default function App() {
  
  const [usuario,setUsuario] = useState();

  useEffect(() => { 

    const  buscarUsuario  = async () => {
        const resposta = await fetch('https://randomuser.me/api');
        const dados = await resposta.json();
        setUsuario(dados.results[0]);
    }
    buscarUsuario();
  }, []);

  return (
    <>  
      <h1>Usuário</h1>
      <ul>
        <li>
          <h1>{usuario?.name.title} {usuario?.name.first} {usuario?.name.last}</h1>
        </li>
        <li>
          <h1>{usuario?.gender}</h1>
        </li>
        <li>
          <h1>{usuario?.location.city} {usuario?.location.street.name} {usuario?.location.street.number}</h1>
        </li>
        <li>
          <h1>{usuario?.email}</h1>
        </li>
        <li>
          <h1>{usuario?.phone}</h1>
        </li>
        <img src={usuario?.picture.large} />
      </ul>
    </>
  );
}
