import { useEffect, useState } from "react";

export default function App() {
  
  const [listaFotos,setFotos] = useState([]);

  useEffect(() => { 
    const buscarFotos  = async () => {
        const resposta = await fetch('https://jsonplaceholder.typicode.com/photos');
        const dados = await resposta.json();
        setFotos(dados);
    }
    buscarFotos();
  }, []);

  return (
    <>
      <h1>Galeria de Fotos</h1>
      <ul>
        {listaFotos.map(foto => (
          <div>
            <h1>{foto.title}</h1>
            <img src={foto.url} alt={foto.title} width={600} />
          </div>
        ))}
      </ul>
    </>
  );
}
